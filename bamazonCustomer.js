var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors/safe');

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

// create the connection information for the sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    var table = new Table({
      head: ['ID', 'Product Name', 'Department', 'Price', 'Amount In Stock'],
      style: {
        head: ['blue'],
      }
    });
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_inventory]
      );
    }
    console.log(table.toString());

    console.log("-----------------------------------\n");
  });

    connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err
    // console.log(res)
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the ID of the item you wish to purchase?',
          name: 'first',
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          type: 'input',
          message: 'How much would you like to buy?',
          name: 'amount',
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ]).then(function (answer) {
        var buying = (answer.first) - 1
        var howMuch = parseInt(answer.amount)
        // console.log(howMuch)
        var total = parseFloat(((res[buying].price) * howMuch).toFixed(2));

        if (res[buying].stock_inventory >= howMuch) {
          connection.query('UPDATE products SET ? WHERE ?', [
            { stock_inventory: (res[buying].stock_inventory - howMuch) },
            { item_id: answer.first }
          ], function (err, results) {
            if (err) throw err;
            console.log("\nYour total is $" + total.toFixed(2) + ". Your item(s) will be shipped within 2-4 business days!\n")
            proceed()
          });
        } else{
          console.log("\nSorry, there's not enough in stock!\n");
          start()

        }

      })

  })
}
function proceed() {
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Would you like to purchase another item?"
  }]).then(function (ans) {
    if (ans.reply) {
      start();
    } else {
      console.log("\nSee you soon!\n")
      connection.end()
    }
  })
}
