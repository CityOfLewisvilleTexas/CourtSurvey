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
		//surveyResponsesHardcoded : [{1: '5', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '4', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: 'My experience here was short and nice. Thank you!', 22: 'No'}, {1: '3', 2: '5', 3: '3', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '4', 4: '5', 5: '5', 6: '4', 7: '4', 8: '5', 9: '3', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '5', 5: '5', 6: '5', 7: '4', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: '', 20: '', 21: 'no', 22: 'No'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '5', 6: '4', 7: '5', 8: '5', 9: '3', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: 'thank you for the payment plan option since i could not have it dismissed. my visit was quick and easy and even though i made a $500 mistake. it will NEVER happen again but the Judge and the clerks were all very nice and helpful.', 22: 'Yes'}, {1: '5', 2: '', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Search court records', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '3', 6: '3', 7: '4', 8: '5', 9: '4', 10: '4', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'Yes'}, {1: '4', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '2', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Asian', 21: '', 22: 'No'}, {1: '4', 2: '5', 3: '5', 4: '5', 5: '3', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '4', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attorney representing a client', 18: 'Monthly', 19: 'Male', 20: 'White', 21: 'I believe the fine amounts could be a bit more reasonable.  Also, I feel giving the prosecutor a bit more freedom would speed up the courts dockets.  Having to go open for a second deferred does ultimately slow the docket down, but Judge Holoman is always fair on his overall decisions for case resolution.', 22: 'Yes'}, {1: '5', 2: '3', 3: '4', 4: '3', 5: '3', 6: '', 7: '4', 8: '4', 9: '', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Criminal', 17: 'Attorney representing a client', 18: 'Several times a year', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: 'Courtney was fantastic.  Very polite and extremely efficient.  A good experience.', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '4', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'American Indian', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attorney representing a client', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'Yes'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '3', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Several times a year', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'Asian', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '5', 9: '3', 10: '2', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: 'I wish there was a way to make payments online for traffic tickets that are being made on multiple payments. I work mostly nights and have to sleep during the day because of it so it can get difficult to make myself get up and get here before the court house closes', 22: 'No'}, {1: '4', 2: '4', 3: '5', 4: '4', 5: '5', 6: '4', 7: '4', 8: '5', 9: '3', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Male', 20: 'Mixed race', 21: 'Very neat building ', 22: 'No'}, {1: '4', 2: '4', 3: '5', 4: '5', 5: '5', 6: '4', 7: '4', 8: '4', 9: '4', 10: '4', 11: '4', 12: '4', 13: '4', 14: '4', 15: '4', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Asian', 21: '', 22: 'Yes'}, {1: '2', 2: '4', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '4', 9: '3', 10: '4', 11: '5', 12: '5', 13: '5', 14: '5', 15: '4', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'American Indian', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '4', 6: '5', 7: '5', 8: '5', 9: '4', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'Asian', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '3', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Party to a legal matter', 18: 'Several times a year', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '4', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '3', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '3', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: "I work full time, and getting here during hours is not always easy or do-able.  Work and family and volunteering take a lot of my time and so getting her during your operations hours is not always easy.  I missed a deadline and there was little care or concern for this.  It's not your problem i understand.  ", 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'Asian', 21: '', 22: 'No'}, {1: '5', 2: '2', 3: '4', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Female', 20: '', 21: '', 22: 'No'}, {1: '3', 2: '4', 3: '4', 4: '4', 5: '5', 6: '4', 7: '4', 8: '4', 9: '3', 10: '2', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: '', 20: '', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: '', 17: '', 18: '', 19: '', 20: '', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '1', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'City Ordinance', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '4', 5: '4', 6: '4', 7: '4', 8: '', 9: '', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '3', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '3', 2: '', 3: '3', 4: '', 5: '1', 6: '3', 7: '3', 8: '3', 9: '2', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: '', 20: '', 21: 'IH 11.29', 22: 'No'}, {1: '1', 2: '', 3: '1', 4: '', 5: '', 6: '', 7: '', 8: '1', 9: '1', 10: '1', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Several times a year', 19: 'Female', 20: 'Black or African-American', 21: 'IH 11.29', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '3', 6: '5', 7: '5', 8: '5', 9: '', 10: '', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Female', 20: 'Hispanic or Latino', 21: 'IH 11.29', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '3', 6: '5', 7: '5', 8: '5', 9: '', 10: '3', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: 'IH 11.29', 22: 'Yes'}, {1: '4', 2: '4', 3: '5', 4: '5', 5: '4', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '4', 12: '4', 13: '4', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: 'IH 11.29', 22: 'Yes'}, {1: '3', 2: '2', 3: '3', 4: '3', 5: '3', 6: '2', 7: '2', 8: '4', 9: '', 10: '', 11: '2', 12: '2', 13: '3', 14: '4', 15: '4', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: 'IH 11.29 Better to handle all cases at one time then have to come back; live far', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '1', 5: '5', 6: '5', 7: '4', 8: '5', 9: '', 10: '', 11: '2', 12: '5', 13: '1', 14: '1', 15: '5', 16: 'Traffic', 17: '', 18: '', 19: 'Male', 20: 'Black or African-American', 21: 'IH 11.29', 22: 'Yes'}, {1: '4', 2: '', 3: '4', 4: '', 5: '4', 6: '4', 7: '4', 8: '4', 9: '', 10: '4', 11: '4', 12: '4', 13: '4', 14: '4', 15: '4', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: 'IH 11.29', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: 'IH 11.29', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '3', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: 'IH 11.29', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '3', 6: '5', 7: '5', 8: '5', 9: '', 10: '4', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: 'Once a year or less', 19: 'Female', 20: 'Mixed race', 21: 'IH 11.29 The judge has been very helpful with me every time I have come to court', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: '', 19: 'Male', 20: 'White', 21: 'IH 11.29', 22: 'Yes'}, {1: '3', 2: '3', 3: '5', 4: '5', 5: '4', 6: '4', 7: '4', 8: '5', 9: '1', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Attorney representing a client', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: 'IH 11.29', 22: 'No'}, {1: '1', 2: '1', 3: '1', 4: '1', 5: '1', 6: '1', 7: '1', 8: '1', 9: '1', 10: '1', 11: '1', 12: '1', 13: '1', 14: '1', 15: '1', 16: 'Traffic', 17: '', 18: 'Monthly', 19: 'Male', 20: 'Mixed race', 21: 'IH 11.29 Judge Holman is fair; gives you a chance to make it right', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '11.28', 22: 'Yes'}, {1: '5', 2: '5', 3: '4', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '11.28', 22: 'Yes'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '4', 6: '4', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '11.28', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '4', 5: '4', 6: '4', 7: '4', 8: '4', 9: '4', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: '', 19: '', 20: '', 21: '11.28', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '11.28', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '11.28', 22: 'No'}, {1: '2', 2: '1', 3: '1', 4: '1', 5: '1', 6: '1', 7: '1', 8: '1', 9: '', 10: '1', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '11.28', 22: 'No'}, {1: '5', 2: '3', 3: '5', 4: '5', 5: '5', 6: '3', 7: '5', 8: '5', 9: '', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'Several times a year', 19: 'Male', 20: 'Black or African-American', 21: '11.28', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '11.28', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '3', 10: '3', 11: '4', 12: '3', 13: '3', 14: '4', 15: '4', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '11.28', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: '', 17: '', 18: '', 19: '', 20: '', 21: '11.28', 22: 'Yes'}, {1: '4', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '4', 9: '5', 10: '5', 11: '4', 12: '4', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'Hispanic or Latino', 21: '11.28', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '11.28', 22: 'Yes'}, {1: '5', 2: '', 3: '5', 4: '', 5: '', 6: '5', 7: '', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '11.28 You make me feel good the opportunity to do my payments', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '3', 2: '3', 3: '5', 4: '5', 5: '1', 6: '5', 7: '5', 8: '5', 9: '3', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: 'Courtney was very friendly; smiled the entire time; very helpful', 22: 'No'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '4', 2: '4', 3: '5', 4: '3', 5: '4', 6: '2', 7: '2', 8: '5', 9: '4', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '', 6: '4', 7: '5', 8: '4', 9: '', 10: '5', 11: '5', 12: '', 13: '', 14: '5', 15: '5', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '4', 3: '5', 4: '4', 5: '4', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '3', 2: '5', 3: '3', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '3', 11: '5', 12: '3', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '4', 3: '5', 4: '', 5: '4', 6: '4', 7: '5', 8: '5', 9: '', 10: '4', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'Yes'}, {1: '4', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '4', 11: '3', 12: '', 13: '3', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'Mixed race', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '2', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Party to a legal matter', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '4', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '2', 3: '5', 4: '5', 5: '4', 6: '3', 7: '3', 8: '5', 9: '1', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: 'Judge Holman was very fair and explained procedure clearly', 22: 'No'}, {1: '4', 2: '4', 3: '4', 4: '4', 5: '5', 6: '5', 7: '5', 8: '4', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '3', 3: '5', 4: '4', 5: '4', 6: '4', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: 'Search court records', 18: 'First time in the courthouse', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '4', 6: '4', 7: '5', 8: '5', 9: '5', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '1', 2: '1', 3: '1', 4: '1', 5: '1', 6: '1', 7: '1', 8: '1', 9: '1', 10: '1', 11: '1', 12: '1', 13: '1', 14: '1', 15: '1', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Female', 20: 'Hispanic or Latino', 21: 'The Judge was very helpful/understanding. Understood my situation; very helpful', 22: 'Yes'}, {1: '4', 2: '3', 3: '5', 4: '5', 5: '5', 6: '4', 7: '3', 8: '5', 9: '3', 10: '1', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: '', 20: '', 21: 'prosecutor not nice; said open til 5pm Friday', 22: 'Yes'}, {1: '4', 2: '4', 3: '3', 4: '', 5: '4', 6: '3', 7: '4', 8: '4', 9: '', 10: '', 11: '4', 12: '', 13: '', 14: '4', 15: '5', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '3', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Criminal', 17: 'Party to a legal matter', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Mixed race', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '4', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '', 13: '5', 14: '5', 15: '5', 16: 'Juvenile Matter', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '1', 2: '3', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '4', 9: '2', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Mixed race', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '3', 6: '3', 7: '4', 8: '5', 9: '3', 10: '4', 11: '3', 12: '3', 13: '3', 14: '4', 15: '', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'Yes'}, {1: '3', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: 'The court clerk should smile and look them in the eye when she first sees the customer. Otherwise she did eventually warm up and become more personal. ', 22: 'No'}, {1: '4', 2: '3', 3: '4', 4: '4', 5: '4', 6: '4', 7: '4', 8: '3', 9: '', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Asian', 21: '', 22: 'No'}, {1: '3', 2: '3', 3: '3', 4: '3', 5: '3', 6: '3', 7: '3', 8: '3', 9: '3', 10: '3', 11: '3', 12: '3', 13: '3', 14: '2', 15: '3', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '4', 2: '3', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '4', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Party to a legal matter', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '4', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '5', 6: '', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Several times a year', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '5', 3: '5', 4: '5', 5: '3', 6: '5', 7: '5', 8: '5', 9: '4', 10: '2', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '4', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '4', 9: '', 10: '2', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '3', 2: '5', 3: '5', 4: '', 5: '', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '1', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '3', 4: '3', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '1', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'Once a year or less', 19: 'Female', 20: 'Mixed race', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'City Ordinance', 17: 'Make a payment', 18: 'Once a year or less', 19: 'Female', 20: 'Black or African-American', 21: 'The staff is always polite and very attentive when I come in. The ladies are always courtesy and prompt with me. Ive never had a problem getting the help I needed.', 22: 'No'}, {1: '1', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: 'Need outside signs for municpal court house', 22: 'No'}, {1: '5', 2: '5', 3: '4', 4: '4', 5: '4', 6: '2', 7: '2', 8: '4', 9: '3', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'Several times a year', 19: 'Male', 20: '', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: 'They were wonderful and totally helpful!', 22: 'No'}, {1: '4', 2: '', 3: '5', 4: '4', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Male', 20: 'Asian', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: '', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '3', 3: '5', 4: '4', 5: '', 6: '', 7: '5', 8: '4', 9: '', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: '', 20: '', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Several times a year', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '2', 2: '4', 3: '4', 4: '', 5: '', 6: '', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: 'More information as to whats happening while we wait for jury duty would have been appreciated', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '', 6: '4', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '3', 6: '3', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '4', 3: '5', 4: '4', 5: '', 6: '', 7: '', 8: '4', 9: '', 10: '3', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '', 7: '', 8: '5', 9: '4', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: 'Once a year or less', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '', 5: '', 6: '5', 7: '5', 8: '5', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: 'Jury Duty', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '1', 2: '1', 3: '1', 4: '1', 5: '1', 6: '1', 7: '1', 8: '1', 9: '', 10: '1', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '2', 2: '4', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Get information', 18: 'First time in the courthouse', 19: 'Female', 20: 'White', 21: '', 22: 'No'}, {1: '4', 2: '5', 3: '5', 4: '', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Make a payment', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: '', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'No'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '5', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Juvenile Matter', 17: '', 18: 'First time in the courthouse', 19: 'Female', 20: 'Black or African-American', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '', 10: '5', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Juvenile Matter', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'Yes'}, {1: '2', 2: '4', 3: '4', 4: '4', 5: '4', 6: '4', 7: '4', 8: '4', 9: '4', 10: '4', 11: '', 12: '', 13: '', 14: '', 15: '', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'White', 21: '', 22: 'No'}, {1: '1', 2: '1', 3: '1', 4: '1', 5: '1', 6: '1', 7: '1', 8: '1', 9: '1', 10: '1', 11: '1', 12: '1', 13: '1', 14: '1', 15: '1', 16: 'Juvenile Matter', 17: 'Party to a legal matter', 18: 'Several times a year', 19: 'Male', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '', 3: '5', 4: '', 5: '', 6: '', 7: '5', 8: '5', 9: '', 10: '5', 11: '5', 12: '', 13: '', 14: '5', 15: '5', 16: 'Juvenile Matter', 17: 'Attend a hearing or trial', 18: 'First time in the courthouse', 19: 'Male', 20: 'Hispanic or Latino', 21: '', 22: 'Yes'}, {1: '4', 2: '4', 3: '4', 4: '', 5: '4', 6: '5', 7: '5', 8: '4', 9: '', 10: '3', 11: '5', 12: '5', 13: '5', 14: '5', 15: '5', 16: 'Juvenile Matter', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Female', 20: 'White', 21: '', 22: 'Yes'}, {1: '5', 2: '5', 3: '5', 4: '5', 5: '5', 6: '5', 7: '5', 8: '5', 9: '4', 10: '4', 11: '', 12: '', 13: '', 14: '5', 15: '', 16: 'Traffic', 17: 'Attend a hearing or trial', 18: 'Once a year or less', 19: 'Male', 20: 'White', 21: '', 22: 'Yes'}],
		data: {Responses:[], MultipleResponses:[], Years:[]},
		//surveyResponses: [],
		year: '',
		years: [],
		showFilters: false,
		page: 'analytics',
		section: 1,
		colors: ["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#2a778d","#668d1c","#bea413","#0c5922","#743411"]
		//colors: ['#311b92','#d1c4e9','#4527a0','#b39ddb','#512da8','#9575cd','#7e57c2','#673ab7','#5e35b1'],
	},
	watch: {
		/*year:function(newVal, oldVal){
			if(newVal != oldVal && !(this.compareYears)){
				this.years[0] = newVal;
			}
		},*/
		calculatingFilters: function(newVal, oldVal){
			if(newVal != oldVal){
				console.log(newVal);
			}
		},
		filteredYearResponses: function(newVal, oldVal){
			if(newVal != oldVal){
				app.applyFilters();
			}
		},
		filteredSurveyResponses:{
			handler: function(newVal, oldVal){
				console.log("change");
				this.calculatingFilters = false;
			},
			deep:true
		},
	},
	created : function(){
		this.getResponses();
		this.getSurveyQuestions();
		var yr = new Date().getFullYear();
		var a = this.data.Years.findIndex(function(y){
			return y.Year == yr;
		});
		if(a = -1){
			yr = yr -1;
		}
		var b = this.data.Years.findIndex(function(y){
			return y.Year == yr;
		});
		// Added 1/3/19 to show max year available if current and last year are not in database
		if(b = -1){
			this.data.Years.reduce(function(max, y){
	            return y.Year > max ? y.Year : max;
	        }, 0);
		}
		this.year = yr;
		this.years = yr;
	},
	computed : {
		doneCalculating: function(){
			return this.data.Responses.length > 0 && !(this.calculatingFilters) && !(this.calculatingAvg);
		},
		compareYearsChosen: function(){
			return this.years.length == 2;
		},
		sortedYears: function(){
			return this.years.sort(function(a, b){
				return a.year - b.year;
			});
		},
		filteredYearResponses: function(){
			if(!(this.compareYears)){
				return this.data.Responses.filter(function(response){
					return app.year == response.SurveyYear;
				});
			}
			else if(this.compareYears && this.compareYearsChosen){
				return this.data.Responses.filter(function(response){
					return isCompareYear(response.SurveyYear);
				});
			}
			else{
				return [];
			}
		},
		filteredSurveyResponses_byYear: function(){
			var filteredResponses = {};
			if(this.compareYears && this.compareYearsChosen){
				this.years.forEach(function(yr){
					filteredResponses.yr = app.filteredSurveyResponses.filter(function(response){
						return response.SurveyYear == yr;
					});
				});
			}
			return filteredResponses;
		},
		numberResponses: function(){
			return this.filteredSurveyResponses.length;
		},
		averageScore : function(){
			this.calculatingAvg = true;
			var numerator = 0;
			var denominator = 0;
			var agreeQuestions = this.surveyQuestions.filter(function(question){
				return question.SURVEY_QUESTION_TYPE === 'AGREE';
			})
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
		
		/*backgroundRows: function(){
			var rows = {};
			
			
		},*/
	},
	methods : {
		clickShowFilters: function(){
			console.log(!(this.showFilters));
			this.showFilters = !(this.showFilters);
		},
		setPage: function(pageName){
			this.page = pageName;
		},
		
		averageSection: function(section){
			var total = 0;
			var denominator = 0;
			var agreeQuestions = this.surveyQuestions.filter(function(question){
				return question.SECTION == section && question.SURVEY_QUESTION_TYPE === 'AGREE';
			})
			.map(function(question){
				var avg = Number(this.getAgreeAverage(question.SURVEY_QUESTION_ID));
				if (!isNaN(avg)){
					total += avg;
					denominator += 5;
				}
			}.bind(this));
			return (total * 100 / denominator ).toFixed(1);
		},
		getSurveyChoices_forQuestion: function(questionID){
			return this.surveyChoices.filter(function(choice){
				return questionID === choice.SURVEY_QUESTION_ID; 
			}).sort(function(a, b){
				return a.SURVEY_QUESTION_CHOICE_ID - b.SURVEY_QUESTION_CHOICE_ID;
			});
		},
		getMultipleChoices_forResponse_byQuestion: function(responseID, questionID){
			return this.data.MultipleChoices.filter(function(choice){
				return responseID === choice.RESPONSE_ID && questionID === choice.SURVEY_QUESTION_ID;
			});
		},
		getMultipleChoices_forResponse: function(responseID){
			return this.data.MultipleChoices.filter(function(choice){
				return responseID === choice.RESPONSE_ID; 
			});
		},
		getTotal_byQuestion_Valid: function(questionID){
			var t = this.filteredSurveyResponses.filter(function(response){
				if(response['Q' + questionID + 'Text'] || response['Q' + questionID + '_IS_MULTIPLE']){
					return true;
				}
				else{
					return false;
				}
			});
			return t.length;
		},
		getTotal_byQuestion_forChoice: function(questionID, choiceID){
			var answers;
			var f;
			if(choiceID){
				var t = this.filteredSurveyResponses.filter(function(response){
					// if there was an answer
					if(response['Q' + questionID + 'Text'] && response['Q' + questionID + 'Text']!=''){
						return choiceID == response['Q' + questionID];
					}
					// else if there were multiple answers
					else if(response['Q' + questionID + '_IS_MULTIPLE']){
						// Get the answers given for that this response, for this filter question, and with the current key
						answers = app.getMultipleChoices_forResponse_byQuestion(response.RESPONSE_ID, questionID);
						f = answers.findIndex(function(answer){
							return choiceID == answer.SURVEY_QUESTION_CHOICE_ID;
						});
						if(f != -1){
							return true;
						}
						else{
							return false;
						}
					}
					else{
						return false;
					}
				});
				return t.length;
			}
			else{
				return 0;
			}
		},
		getTotal_byQuestion_forNull: function(questionID){
			var t = this.filteredSurveyResponses.filter(function(response){
				if(!(response['Q' + questionID + 'Text']) && !(response['Q' + questionID + '_IS_MULTIPLE'])){
					return true;
				}
				else{
					return false;
				}
			});
			return t.length;
		},
		applyFilters : function(e){
			console.log("apply");
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
							var answers = app.data.MultipleChoices.filter(function(r){
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
		isCompareYear: function(yr){
			return this.years.some(function(y){
				return y == yr;
			});
		},
		getAverageScore_byYear: function(yr){
			var numerator = 0;
			var denominator = 0;
			var agreeQuestions = this.surveyQuestions.filter(function(question){
				return question.SURVEY_QUESTION_TYPE === 'AGREE';
			})
			.map(function(question){
				var avg = Number(this.getAgreeAverage_byYear(question.SURVEY_QUESTION_ID, yr));
				if (!isNaN(avg)){
					numerator += avg;
					denominator += 1;
				}
			}.bind(this))
			this.calculatingAvg = false;
			return (numerator / denominator).toFixed(2);
		},
		getNumberResponses_byYear:function(yr){
			return this.filteredSurveyResponses_byYear[yr].length;
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
			console.log(numerator + '/' + denominator);
			return (numerator / denominator).toFixed(2)
		},
		getAgreeAveragePrint: function(id){
			var numerator = 0;
			var denominator = 0;
			this.filteredSurveyResponses.map(function(response){
				if (response['Q' + id] && response['Q' + id] !== ''){
					numerator += parseInt(response['Q' + id]);
					denominator ++;
				}
			}.bind(this))
			console.log(numerator + '/' + denominator);
			return (numerator / denominator).toFixed(1)
		},
		getAgreeAverage_byYear : function(id,yr){
			var numerator = 0;
			var denominator = 0;
			this.filteredSurveyResponses_byYear[yr].map(function(response){
				if (response['Q' + id] && response['Q' + id] !== ''){
					numerator += parseInt(response['Q' + id]);
					denominator ++;
				}
			}.bind(this))
			return (numerator / denominator).toFixed(2)
		},
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
		backgroundColumnChartOptions : function(id){
			var options =  {
				title : this.getQuestionText(id),
				vAxis: {
					//title: 'Number',
					minValue: 0,
				},
				hAxis: {
					//title: 'Response',
					minValue: this.getMinChoice(id),
					maxValue: 'Blank'
				},
				//width: 500,
				height: 500,
				curveType: 'function',
				legend: { position: "none" },
			}
			return options;
		},
		backgroundPieChartOptions : function(id){
			var options =  {
				backgroundColor: {fill:'transparent'},
				//title : this.getQuestionText(id),
				pieSliceText:'none',
				chartArea:{left:10,top:10,width:280,height:280},
				legend: {position: 'none'},
				height: 300,
				width: 300,
				//colors: app.colors
			}
			return options;
		},
		backgroundPieChartOptionsPrint : function(id){
			var options =  {
				backgroundColor: {fill:'transparent'},
				//title : this.getQuestionText(id),
				pieSliceText:'none',
				chartArea:{left:0,top:0,width:'100%',height:'100%'},
				legend: {position: 'none'},
				height: 195,
				width: 195,
				//colors: app.colors
			}
			return options;
		},
		getBackgroundRows : function(questionID){
			var rows = [];
			var choices = this.getSurveyChoices_forQuestion(questionID);
			//choices.push("Blank");
			
			for(var i = 0; i < choices.length; i++){
				rows.push([choices[i].CHOICE_TEXT_ENGLISH, 0, app.colors[i], 0]);
			}
			rows.push(['Blank', 0, app.colors[i], 0]);
			
			console.log(rows);
			
			this.filteredSurveyResponses.map(function(response){
				// if there was an answer
				if(response['Q' + questionID + 'Text']){
					var i = choices.findIndex(function(choice){
						return choice.CHOICE_TEXT_ENGLISH == response['Q' + questionID + 'Text'];
					});
					if(i != -1){
						(rows[i][1])++;
						(rows[i][3])++;
					}
					else{
						console.log('ERROR NOT FOUND: ' + questionID + ': ' + response['Q' + questionID + 'Text']);
					}
				}
				// else if there were multiple answers
				else if(response['Q' + questionID + '_IS_MULTIPLE']){
					// Get the answers given for that this response, for this filter question, and with the current key
					var answers = app.getMultipleChoices_forResponse_byQuestion(response.RESPONSE_ID, questionID);
					// for each answer
					answers.map(function(answer, index){
						console.log(answer + ': ' + answer.SURVEY_QUESTION_CHOICE_ID);
						var i = choices.findIndex(function(choice){
							return choice.SURVEY_QUESTION_CHOICE_ID == answer.SURVEY_QUESTION_CHOICE_ID;
						});
						if(i != -1){
							(rows[i][1])++;
							(rows[i][3])++;
						}
						else{
							console.log('ERROR NOT FOUND: ' + questionID + ': ' + answer.MULTIPLE_RESPONSE_ID + ": " + answer.SURVEY_QUESTION_CHOICE_ID);
						}
					});
				}
				// else no response
				else{
					rows[(rows.length-1)][1]++;
					rows[(rows.length-1)][3]++;
				}
			});
			
			for(var i = 0; i < choices.length; i++){
				rows[i][0] = rows[i][0] + ': ' + rows[i][1].toString();
			}
			return rows;
		},
		getMinChoice:function(id){
			var choice = this.surveyChoices.find(function(c){
				return id == c.SURVEY_QUESTION_ID;
			});
			if(choice){
				return choice.CHOICE_TEXT_ENGLISH;
			}
			else{
				return 'min';
			}
		},
		getQuestionText: function(questionID){
			var q = this.surveyQuestions.find(function(question){
				return questionID == question.SURVEY_QUESTION_ID;
			});
			return q.SURVEY_QUESTION_ENGLISH;
		},
		getChoicesForQuestion : function(questionID){
			return this.surveyChoices.filter(function(val){
				return val['SURVEY_QUESTION_ID'] === questionID;
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
				webservice : 'Courts/Survey/Get Responses2'
			},
			function(data){
				console.log(data);
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