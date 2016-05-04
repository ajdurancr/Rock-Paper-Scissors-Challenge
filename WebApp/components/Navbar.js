var React = require('react');
var NavBar = React.createClass({

	getInitialState: function(){
		return {}
	},

	render: function(){
		console.log(this.props.onClick);
		var self = this; 
		var menuItems = this.props.leftMenuItems;
		var leftMenuItems = menuItems.map(function (menuItem) {
	      		return <li key={menuItems.indexOf(menuItem)}><a href={menuItem.link} onClick = {menuItem.onClick}>{menuItem.text}</a></li>;
	      	});
		return (
			<nav>
			    <div className="nav-wrapper green">
			      <a href={this.props.logo.link} className="brand-logo center">{this.props.logo.text}</a>
			      <ul id="nav-mobile" className="left hide-on-small-only">{leftMenuItems}</ul>
			    </div>
			  </nav>

		);
	}

});

module.exports = NavBar;
