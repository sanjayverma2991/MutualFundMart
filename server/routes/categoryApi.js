var express = require('express');
var router = express.Router();

var dateFormat = require('dateformat');

const CATEGORY = require('../schemas/categorySchema.js');
const RECORD = require('../schemas/collection_record.js');

// get all categories
router.get('/', (req, res, next) => {
	CATEGORY.find((err, _categories) =>{
    if (err) {
			console.log("/api/categories/get all: "+err.name+ ": " +err.message);
			res.status (400); // bad request
			res.json({
				"error": "Bad request",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_categories) {
				console.log("/api/categories/get all: no data found");

				res.status (204); // no content
				res.json({
					"nodata": 'No data found.'
				});
			}
			else {
				console.log("/api/categories/get all");

				res.status(200);
				res.json(_categories);
		}	
		}
	});
}); // get all categories

// get category with id
router.get('/:id', (req, res, next) =>{
	CATEGORY.findOne({catg_id: req.params.id}, (err, _category) =>{
    if (err) {
			console.log("/api/categories/get/:id "+err.name+ ": " +err.message);

			res.status (400);
			res.json({
				"error": "Bad request.",
				"msg": err.name+": "+err.message
			});
		} 
		else {
			if (!_category) {
				console.log("/api/categories/get/:id no content found for "+req.params.id);

				res.status (204); // no content
				res.json({
					"nodata": 'no content found for '+ req.params.id
				});
			} 
			else {
				console.log("/api/categories/get/:id " +req.params.id);

				res.status (200); //ok
				res.json(_category);
		    }
		}
		
	});
}); // get categories with id

// add category
router.post('/category_create', (req, res, next) => {
	
	if (!req.body) {
		console.log("/api/categories/post BAD REQUEST");

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

		RECORD.findOne({collection_name: "catg_id"}, 
			(err, _collection) => {
				if (err) {
					console.log("/api/categories/post BAD REQUEST");

					res.status (400); // bad request
					return res.json({
						"error": "Bad request.",
						"msg": "Empty object."
					});
				}
				console.log("record: "+_collection.collection_name +" "+ _collection.records);
				count = _collection.records;
							
			var newCategory = new CATEGORY( {
				catg_id: "cg00"+count,
				c_name : req.body.c_name,
				c_description : req.body.c_description,
				c_img: req.body.c_img,
				last_modified: now
			});
			//console.log( "request body "+ req.body.name +"  "+ req.body.description );

			if (!newCategory) {
				console.log("/api/categories/post BAD REQUEST");

				res.status (400); // bad request
				res.json({
					"error": "Bad request.",
					"msg": "Empty object."
				});
			} 
			else {
				CATEGORY.create(newCategory, (err, success) => {
					if (err) {
						console.log("/api/categories/post " +err.name+ ": " +err.message);

						res.status (406); // not acceptable
						res.json({
							"error": "Creation error.",
							"msg": err.name+": "+err.message+"."
						});
					}

					if (success)
					{
						console.log("/api/categories/post CREATED: " +newCategory.catg_id);

						res.status (201); // created
						res.json({
							"created": newCategory.catg_id,
							"name": newCategory.c_name
						});

						// increment the category id
						RECORD.update(
							{ collection_name: "catg_id" },
							{
								$inc: { records: 1 }
							},
							{multi: false},
							(err) => {
								if (err)
									console.log("/api/categories/post RECORD increment error: " +err.name+ ": " +err.message);
							}
						);
					}
				});
			}
		});
	}
}); // add category

// add scheme
router.put('/scheme_create', (req, res, next) => {
	
	if (!req.body) {
		console.log("/api/scheme_create BAD REQUEST");

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
		var _scheme_id = "";

		RECORD.findOne({collection_name: "scheme_id"}, 
			(err, _collection) => {
				if (err) {
					console.log("/api/scheme_create didnt find record BAD REQUEST");

					res.status (400); // bad request
					return res.json({
						"error": "Bad request.",
						"msg": "Empty object."
					});
				}
				console.log("record: "+_collection.collection_name +" "+ _collection.records);
				count = _collection.records;
							
				_scheme_id = "sc00"+count;
				//console.log( "request body "+ req.body.name +"  "+ req.body.description );

				CATEGORY.update({ catg_id: req.body.catg_id },
				{
					$push: {
						scheme: {
							$each: [{
								scheme_id: _scheme_id,
								s_name : req.body.s_name,
								s_description : req.body.s_description,
								NAV: req.body.NAV,
								sold: 0,
								last_modified: now,
								s_img: req.body.s_img
							}]
						}
					}
				}, 
				{multi: false},
				(err, _success) => {
					if(err) {
						console.log("/api/scheme_create " +err.name+ ": " +err.message);

						res.status (406); // not acceptable
						res.json({
							"error": "Creation error.",
							"msg": err.name+": "+err.message+"."
						});
					}
					else if (_success) {
						console.log("/api/scheme_create CREATED: " + _scheme_id);

						res.status (201); // created
						res.json({
							"created": _scheme_id,
							"name": req.body.s_name
						});

						// increment the category id
						RECORD.update(
							{ collection_name: "scheme_id" },
							{
								$inc: { records: 1 }
							},
							{multi: false},
							(err) => {
								if (err)
									console.log("/api/scheme/post RECORD increment error: " +err.name+ ": " +err.message);
							}
						);
					}
				});
			}
		);
	}
}); // add scheme

// update scheme
router.put('/scheme_edit', (req, res, next) => {
	
	if (!req.body) {
		console.log("/api/scheme/edit BAD REQUEST");

		res.status (400); // bad request
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
		CATEGORY.update(
		{ "catg_id": req.body.catg_id, "scheme.scheme_id": req.body.scheme_id },
		{
			$set: {
				"scheme.$.s_name": req.body.s_name,
				"scheme.$.s_description" : req.body.s_description,
				"scheme.$.NAV": req.body.NAV,
				"scheme.$.s_img": req.body.s_img
			}
		},
		{multi: false},
		(err, _success) => {
			if(err) {
				console.log(">>>>> /api/scheme/edit " +err.name+ ": " +err.message);

				res.status (406); // not acceptable
				res.json({
					"error": "Edit error.",
					"msg": err.name+": "+err.message+"."
				});
			}
			else if (_success) {
				console.log("/api/scheme/edit: " + req.body.scheme_id);

				res.status (200); // ok
				res.json({
					"edited": req.body.scheme_id,
					"name": req.body.s_name
				});
			}
		});
	}
}); // update scheme

// delete scheme
router.put('/scheme_del', (req, res, next) => {
	
	if (!req.body) {
		console.log("/api/scheme/delete BAD REQUEST");

		res.status (400); // bad request
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
		CATEGORY.update(
		{ catg_id: req.body.catg_id },
		{
			$pull: {
				scheme: { scheme_id: req.body.scheme_id }
			}
		}, 
		{multi: false},
		(err, _success) => {
			if(err) {
				console.log("/api/scheme/delete " +err.name+ ": " +err.message);

				res.status (406); // not acceptable
				res.json({
					"error": "Delation error.",
					"msg": err.name+": "+err.message+"."
				});
			}
			else if (_success) {
				console.log("/api/scheme/delete:" + req.body.scheme_id);

				res.status (200); // ok
				res.json({
					"deleted": req.body.scheme_id,
					"name": req.body.s_name
				});
			}
		});
	}
}); // delete scheme

// update category
router.put('/:id', function(req, res) {
	if (!req.body) {
		console.log("/api/categories/put/:id BAD REQUEST");

		res.status (400); // bad request
		return res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	var now = new Date(); 
	var dateFormatted = dateFormat(now, "ddd, mmm d, yyyy, HH:MM:ss:l, Z");

	var  updatedCategory= {};
	updatedCategory.c_name = req.body.c_name;
	updatedCategory.c_description = req.body.c_description;
	updatedCategory.c_img = req.body.c_img;
	updatedCategory.last_modified = now;

	if (!updatedCategory) {
		console.log("/api/categories/put/:id BAD REQUEST");
		res.status (400);
		res.json({
			"error": "Bad request.",
			"msg": "Empty object."
		});
	}
	else {
		CATEGORY.update({ catg_id: req.params.id }, 
						 updatedCategory, 
						 {}, (err, success) => {
			if (err) {
				console.log("/api/categories/put/:id " +err.name+ ": " +err.message);

				res.status (403); // forbidden
				res.json({
					"error": "Not modified.",
					"msg": err.name+": "+err.message+"."});
			}
			else if (success)
			{
				console.log("/api/categories/put/:id UPDATED: "+ req.params.id);

				res.status (201); // created
				res.json({
					"updated": req.params.id,
					"name": req.body.c_name
				});
			}
		});
	}
}); // update category

// delete category
router.delete('/:id', function(req, res) {
	CATEGORY.deleteOne({catg_id: req.params.id}, (err, success) => {
		if (err) {
			console.log("/api/category/delete " +err.name+ ": " +err.message);

			res.status (404); // not found
			res.json({
				"error": "Deletion error.",
				"msg": err.name +": "+ err.message +"."
			});
		}

		if (success) {
			CATEGORY.find((err, _categories) =>{
				if (err) {
					console.log("/api/categories/get all: "+err.name+ ": " +err.message);
			
					res.status (444); // no response
					res.json({
						"error": err.name +": "+ err.message +".",
						"delete": "Category is removed."
					});
				} 
				else {
					if (!_categories) {
						console.log("/api/categories/get all: no data found");
		
						res.status (204); // no content
						res.json({
							"nodata": 'No data found.',
							"delete": "Category is removed."
						});
					}
					else {
						console.log("/api/categories/get all");

						res.status (200); // ok
						res.json(_categories);
					}
				}
			});
		}		
	});
}); // delete category

module.exports = router;
