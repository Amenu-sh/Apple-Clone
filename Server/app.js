const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");

// Middle ware to extract info from the html
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middle ware to have access to the frontend

const corsOption = {
  origin: ["http://localhost:3000", "https://www.evangadi.com"],
};

app.use(cors(corsOption));
app.use(express.json());

var mysqlConnection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: "myDBuser",
  password: "myDBuser@321",
  host: "localhost",
  database: "myDB",
});
mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});
app.listen(1234, () => console.log("Listening to : 1234"));

// creating table

app.get("/install", (req, res) => {
  let message = "Table Created";
  let createProducts = `CREATE TABLE if not exists Products(
       product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
        )`;
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
       description_id int auto_increment,
       product_id int(11) not null,
      product_brief_description TEXT not null,
      product_description TEXT not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products (product_id)
        )`;
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
       price_id int auto_increment,
       product_id int(11) not null,
      starting_price varchar(255) not null,
      price_range varchar(255) not null,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products (product_id)
        )`;

  let createUser = `CREATE TABLE if not exists User(
         User_id int auto_increment,
         User_name varchar(255) not null,
         User_password varchar (255) not null,
       PRIMARY KEY (User_id)
          )`;
  let createOrders = `CREATE TABLE if not exists Orders(
       order_id int auto_increment,
       product_id int(11) not null,
       User_id int not null,
       PRIMARY KEY (order_id),
       FOREIGN KEY (product_id) REFERENCES Products (product_id),
       FOREIGN KEY (User_id) REFERENCES User (User_id)

  )`;

  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createUser, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createOrders, (err, results, fields) => {
    if (err) console.log(err);
  });

  res.end(message);
});

// To insert data to the tables
app.post("/addIphones", (req, res) => {
  console.table(req.body);
  const {
    iphoneId,
    imgPath,
    iphoneLink,
    iphoneTitle,
    startPrice,
    priceRange,
    briefDescription,
    fullDescription,
    userPassword,
    userName
  } = req.body;
  let insertToProducts = `INSERT INTO Products (product_url, product_name) VALUES ("${iphoneId}", "${iphoneTitle}")`;
  let insertToProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, "${startPrice}", "${priceRange}")`;

  let insertToProductDescription = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, "${briefDescription}", "${fullDescription}","${imgPath}", "${iphoneLink}")`;

  let insertToOrders = `INSERT INTO Orders (product_id, user_id) VALUES (?, ?)`;
  let insertToUser = `INSERT INTO User (User_name, User_password) VALUES (?, ?)`;

  // Executing the query
  mysqlConnection.query(
    insertToProducts,
    [iphoneId],
    (err, results, fields) => {
      if (err) console.log(`Error Found: ${err}`);
      // console.log(results);

      const id = results.insertId;
      // console.log("id from products table to be used as a foreign key on the other tables>>> ", id)

      mysqlConnection.query(
        insertToProductPrice,
        [id, startPrice, priceRange],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
        }
      );

      mysqlConnection.query(
        insertToProductDescription,
        [id, briefDescription, fullDescription, imgPath, iphoneLink],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
        }
      );
      mysqlConnection.query(
        insertToUser,
        [userName, userPassword],
        (err, results, fields) => {
          if (err) console.log(`Error Found: ${err}`);
          let userId = results.insertId;

          mysqlConnection.query(
            insertToOrders,
            [id, userId],
            (err, results, fields) => {
              if (err) console.log(`Error Found: ${err}`);
            }
          );
        }
      );
    }
  );
  res.end("Data inserted successfully!");
  console.log("Data inserted successfully!");
});

// Adugna way

// app.post("/addIphones", (req, res) => {
//   // console.log(bodyparser.json);
//   console.log(req.body.iphoneId);
//   let Id = req.body.iphoneId;
//   let img = req.body.imgPath;
//   let Url = req.body.iphoneLink;
//   let Title = req.body.iphoneTitle;
//   let Brief = req.body.briefDescription;
//   let StartPrice = req.body.StartPrice;
//   let PriceRange = req.body.priceRange;
//   let Description = req.body.fullDescription;
//   let userId = req.body.userId;
//   let userName = req.body.userName;
//   let UserPassword = req.body.UserPassword
//   let orderId = req.body.orderId

//   // To use it as a foreign key
//   let addedProductId = 0;

//   let sqlAddToProducts =
//     "INSERT INTO Products (product_url, product_name) VALUES ('" +
//     Id +
//     "', '" +
//     Title +
//     "' )";

//   mysqlConnection.query(sqlAddToProducts, function (err, result) {
//     if (err) throw err;
//     console.log("Products inserted");
//   });

// ////////////////////////////////////////////////
//   // trying starts here

//   // let sqlAddToOrder =
//   //   `INSERT INTO Orders (product_id, order_id, user_id ("${orderId}", "${userId}")`;

//   // mysqlConnection.query(sqlAddToOrder, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("order inserted");
//   // });
//   // let sqlAddToUser = `INSERT INTO User (product_id, User_name, User_password) VALUES ("${userName}", "${userId}", "${UserPassword}")`;

//   // mysqlConnection.query(sqlAddToUser, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("User info inserted");
//   // });

// // trying ends here
//  /////////////////////////////////////////

//   mysqlConnection.query(
//     "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
//     (err, rows, fields) => {
//       addedProductId = rows[0].product_id;
//       console.log(addedProductId);
//       if (err) console.log(err);

//       if (addedProductId != 0) {
//         let sqlAddToProductDescription =
//           "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
//           addedProductId +
//           "', '" +
//           Brief +
//           "', '" +
//           Description +
//           "', '" +
//           img +
//           "', '" +
//           Url +
//           "' )";

//         let sqlAddToProductPrice =
//           "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
//           addedProductId +
//           "', '" +
//           StartPrice +
//           "', '" +
//           PriceRange +
//           "')";
//         let sqlAddToUser =
//           "INSERT INTO User (product_id, User_name, User_password) VALUES ('" +
//           addedProductId +
//           "', '" +
//           userId +
//           "', '" +
//           userName +
//           "', '" +
//           UserPassword +
//           "')";
//         let sqlAddToOrder =
//           "INSERT INTO Orders (product_id, order_id, user_id ('" +
//           addedProductId +
//           "', '" +
//           orderId +
//           "', '" +
//           userId +
//           "')";

//         mysqlConnection.query(
//           sqlAddToProductDescription,
//           function (err, result) {
//             if (err) throw err;
//             console.log("Product description inserted");
//           }
//         );

//         mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
//           if (err) throw err;
//           console.log("Product price inserted");
//         });
//         mysqlConnection.query(sqlAddToUser, function (err, result) {
//           if (err) throw err;
//           console.log("User info inserted");
//         });
//         mysqlConnection.query(sqlAddToOrder, function (err, result) {
//           if (err) throw err;
//           console.log("Order Id inserted");
//         });
//       }
//     }
//   );
//   res.end("Product added");
// });

// /////////////////////////////////////
// // To retrieve data from the tables
// app.get("/customers-detail-info", (req, res) => {
// 	connection.query(
//     "SELECT * FROM Products JOIN ProductPrice JOIN ProductDescription JOIN Orders JOIN User ON Products.product_id = ProductPrice.product_id AND Products.product_id = ProductDescription.product_id AND Products.product_id = Orders.product_id AND Products.product_id = User.product_id",
//     (err, results, fields) => {
//       if (err) console.log("Error During selection", err);
//       // console.log(results);
//       res.send(results);
//     }
//   );
// });



// // Route: /update => To adjust or update data from the tables
// app.put("/update", (req, res) => {
// 	const { newName, id } = req.body;
// 	let updateName = `UPDATE Products SET name = ? WHERE product_id = ?`;
// 	connection.query(updateName, [newName, id], (err, results, fields) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) updated");
// 		res.send(results);
// 	});
// });

// // Route: /remove-user => To delete all data from the tables
// app.delete("/remove-user", (req, res) => {
// 	const { id } = req.body;
//   let removeProducts = `DELETE FROM Products WHERE product_id = ?`;
//   let removeProductPrice = `DELETE FROM ProductPrice WHERE product_id = ?`;
// 	let removeProductDescription = `DELETE FROM ProductDescription WHERE product_id = ?`;
// 	let removeOrders = `DELETE FROM Orders WHERE product_id = ?`;
// 	let removeUser = `DELETE FROM User WHERE product_id = ?`;

// 	connection.query(removeUser, [id], (err, results) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) Deleted");
// 	});
// 	connection.query(removeOrders, [id], (err, results) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) Deleted");
// 	});
// 	connection.query(removeProductDescription, [id], (err, results) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) Deleted");
// 	});

// 	connection.query(removeProductPrice, [id], (err, results) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) Deleted");
// 	});

// 	connection.query(removeProducts, [id], (err, results) => {
// 		if (err) throw err;
// 		console.log(results.affectedRows + " record(s) Deleted");
// 	});
// });




// // for react class
app.get("/iphones", (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
        (err, rows) => {
            let iphones = { products: [] };
            iphones.products = rows;
            var stringIphones = JSON.stringify(iphones);
            if (!err) res.end(stringIphones);
            else console.log(err);
        }
    );
});