function calculateSales(salesDataArray) {
  var totalSales = 0;
  for (var x = 0; x < salesDataArray.length; x++) {
    totalSales += salesDataArray[x];
  }
  return totalSales;
}


function calculateSalesTax(salesData, taxRates) {
  var salesTaxObject = {};
  for (var i = 0; i < salesData.length; i++) {
    var company = salesData[i].name;
    if (!salesTaxObject[company]) {
      salesTaxObject[company] = {totalSales: 0, totalTax: 0};
    }
    var sales = calculateSales(salesData[i].sales);
    var tax = sales * taxRates[salesData[i].province];
    salesTaxObject[company].totalSales += sales;
    salesTaxObject[company].totalTax += tax;
  }
  return salesTaxObject;
}



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
//should return in console:

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/