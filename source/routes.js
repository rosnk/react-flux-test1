"use strict"

var React = require('react');
// var Router = require('react-router');
// var DefaultRoute = Router.DefaultRoute;
// var Route = Router.Route; 

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

// var routes = (
// 	<Route name="app" path="/" handler={require('./components/app')}>
// 		<DefaultRoute handler={require('./components/homePage')} />
// 		<Route name="authors" handler={require('./components/authors/authorPage')} />
// 		<Route name="about" handler={require('./components/about/aboutPage')} />

// 	</Route>
// );


var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={require('./components/app')} >
			<IndexRoute component={require('./components/homepage')}/>
			<Route name="addAuthor" path="/author" component={require('./components/authors/manageAuthorPage')} />
			<Route name="manageAuthor" path="/author/:id" component={require('./components/authors/manageAuthorPage')} />
			<Route name="authors" path="/authors" component={require('./components/authors/authorPage')} />
			<Route name="about" path="/about" component={require('./components/about/aboutPage')} />

		</Route>

	</Router>
);




// var routes = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 			<Router history={hashHistory}>
//  				<Route path="/" component={require('./components/app')} />
//  				<Route name="authors" path="/authors" component={require('./components/authors/authorPage')} />
//  				<Route name="about" path="/about" component={require('./components/about/aboutPage')} />

//  			</Router>
//  			</div>
// 		)
// 	}
// });


module.exports = routes;

