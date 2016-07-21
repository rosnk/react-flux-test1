"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');


var ManageAuthorPage = React.createClass({
	getInitialState: function(){
		return{
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},

	componentWillMount: function(){
		var authorId = this.props.params.id;

		if(authorId){
			this.setState({author: AuthorApi.getAuthorById(authorId)});
		}

	},

	contextTypes: {
    	router: React.PropTypes.object
  	},


	setAuthorState: function(event){
		var field = event.target.name; 
		var value = event.target.value; 
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	authorFormValid: function(){
		var formIsValid = true;
		this.state.errors = {}; // clear any previous errors

		if(this.state.author.firstName.length < 3){
			this.state.errors.firstName= 'First name must be at least 3 characters';
			formIsValid = false;
		}

		if(this.state.author.lastName.length < 3){
			this.state.errors.lastName= 'last name must be at least 3 characters';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});

		return formIsValid;
	},

	saveAuthor: function(event){
		event.preventDefault();
		if(!this.authorFormValid()){
			return; 
		}
		AuthorApi.saveAuthor(this.state.author);
		toastr.success('Author saved.');
		this.context.router.push('authors');
	},

	render: function(){
		return(
			<div className="">
				<AuthorForm 
				onChange={this.setAuthorState} 
				onSave={this.saveAuthor} 
				author= {this.state.author} 
				errors = {this.state.errors}
				/>

			</div>
		)
	}
});

module.exports = ManageAuthorPage;

