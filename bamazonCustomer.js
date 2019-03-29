var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors/safe');
var itemname;
var price;
var department;
var stock;

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var table = new Table({
      head: ['ID', 'Product Name', 'Department', 'Price', 'Amount In Stock'],
      style: {
        head: ['blue'],
      }
    });
    for(var i = 0; i < res.length; i++){
      table.push(
        [res[i].item_id, res[i].product_name,  res[i].department_name, res[i].price, res[i].stock_inventory]
      );
    }
    console.log(table.toString());

    console.log("-----------------------------------\n");
    questions();
  });
}

function questions(){
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the ID of the item you wish to purchase?',
        name: 'input'
      }
    ]).then(function(firstquest){
      
    })
}