"use strict";


var React = require('react');

var AuthorApi = require('../../api/AuthorApi');
var AuthorList = require('./authorList');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthorPage = React.createClass({
	getInitialState: function(){
		return {
			authors: []
		};
	},

	componentDidMount: function(){
		if(this.isMounted()){
			this.setState({authors: AuthorApi.getAllAuthors()});
		}
	},

	render: function(){
		return(
			<div className="">
				<h1>Authors</h1>
				<Link to="/author" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		)
	}
});

module.exports = AuthorPage;

