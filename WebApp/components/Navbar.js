var React = require('react');
var NavBar = React.createClass({

	getInitialState: function(){
		return {
			logo: this.props.logo,
			leftMenuItems: this.props.leftMenuItems, // JSON Array of the navbar menu items
			}
	},

	render: function(){
		var menuItems = this.state.leftMenuItems;
		var leftMenuItems = menuItems.map(function (menuItem) {
	      		return <li key={menuItems.indexOf(menuItem)}><a href={menuItem.link}>{menuItem.text}</a></li>;
	      	});
		return (
			<nav>
			    <div className="nav-wrapper green">
			      <a href={this.state.logo.link} className="brand-logo center">{this.state.logo.text}</a>
			      <ul id="nav-mobile" className="left hide-on-small-only">{leftMenuItems}</ul>
			    </div>
			  </nav>

		);
	}

});

module.exports = NavBar;
