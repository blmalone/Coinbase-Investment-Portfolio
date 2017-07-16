//Objects created with literal notation are good: 
// - when you are storing/transmitting data between applications
// - for global or configuration objects that set up information for the page
var coolObject = {
	name: 'sam',
	age: 21
};


//Objects created with conststructors are good when:
// - you have lots of objects used with similar functionality within a page
// - A complex object might not be used in code. 

var portfolio = new Object();
portfolio.invested = 100;
portfolio.gains = 100;
portfolio.losses = 0;
portfolio.total = portfolio.invested + portfolio.gains + portfolio.losses;
portfolio.percentageChange = ((portfolio.total - portfolio.invested) / portfolio.invested ) * 100;

function TemplatePortfolio (invested, currentReturn) {
	this.invested = invested;
	this.currentReturn = currentReturn;
	this.calculateReturn = function() {
			return currentReturn - invested;
	},
	this.calculatePercentageReturn = function() {
		return ((this.currentReturn - this.invested) / this.invested) * 100;
	};
};

var myPortfolio = new TemplatePortfolio(114, 112);
//The this keyword is a reference to the object that the function is inside.

for (i = 0; i < 3; i++) {
	document.write('Percentage gains: ' + myPortfolio.calculatePercentageReturn().toFixed(2) + '% </br>');
	document.write('Percentage gains: ' + myPortfolio.calculatePercentageReturn().toFixed(2) + '% </br>');
	document.write('Actual Return : &pound;' + myPortfolio.calculateReturn() + '</br>');
	document.write('</br>')
}



//Arrays are objects - they have useful properties i.e. length


//innerHTML is a security risk if not used correctly ... page 228

//better to use === !== over == != because the former expects the data to be of the same type.
//JS has type coercion where it can change a values data type if required at runtime. 

//Falsy and thruthy values has interesting properties. JS picks what they are.  pg 167. 


