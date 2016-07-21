"use strict";


var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var AuthorsList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired 

	},

	render: function(){
		var createAuthorRow = function(author){
			return (
				<tr key= {author.id}>
					
				<td><Link to={'/author/'+ author.id} >{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return(
			<div className="">
				

				<table className= "table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>

			</div>
		)
	}
});

module.exports = AuthorsList;

