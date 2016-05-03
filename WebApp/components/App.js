var React = require('react');
var Navbar = require('./Navbar');
var Play = require('./Play');
var Footer = require('./Footer');
var ReactDOM = require('react-dom');


var App = React.createClass({
	getInitialState: function(){
		return {
			players:{
					first: ["Player1", ""],
					second: ["Player2", ""]
				}
			}
	},
	/*loadComponent(component, mountNodeId){
		ReactDOM.render(component,
		  document.getElementById(mountNodeId)
		);
	},
	componentWillMount(){
		 this.loadComponent(<Choice username={this.state.firstPlayer[0]}/>, 'componentToLoad');
	}*/
	componentDidMount: function(){
		ReactDOM.render(<Play players={this.state.players} />,
				  document.getElementById('pageContent')
				);

	},
	render: function(){
		var logo = {text: "Rock-Paper-Scissors", link: "#"},
		       leftMenuItems =  [{text: "Play", link: "#"}, 
		       			{text: "Tournament", link: "#"},
		       		      	{text: "Instructions", link: "#"}, 
		       		      	{text: "About", link: "#"}];


		return (
			<div>
				<Navbar  logo = {logo} leftMenuItems= {leftMenuItems}/>
				<div id="pageContent" ></div>
				
				<Footer />
			</div>

		);
	}

});

module.exports = App;