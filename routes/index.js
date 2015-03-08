var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});



// TO-DO: routes to controllers, access models via mongoose

router.get('/user/:id', function(req, res) {
	var users = {
		'admin':{
			id:'admin',
			name:'Bologna Mitts',
			description:'Dimwit',
			title:'Executive Peewee Herman'
		},
		'dribble': {
			id:'admin',
			name:'Mr Bigglesworth',
			description:'Thinks he\'s god of Dr Evil',
			title:'Evil'
		}
	}
	res.json(users[req.params.id]);
})
router.get('/users', function(req, res) {
	var users = [{
		id:'admin',
		name:'Bologna Mitts',
		description:'Dimwit',
		title:'Executive Peewee Herman'
	},{
		id:'dribble',
		name:'Mr Bigglesworth',
		description:'Thinks he\'s god of Dr Evil',
		title:'Evil'
	}];
	res.json(users);
})
module.exports = router;
