var express = require('express');
var router = express.Router();

const SCHEME = require('../models/schemeschema')

router.get('/', (req, res, next) =>{
	SCHEME.find((err, _schemes) =>{
    if (err) {
			console.log("/get "+err.name+ ": " +err.message);
			res.status (404);
			res.json({
				"error": err.name+": "+err.message
			});
		} else {
			res.json(_schemes);
		}
	});
}); 

router.get('/:id', (req, res, next) =>{
	SCHEME.findOne({_id: req.params.id}, (err, _scheme) =>{
    if (err) {
			console.log("/get/:id "+err.name+ ": " +err.message);

			res.status (500);
			res.json({
				"error": err.name+": "+err.message
			});
		} else {
			if (!_scheme) {
				console.log("/get/:id page not found "+req.params.id);

				res.status (404);
				res.json({"error": 'Page not found'});
			} else {
				res.json(_scheme);
		        	}
		}
		
	});
}); 
router.post('/create', (req, res, next) =>{
  var newScheme = new SCHEME( {
	name : req.body.name,
	description : req.body.description,
	schemenav:req.body.schemenav,

  });
  console.log( "request body "+req.body.name + "  "+req.body.description );

  if (!newScheme) {
		console.log("/post BAD REQUEST, empty object");

		res.status (400);
		res.json({
			"error": "BAD REQUEST, empty object"
		});
	} else {
		newScheme.save((err, _scheme) => {
			if (err) {
				console.log("/post " +err.name+ ": " +err.message);

				res.status (400);
				res.json({
					"error": err.name+": "+err.message
				});
			}else {
								res.json(_scheme);
			      }
		});
	}
}); 

router.put('/:id', function(req, res) {
  var  updatedScheme= {};
  updatedScheme.title = req.body.title;
  updatedScheme.author = req.body.author;

  if (!updatedScheme) {
		console.log("/put/:id BAD REQUEST, empty object");

		res.status (400);
		res.json({"error": req.params.id+" has empty request object"});
	} else {
		SCHEME.update({_id: req.params.id}, updatedScheme, {}, (err, _scheme) => {
			if (err) {
				console.log(err.name+ ": " +err.message);

				res.status (404);
				res.json({"error": err.name+": "+err.message});
			}
			else
			{
				res.json(_scheme);
			}
		});
	}
}); 

router.delete('/:id', function(req, res) {
	SCHEME.deleteOne({_id: req.params.id}, (err, success) => {
		if (err) {
			console.log("/delete/:id " +err.name+ ": " +err.message);

			res.status (404);
			res.json({"error": err.name+": "+err.message});
		}

		if (success) {
			SCHEME.find((err, _schemes) =>{
				if (err) {
						console.log("/get "+err.name+ ": " +err.message);
			
						res.status (404);
						res.json({
							"error": err.name+": "+err.message
						});
					} else {
						//console.log("get all books req: ");
						//console.log("/delete>get " +_books);
			
						res.json(_schemes);
					}
				});
		}		
	});
}); // router.delete('/:id')

module.exports = router;
