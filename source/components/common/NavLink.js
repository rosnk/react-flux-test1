var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavLink = React.createClass({
	render: function(){
		return(
			<Link {...this.props} activeClassName="active"/>
		)
	}
});

module.exports = NavLink;

