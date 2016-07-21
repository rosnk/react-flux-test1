var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var About = React.createClass({
	render: function(){
		return(
			<div className="">
			<ul role="nav">
				<li><Link to="/">Home</Link></li>
		          <li><Link to="/authors">Authors</Link></li>
		          <li><Link to="/about">About</Link></li>
		        </ul>
				<h1>About</h1>
				<p>This application uses the following technologies:
					<ul>
						<li>React</li>	
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		)
	}
});

module.exports = About;

