var app = new Vue({
	el : '#app',
	data : {
		calculatingFilters : false,
		calculatingAvg: false,
		compareYears: false,
		filters : { 16 : {}, 17 : {}, 18 : {}, 19 : {}, 20 : {}, 22 : {}},
		filteredSurveyResponses : [],
		surveyChoices : [],
		surveyQuestions : [],
		data: {Responses:[], MultipleResponses:[], Years:[]},
		//surveyResponses: [],
		year: new Date().getFullYear(),
	},
	watch: {
		calculatingFilters: function(newVal, oldVal){
			if(newVal != oldVal){
				//console.log(newVal);
			}
		},
		filteredYearResponses: function(newVal, oldVal){
			if(newVal != oldVal){
				app.applyFilters();
			}
		},
		filteredSurveyResponses:{
			handler: function(newVal, oldVal){
				//console.log("change");
				this.calculatingFilters = false;
			},
			deep:true
		},
	},
	created : function(){
		this.getResponses();
		this.getSurveyQuestions();
	},
	computed : {
		doneCalculating: function(){
			return this.data.Responses.length > 0 && !(this.calculatingFilters) && !(this.calculatingAvg);
		},
		filteredYearResponses: function(){
			//if(this.data.Responses.length > 0 ){
				return this.data.Responses.filter(function(response){
					return app.year == response.SurveyYear;
				});
			//}

		},
		averageScore : function(){
			this.calculatingAvg = true;
			var numerator = 0;
			var denominator = 0;
			var agreeQuestions = this.surveyQuestions.filter(function(question){
				return question.SURVEY_QUESTION_TYPE === 'AGREE';
			})
			/*.reduce(function(a, b){
				return a.concat(b.SURVEY_QUESTION_ID)
			}, [])*/
			.map(function(question){
				var avg = Number(this.getAgreeAverage(question.SURVEY_QUESTION_ID));
				if (!isNaN(avg)){
					numerator += avg;
					denominator += 1;
				}
			}.bind(this))
			this.calculatingAvg = false;
			return (numerator / denominator).toFixed(2);
		},
		filteringQuestions : function(){
			return this.surveyQuestions.filter(function(question){
				return question.SURVEY_QUESTION_ID in this.filters;
			}.bind(this))
		},
	},
	methods : {
		agreeColumnChartOptions : function(title){
			var options =  {
				// title : title,
				vAxis: {
					title: 'Number',
					minValue: 0,
				},
				hAxis: {
					title: 'Response',
					minValue: 1,
					maxValue: 5
				},
				// width: 500,
				height: 500,
				curveType: 'function',
				legend: { position: "none" },
			}
			return options;
		},
		applyFilters : function(e){
			//console.log("apply");
			this.calculatingFilters = true;
			var keepResponse = true;
			var check;
			var checkMultiple = false;
			var answers;
				
			this.filteredSurveyResponses = this.filteredYearResponses.filter(function(response){
				keepResponse = true;
				
				/*Object.keys(response).map(function(question){
					if (question.replace("Q", "") in this.filters){
						if (!this.filters[question.replace("Q", "")][response[question]]){
							keepResponse = false;
						}
					}
				}.bind(this))*/
				// Get the keys for the response
				check = Object.keys(response).find(function(key){
					// If the key is a filter question
					if(key.charAt(0) == 'Q' && key.replace("Q", "") in app.filters){
						//console.log('Filtered Key: ' + key);
						
						// If the response has more than one answer to that filter question
						if(response[key + '_IS_MULTIPLE']){
							//console.log('Multiple Responses');
							checkMultiple = false;
							
							// Get the answers given for that this response, for this filter question, and with the current key
							var answers = app.data.MultipleResponses.filter(function(r){
								return r.RESPONSE_ID == response.RESPONSE_ID && r.SURVEY_QUESTION_ID == key.replace("Q", "") && !(app.filters[r.SURVEY_QUESTION_ID][r.SURVEY_QUESTION_CHOICE_ID]);
							});
							/*answers.forEach(function(answer){
								if(!(app.filters[(key.replace("Q", ""))][answer.surveyQuestionChoiceID])){
									checkMultiple &= 
								}
							});*/
							if(answers.length == 2){
								//console.log('Both Filtered');
								return true;
							}
							else{
								//console.log('Both not filtered');
								return false;
							}
						}
						else{
							//console.log(!(app.filters[(key.replace("Q", ""))][response[key + 'Text']]));
							// if there is a response
							//console.log(response.RESPONSE_ID + ': ' + response[key]);
							if(response[key]){
								//console.log('One Response');
								if (!(app.filters[(key.replace("Q", ""))][response[key]])){
									//console.log('Response Filtered');
									return true;
								}
							}
							else{
								// check if BLANKs are allowed
								//console.log('Blank Response');
								if (!(app.filters[(key.replace("Q", ""))]['BLANK'])){
									//console.log('Response Filtered');
									return true;
								}
							}
						}
					}
					else{
						return false;
					}
				});
				//console.log(check);
				if(check){
					keepResponse = false;
				}

				return keepResponse;
				
			}.bind(this))
		},
		getAgreeAverage : function(id){
			var numerator = 0;
			var denominator = 0;
			this.filteredSurveyResponses.map(function(response){
				if (response['Q' + id] && response['Q' + id] !== ''){
					numerator += parseInt(response['Q' + id]);
					denominator ++;
				}
			}.bind(this))
			return (numerator / denominator).toFixed(2)
		},
		getAgreeRows : function(id){
			var rows = [
				[1, 0, 'darkred'],
				[2, 0, 'red'],
				[3, 0, 'grey'],
				[4, 0, 'lightgreen'],
				[5, 0, 'green']
			]
			this.filteredSurveyResponses.map(function(response){
				switch(parseInt(response['Q' + id])){
					case 1:
						rows[0][1] = rows[0][1] + 1;
						break;
					case 2:
						rows[1][1] = rows[1][1] + 1;
						break;
					case 3:
						rows[2][1] = rows[2][1] + 1;
						break;
					case 4:
						rows[3][1] = rows[3][1] + 1;
						break;
					case 5:
						rows[4][1] = rows[4][1] + 1;
						break;
					default: 
						break;
				}
			}.bind(this))
			return rows;
		},
		getAgreeRowsCompare : function(id){
			var rows = [
				[1, 0, 'darkred'],
				[2, 0, 'red'],
				[3, 0, 'grey'],
				[4, 0, 'lightgreen'],
				[5, 0, 'green']
			]
			this.filteredSurveyResponses.map(function(response){
				switch(parseInt(response['Q' + id])){
					case 1:
						rows[0][1] = rows[0][1] + 1;
						break;
					case 2:
						rows[1][1] = rows[1][1] + 1;
						break;
					case 3:
						rows[2][1] = rows[2][1] + 1;
						break;
					case 4:
						rows[3][1] = rows[3][1] + 1;
						break;
					case 5:
						rows[4][1] = rows[4][1] + 1;
						break;
					default: 
						break;
				}
			}.bind(this))
			return rows;
		},
		getChoicesForQuestion : function(questionId){
			return this.surveyChoices.filter(function(val){
				return val['SURVEY_QUESTION_ID'] === questionId;
			})
		},
		getSurveyQuestions : function(){
			// $.post('https://ax1vnode1.cityoflewisville.com/v2/', {
			// 	webservice : 'Courts/Survey/Get Questions and Choices'
			// }, function(data){
			// 	this.surveyQuestions = data['Questions'];
			// 	this.surveyChoices = data['Choices'];
			// 	this.surveyChoices.map(function(val){
			// 		if (val['SURVEY_QUESTION_ID'] in this.filters){
			// 			this.filters[val['SURVEY_QUESTION_ID']][val['CHOICE_TEXT_ENGLISH']] = true;
			// 			this.filters[val['SURVEY_QUESTION_ID']][''] = true;
			// 		}
			// 	}.bind(this))
			// 	this.filteredSurveyResponses = this.surveyResponses;
			// }.bind(this));
			$.ajax({
				url : 'http://eservices.cityoflewisville.com/citydata/?datasetid=getSurveyQuestionsAndChoices&datasetformat=jsonp&callback=?',
				type: "POST",
				dataType: 'jsonp',
				contentType: "application/json; charset=utf-8",
				success : function(e){
					this.surveyQuestions = e.results;

				}.bind(this)
			})
			$.ajax({
				url : 'http://eservices.cityoflewisville.com/citydata/?datasetid=getSurveyQuestionsAndChoices2&datasetformat=jsonp&callback=?',
				type: "POST",
				dataType: 'jsonp',
				contentType: "application/json; charset=utf-8", 
				success : function(f){
					this.surveyChoices = f.results;
					this.surveyChoices.map(function(val){
						if (val['SURVEY_QUESTION_ID'] in this.filters){
							//this.filters[val['SURVEY_QUESTION_ID']][val['CHOICE_TEXT_ENGLISH']] = true;
							this.filters[val.SURVEY_QUESTION_ID][val.SURVEY_QUESTION_CHOICE_ID] = true;
							//this.filters[val['SURVEY_QUESTION_ID']][''] = true;
							this.filters[val.SURVEY_QUESTION_ID]['BLANK'] = true;
						}
					}.bind(this));
				}.bind(this)
			})
		},
		getResponses: function(){
			$.post('https://query.cityoflewisville.com/v2/',{
				webservice : 'Courts/Survey/Get Responses'
			},
			function(data){
				//console.log(data);
				app.data = data;
				app.filteredSurveyResponses = app.filteredYearResponses;
				//console.log(app.filteredSurveyResponses.length);
				/*if (window.location.hash === '#1'){
						this.filters[22]['Yes'] = false;
						this.filters[22][''] = false;
						this.applyFilters();
					}else if (window.location.hash === '#2'){
						this.filters[22]['No'] = false;
						this.filters[22][''] = false;
						this.applyFilters();
					}else{
						this.filteredSurveyResponses = this.data.Responses;
					}*/
			});
		},
		surveyQuestionsFromSection : function(section){
			return this.surveyQuestions.filter(function(val){
				return val['SECTION'] === section
			})
		}
	}
})

$(window).resize(function(){
	app.applyFilters();
})