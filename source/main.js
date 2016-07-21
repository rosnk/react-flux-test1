
require('./css/homepage.css');
require('./css/shared.scss');


var React = require('react');
var ReactDOM = require('react-dom');
// var Router = require('react-router');

// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;

var routes = require('./routes');
var App = require('./components/app');



// Router.run(routes, function(Handler){
// 	ReactDOM.render(<div>
// 		<Handler />
	
// 	</div>, document.getElementById('app'));
// });




	ReactDOM.render(
		routes
	, document.getElementById('app'));




