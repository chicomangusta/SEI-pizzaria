// const express = require('express');
// const router = express.Router();


// //=============================
// //          Data
// //=============================
// const Pizza = require("../models/pizzas");




// //=============================
// //          Routers
// //=============================


// //====================
// //       Index
// //====================
// router.get("/", (req, res) => {
//     Pizza.find({}, (err, allPizza) => {
//         res.render("index", {
//             pizza: allPizza
//         });
//     });
// });


// //====================
// //       New
// //====================
// router.get("/new", (req, res) => {
//     res.render('New')
// });




// // //====================
// // //    Create Route 
// // //====================
// router.post("/", (req, res) => {
//     //CRUST
//     //BROOKLYN
//     if (req.body.brook === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.brook = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.brook = false;
//     }

//     //HAND
//     if (req.body.hand === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.hand = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.hand = false;
//     }

//     //CRUNCHY
//     if (req.body.crunch === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.crunch = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.crunch = false;
//     }


//     //SIZE
//     //SMALL
//     if (req.body.small === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.small = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.small = false;
//     }

//     //MEDIUM
//     if (req.body.medium === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.medium = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.medium = false;
//     }

//     //LARGE
//     if (req.body.large === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.large = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.large = false;
//     }

//     //XL
//     if (req.body.xl === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.xl = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.xl = false;
//     }


//     //TOPPINGS
//     //PEP
//     if (req.body.pepperoni === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.pepperoni = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.pepperoni = false;
//     }

//     //BACON
//     if (req.body.bacon === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.bacon = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.bacon = false;
//     }

//     //BEEF
//     if (req.body.beef === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.beef = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.beef = false;
//     }

//     //SALAMI
//     if (req.body.salami === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.salami = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.salami = false;
//     }

//     //FRANGO
//     if (req.body.chicken === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.chicken = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.chicken = false;
//     }

//     //CATUPIRY
//     if (req.body.catupiry === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.catupiry = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.catupiry = false;
//     }

//     //OLIVES
//     if (req.body.olives === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.olives = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.olives = false;
//     }

//     //ONIONS
//     if (req.body.onions === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.onions = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.onions = false;
//     }

//     //TOMATE
//     if (req.body.tomato === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.tomato = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.tomato = false;
//     }

//     //RALAPENHOS
//     if (req.body.jalapenos === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.jalapenos = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.jalapenos = false;
//     }


//     //DELIVERY
//     if (req.body.delivery === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.delivery = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.delivery = false;
//     }


//     // app.send(req.body);
//     Pizza.create(req.body, (error, createdPizza) => {
//         res.redirect("/pizzas");
//     });
// });









// // //====================
// // //       Show
// // //====================
// router.get('/:id', (req, res) => {
//     Pizza.findById(req.params.id, (err, foundPizza) => {
//         res.render('Show', {
//             pizza: foundPizza
//         });
//     });
// });



// // //====================
// // //      Delete
// // //====================
// router.delete("/:id", (req, res) => {
//     Pizza.findByIdAndRemove(req.params.id, (err, pizza) => {
//         res.redirect("/pizzas"); //redirect back to fruits index
//     });

// });


// // //====================
// // //      Edit
// // //====================
// router.get("/:id/edit", (req, res) => {
//     Pizza.findById(req.params.id, (err, foundPizza) => {
//         res.render("Edit", {
//             pizza: foundPizza
//         });
//     })

// });


// // //====================
// // //      Update(PUT)
// // //====================

// router.put('/:id', (req, res) => {
//     //CRUST
//     //BROOKLYN
//     if (req.body.brook === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.brook = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.brook = false;
//     }

//     //HAND
//     if (req.body.hand === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.hand = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.hand = false;
//     }

//     //CRUNCHY
//     if (req.body.crunch === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.crunch = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.crunch = false;
//     }


//     //SIZE
//     //SMALL
//     if (req.body.small === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.small = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.small = false;
//     }

//     //MEDIUM
//     if (req.body.medium === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.medium = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.medium = false;
//     }

//     //LARGE
//     if (req.body.large === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.large = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.large = false;
//     }

//     //XL
//     if (req.body.xl === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.xl = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.xl = false;
//     }


//     //TOPPINGS
//     //PEP
//     if (req.body.pepperoni === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.pepperoni = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.pepperoni = false;
//     }

//     //BACON
//     if (req.body.bacon === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.bacon = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.bacon = false;
//     }

//     //BEEF
//     if (req.body.beef === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.beef = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.beef = false;
//     }

//     //SALAMI
//     if (req.body.salami === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.salami = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.salami = false;
//     }

//     //FRANGO
//     if (req.body.chicken === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.chicken = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.chicken = false;
//     }

//     //CATUPIRY
//     if (req.body.catupiry === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.catupiry = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.catupiry = false;
//     }

//     //OLIVES
//     if (req.body.olives === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.olives = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.olives = false;
//     }

//     //ONIONS
//     if (req.body.onions === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.onions = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.onions = false;
//     }

//     //TOMATE
//     if (req.body.tomato === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.tomato = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.tomato = false;
//     }

//     //RALAPENHOS
//     if (req.body.jalapenos === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.jalapenos = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.jalapenos = false;
//     }

//     //DELIVERY
//     if (req.body.delivery === "on") {
//         //if checked, req.body.delivery is set to 'on'
//         req.body.delivery = true;
//     } else {
//         //if not checked, req.body.readyToEat is undefined
//         req.body.delivery = false;
//     }


//     // Update the pizza document 
//     Pizza.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     }, (err, updatedModel) => {
//         res.redirect('/pizzas');
//     });
// });




// module.exports = router;