var portfolio = new Object();
portfolio.invested = 100;
portfolio.gains = 200;
portfolio.losses = 0;
portfolio.total = portfolio.invested + portfolio.gains + portfolio.losses;
portfolio.percentageChange = ((portfolio.total - portfolio.invested) / portfolio.invested ) * 100 


function TemplatePortfolio (invested, losses, gains) {
	this.invested = invested;
	this.gains = gains;
	this.losses = losses;
	this.calculatePercentageGains = function() {
		return (this.gains / this.invested) * 100
	};
}

var myPortfolio = new TemplatePortfolio(100, 0, 100);
console.log('Height: ' + this.innerHeight);
console.log('Width: ' + this.innerWidth);
//The this keyword is a reference to the object that the function is inside.

document.write('Percentage gains: ' + myPortfolio.calculatePercentageGains() + '%');