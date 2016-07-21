"use strict";

var React = require('react');

var Header = require('./common/header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var App = React.createClass({
	render: function(){

		return(
			<div>
				<Header />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>	


		);
	}
});

module.exports = App;