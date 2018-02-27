var express = require('express');
var router = express.Router();

var dateFormat = require('dateformat');

const USER = require('../schemas/userSchema.js');
const RECORD = require('../schemas/collection_record.js');

// get all user
router.get('/', (req, res, next) => {
	USER.find((err, _users) =>{
    if (err) {
			console.log("/api/users/get all: "+err.name+ ": " +err.message);
			res.status (400); // bad request
			res.json({
				"error": "Bad request",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_users) {
				console.log("/api/users/get all: no data found");

				res.status (204); // no content
				res.json({
					"nodata": 'No data found.'
				});
			}
			else {
				console.log("/api/users/get all");

				res.status(200);
				res.json(_users);
		}	
		}
	});
}); // get all users

// get user with id
router.get('/:id', (req, res, next) =>{
	USER.findOne({user_id: req.params.id}, (err, _user) =>{
    if (err) {
			console.log("/api/users/get/:id "+err.name+ ": " +err.message);

			res.status (400);
			res.json({
				"error": "Bad request.",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_user) {
				console.log("/api/users/get/:id no content found for "+req.params.id);

				res.status (204); // no content
				res.json({
					"nodata": 'no content found for '+ req.params.id
				});
			} 
			else {
				console.log("/api/users/get/:id " +req.params.id);

				res.status (200); //ok
				res.json(_user);
		    }
		}
	});
}); // get(users/:id)

// signup
router.post('/user_create', (req, res, next) => {
	
	if (!req.body) {
		console.log("/api/users/post BAD REQUEST");

		res.status (400); // bad request
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
		var count = 0;
		var now = new Date(); 
		//var dateFormatted = dateFormat(now, "ddd, mmm d, yyyy, HH:MM:ss:l, Z");

		RECORD.findOne({collection_name: "+++++++"}, 
			(err, _collection) => {
				if (err) {
					console.log("/api/users/post BAD REQUEST");

					res.status (400); // bad request
					return res.json({
						"error": "Bad request.",
						"msg": "Empty object."
					});
				}
				console.log("record: "+_collection.collection_name +" "+ _collection.records);
				count = _collection.records;
							
			var newUser = new USER( {
				user_id: "usr00"+count,
				email_id: req.body.email_id,
				name: {
					f_name: req.body.f_name,
					l_name: req.body.l_name
				},
				passwd: req.body.passwd,
				phone: req.body.phone,
				gender: req.body.gender,
				joined_date: now
			});
			//console.log( "request body "+ req.body.name +"  "+ req.body.description );

			if (!newUser) {
				console.log("/api/users/post BAD REQUEST");

				res.status (400); // bad request
				res.json({
					"error": "Bad request.",
					"msg": "Empty object."
				});
			} 
			else {
				USER.create(newUser, (err, success) => {
					if (err) {
						console.log("/api/users/post " +err.name+ ": " +err.message);

						res.status (406); // not acceptable
						res.json({
							"error": "Creation error.",
							"msg": err.name+": "+err.message+"."
						});
					}
					else if (success)
					{
						console.log("/api/users/post CREATED: " +req.body.user_id);

						res.status (201); // created
						res.json({
							"created": "User created",
							"user_id": "usr00"+count,
							"email_id": req.body.email_id,
							"f_name": req.body.f_name,
							"l_name": req.body.l_name,
							"phone": req.body.phone,
							"privilege": false
						});

						// increment the user id
						RECORD.update(
							{ collection_name: "user_id" },
							{
								$inc: { records: 1 }
							},
							{multi: false},
							(err) => {
								if (err)
									console.log("/api/users/post RECORD increment error: " +err.name+ ": " +err.message);
							}
						);
					}
				});
			}
		});
	}
}); // signup

// login
router.post('/login', (req, res, next) => {
	console.log("/api/users/login : "+req.body.uname + req.body.pwd);
	var loginMsg = "";
	var successFlag = false;
	
	USER.findOne({email_id: req.body.uname}, (err, _user) => {
		if (err) {
			console.log(err.name+ ": " +err.message);

			res.status (500);
			res.json({
				"error": err.name+": "+err.message
			});
		} 
		else 
		{
			if (!_user) {
				console.log("/:uname not found "+req.body.uname);

				//res.status (404);
				loginMsg = "Username not found";
				successFlag = false;
			} 
			else 
			{
				// match passwords
				console.log("match passwords..??");
				
				if ( _user.passwd != req.body.pwd) //password
				{
					console.log("password didnt match >>>>>");
					loginMsg = "Wrong password";
					successFlag = false;
					//res.json({"failed": 'wrong password'});
				}
				else
				{
					console.log("password matched >>>>>"+ _user.name.f_name);
					// if (req.body.admin)
					// {
					// 	if (_user.privilege)
					// 	{
					// 		console.log("Admin logged in >>>>>");
					// 		loginMsg = "Logged in as admin";
					// 		successFlag = true;
					// 	}
					// 	else
					// 	{
					// 		console.log("You don't have admin privilege >>>>>");
					// 		loginMsg = "You don't have admin privilege";
					// 		successFlag = false;
					// 	}
					// }
					// else
					// {
					// 	console.log("User logged in >>>>>");
					// 	loginMsg = "You are logged in";
					// 	successFlag = true;
					// }
					if (_user.privilege)
					{
						console.log("Admin logged in >>>>>");
						loginMsg = "Logged in as admin";
						successFlag = true;
					}
					else
					{
						console.log("User logged in >>>>>");
						loginMsg = "You are logged in";
						successFlag = true;
					}
				}
			}

			if (successFlag)
			{
				res.json(
					{	"success": loginMsg,
						"user_id": _user.user_id,
						"email_id": _user.email_id,
						"f_name": _user.name.f_name,
						"l_name": _user.name.l_name,
						"phone": _user.phone,
						"privilege": _user.privilege
				});
			}
			else
			{
				res.json({"failed": loginMsg});
			}
		}
	});
}); // login

// toggle privilege
router.put('/toggle_privilege', function(req, res) {
	if (!req.body) {
		console.log("/api/users/toggle_privilege BAD REQUEST");

		res.status (400);
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
	USER.update({ email_id: req.body.email_id },
	{
		$set: {
			privilege: req.body.privilege
		}
	}, 
	{multi: false},
	(err, success) => {
			if (err) {
				console.log("/api/users/toggle_privilege " +err.name+ ": " +err.message);

				res.status (403); // forbidden
				res.json({
					"error": "Not modified.",
					"msg": err.name+": "+err.message+"."
				});
			}
			else if (success)
			{
				console.log("/api/users/toggle_privilege: "+ req.body.email_id);

				res.status (201); // created
				res.json({
					"toggle": req.body.email_id
				});
			}
		});
	}
}); // toggle privilege

// add to cart
router.put('/add_to_cart', function(req, res) {
	if (!req.body) {
		console.log("/api/users/add_to_cart BAD REQUEST");

		res.status (400);
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
	USER.update({ "user_id": req.body.user_id},
	{
		$push: {
			cart: {
				$each: [{
					c_id: req.body.c_id,
					c_name: req.body.c_name,
					s_id: req.body.s_id,
					s_name: req.body.s_name,
					s_img: req.body.s_img,
					NAV: req.body.NAV,
					qty: 1
				}]
			}
		}
	}, 
	{multi: false},
	(err, success) => {
			if (err) {
				console.log("/api/users/add_to_cart " +err.name+ ": " +err.message);

				res.status (403); // forbidden
				res.json({
					"error": "Not Added to cart",
					"msg": err.name+": "+err.message+"."
				});
			}
			else if (success)
			{
				console.log("/api/users/add_to_cart: "+ req.body.s_name);

				res.status (201); // created
				res.json({
					"added": req.body.s_name
				});
			}
		});
	}
}); // toggle privilege


// update user with id
router.put('/:id', function(req, res) {
	if (!req.body) {
		console.log("/api/users/put/:id BAD REQUEST");

		res.status (400);
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
	USER.update({ user_id: req.params.id },
	{
		$set: {
			name: {
				f_name: req.body.f_name,
				l_name: req.body.l_name
			},
			//email_id: req.body.email_id,
			phone: req.body.phone,
			gender: req.body.gender
		}
	}, 
	{multi: false},
	(err, success) => {
			if (err) {
				console.log("/api/users/put/:id " +err.name+ ": " +err.message);

				res.status (403); // forbidden
				res.json({
					"error": "Not modified.",
					"msg": err.name+": "+err.message+"."
				});
			}
			else if (success)
			{
				console.log("/api/users/put/:id UPDATED: "+ req.params.id);

				res.status (201); // created
				res.json({
					"updated": req.params.id,
					"name": req.body.f_name
				});
			}
		});
	}
}); // update user with id

// delete user with id
router.delete('/:id', function(req, res) {
	USER.deleteOne({user_id: req.params.id}, (err, success) => {
		if (err) {
			console.log("/api/users/delete/:id " +err.name+ ": " +err.message);

			res.status (404); // not found
			res.json({
				"error": "Deletion error.",
				"msg": err.name +": "+ err.message +"."
			});
		}

		if (success) {
			USER.find((err, _users) =>{
				if (err) {
					console.log("/api/users/get all: "+err.name+ ": " +err.message);
			
					res.status (444); // no response
					res.json({
						"error": err.name +": "+ err.message +".",
						"delete": "User is removed."
					});
				} 
				else {
					if (!_users) {
						console.log("/api/users/get all: no data found");
		
						res.status (204); // no content
						res.json({
							"nodata": 'No data found.',
							"delete": "User is removed."
						});
					}
					else {
						console.log("/api/users/get all");

						res.status (200); // ok
						res.json(_users);
					}
				}
			});
		}		
	});
}); // delete user with id

module.exports = router;
