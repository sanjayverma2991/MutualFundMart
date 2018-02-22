var express = require('express');
var router = express.Router();

var dateFormat = require('dateformat');

const USER = require('../schemas/userSchema.js');
const CATEGORY = require('../schemas/categorySchema.js');
const RECORD = require('../schemas/collection_record.js');
const PURCHASE = require('../schemas/purchaseSchema.js')

// get purchase for all
router.get('/purchaseHistory', (req, res, next) => {
	PURCHASE.find((err, _purchases) =>{
    if (err) {
			console.log("/api/purchase/get all: "+err.name+ ": " +err.message);
			res.status (400); // bad request
			res.json({
				"error": "Bad request",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_purchases) {
				console.log("/api/purchase/get all: no data found");

				res.status (204); // no content
				res.json({
					"nodata": 'No data found.'
				});
			}
			else {
				console.log("/api/purchase/get all");

				res.status(200);
				res.json(_purchases);
		}	
		}
	});
}); // get purchase for all

// get purchase for user
router.get('/:id', (req, res, next) => {
    // if (!req.param.id)
    // {
    //     console.log("/api/purchase/user: BAD REQUEST");

	// 	res.status (400); // bad request
	// 	return res.json({
	// 		"error": "Bad request.",
	// 		"msg": "Empty params."
	// 	});
    // }
	PURCHASE.find({"email_id": req.params.id}, (err, _purchases) =>{
    if (err) {
			console.log("/api/purchase/user: "+err.name+ ": " +err.message);
			res.status (400); // bad request
			res.json({
				"error": "Bad request",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_purchases) {
				console.log("/api/purchase/user: no data found");

				res.status (204); // no content
				res.json({
					"nodata": 'No data found.'
				});
			}
			else {
				console.log("/api/purchase/user");

				res.status(200);
				res.json(_purchases);
		}	
		}
	});
}); // get purchase for user

// change quantity
router.put('/change_qty', function (req, res) {
    if (!req.body) {
        console.log("/api/users/change_qty BAD REQUEST");

        res.status(400);
        res.json({
            "error": "Bad request.",
            "msg": "Empty object."
        });
    }
    else {
        USER.update({ "user_id": req.body.user_id, "cart.s_id": req.body.s_id },
            {
                $set: {
                    "cart.$.qty": req.body.qty
                }
            },
            { multi: false },
            (err, success) => {
                if (err) {
                    console.log("/api/users/change_qty " + err.name + ": " + err.message);

                    res.status(403); // forbidden
                    res.json({
                        "error": "Not modified.",
                        "msg": err.name + ": " + err.message + "."
                    });
                }
                else if (success) {
                    console.log("/api/users/change_qty: " + req.body.user_id);

                    res.status(201); // created
                    res.json({
                        "changed": req.body.qty
                    });
                }
            });
    }
}); // change quantity

// delete from cart
router.put('/del_from_cart', (req, res, next) => {

    if (!req.body) {
        console.log("/api/user/del_from_cart BAD REQUEST");

        res.status(400); // bad request
        res.json({
            "error": "Bad request.",
            "msg": "Empty object."
        });
    }
    else {
        USER.update(
            { "user_id": req.body.user_id },
            {
                $pull: {
                    cart: { "s_id": req.body.s_id }
                }
            },
            { multi: false },
            (err, _success) => {
                if (err) {
                    console.log("/api/user/del_from_cart " + err.name + ": " + err.message);

                    res.status(406); // not acceptable
                    res.json({
                        "error": "Fund delation error",
                        "msg": err.name + ": " + err.message + "."
                    });
                }
                else if (_success) {
                    console.log("/api/user/del_from_cart:" + req.body.s_id);

                    res.status(200); // ok
                    res.json({
                        "deleted": req.body.s_id,
                        "name": req.body.f_name
                    });
                }
            });
    }
}); // delete from cart

// purchase
router.post('/', (req, res, next) => {

    if (!req.body) {
        console.log("/api/purchase/post BAD REQUEST");

        res.status(400); // bad request
        res.json({
            "error": "Bad request.",
            "msg": "Empty object."
        });
    }
    else {
        var count = 0;
        var now = new Date();
        //var dateFormatted = dateFormat(now, "ddd, mmm d, yyyy, HH:MM:ss:l, Z");

        RECORD.findOne({ collection_name: "order_id" },
            (err, _collection) => {
                if (err) {
                    console.log("/api/purchase/post collection record BAD REQUEST");

                    res.status(400); // bad request
                    return res.json({
                        "error": "Bad request.",
                        "msg": "Empty object."
                    });
                }
                console.log("record: " + _collection.collection_name + " " + _collection.records);
                count = _collection.records;

                var newOrder = new PURCHASE({
                    order_id: "ord00" + count,
                    buyer_name: req.body.user.name.f_name + " " + req.body.user.name.l_name,
                    email_id: req.body.user.email_id,
                    purchase: req.body.user.cart,
                    p_date: now,
                    net_amount: req.body.net_amount,
                    net_funds: req.body.net_funds
                });
                //console.log( "request body "+ req.body.name +"  "+ req.body.description );

                if (!newOrder) {
                    console.log("/api/purchase/post empty object BAD REQUEST");

                    res.status(400); // bad request
                    res.json({
                        "error": "Bad request.",
                        "msg": "Empty object."
                    });
                }
                else {
                    PURCHASE.create(newOrder, (err, success) => {
                        if (err) {
                            console.log("/api/purchase/post create " + err.name + ": " + err.message);

                            res.status(406); // not acceptable
                            res.json({
                                "error": "Creation error.",
                                "msg": err.name + ": " + err.message + "."
                            });
                        }
                        else if (success) {
                            console.log("/api/purchase/post CREATED: " + newOrder.order_id);

                            // res.status(201); // created
                            // res.json({
                            //     "amount": newOrder.net_amount,
                            //     "funds": newOrder.net_funds
                            // });

                            // increment the order id
                            RECORD.update(
                                { collection_name: "order_id" },
                                {
                                    $inc: { records: 1 }
                                },
                                { multi: false },
                                (err, success) => {
                                    if (err)
                                        console.log("/api/purchase/post RECORD increment error: " + err.name + ": " + err.message);
                                    else if (success) {
                                        // delete cart dtails and update 
                                        USER.update({ "user_id": req.body.user.user_id },
                                            {
                                                $set: {
                                                    cart: []
                                                },
                                                $inc: {
                                                    net_funds: req.body.net_funds,
                                                    net_amount: req.body.net_amount
                                                }

                                            },
                                            { multi: false },
                                            (err, success) => {
                                                if (err) {
                                                    console.log("/api/users/update funds and empty cart " + err.name + ": " + err.message);

                                                    res.status(403); // forbidden
                                                    res.json({
                                                        "error": "Not modified.",
                                                        "msg": err.name + ": " + err.message + "."
                                                    });
                                                }
                                                else if (success) {
                                                    console.log("/api/users/put UPDATED: " + req.body.user.name.f_name);

                                                    // res.status(201); // created
                                                    // res.json({
                                                    //     "user": newOrder.buyer.name,
                                                    //     "order_id": newOrder.order_id
                                                    // });

                                                    // update sold qty in categories
                                                    req.body.user.cart.forEach(_fund => {
                                                        CATEGORY.update(
                                                            { "catg_id": _fund.c_id, "scheme.scheme_id": _fund.s_id },
                                                            {
                                                                $inc: {
                                                                    "scheme.$.sold": _fund.qty
                                                                }
                                                            },
                                                            {multi: false},
                                                            (err, _success) => {
                                                                if(err) {
                                                                    console.log(">>>>> /api/scheme/ sold inc " +err.name+ ": " +err.message);
                                                    
                                                                    res.status (406); // not acceptable
                                                                    res.json({
                                                                        "error": "Edit error.",
                                                                        "msg": err.name+": "+err.message+"."
                                                                    });
                                                                }
                                                                else if (_success) {
                                                                    console.log("/api/scheme/sold inc: " + _fund.s_id);
                                                    
                                                                    // res.status (200); // ok
                                                                    // res.json({
                                                                    //     "category": req.body.scheme_id,
                                                                    //     "name": req.body.s_name
                                                                    // });
                                                                }
                                                            });
                                                        });
                                                }
                                            }
                                        ); // user update
                                    } // record success
                                }
                            ); //record

                            res.status(201); // created
                            res.json({
                                "amount": newOrder.net_amount,
                                "funds": newOrder.net_funds,
                                "order": newOrder.order_id
                            });

                        } // purchase success
                    }); // purchase
                }
            }); // record find order id
    }
}); // purchase

module.exports = router;

