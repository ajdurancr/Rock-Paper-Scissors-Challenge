var React = require('react'),
      Navbar = require('./Navbar'),
      Play = require('./Play'),
      Tournament = require('./Tournament'),
      Top = require('./Top'),
      Footer = require('./Footer'),
      ReactDOM = require('react-dom');


var App = React.createClass({
	getInitialState: function(){
		return {}
	},

	componentDidMount: function(){
		ReactDOM.render(<Play />,
				  document.getElementById('pageContent')
				);

	},

	onPlay: function () {
		ReactDOM.render(<Play />,
				  document.getElementById('pageContent')
				);
	},

	onTournament: function () {
		ReactDOM.render(<Tournament />,
				  document.getElementById('pageContent')
				);
	},
	
	onTop: function () {
		ReactDOM.render(<Top />,
				  document.getElementById('pageContent')
				);
	},
	/*
	onAbout: function () {
		ReactDOM.render(<About />,
				  document.getElementById('pageContent')
				);
	},*/

	render: function(){
		var self = this;
		var logo = {text: "Rock-Paper-Scissors", link: "#"},
		       leftMenuItems =  [{text: "Play", link: "#", onClick: self.onPlay}, 
		       			{text: "Tournament", link: "#", onClick: self.onTournament},
		       		      	{text: "Top", link: "#", onClick: this.onTop}/*, 
		       		      	{text: "About", link: "#", onClick: this.onAbout}*/
		       		      	];


		return (
			<div>
				<Navbar  logo = {logo} leftMenuItems= {leftMenuItems}/>
				<div id="pageContent" >Loading component...</div>
				
				<Footer />
			</div>

		);
	}

});

module.exports = App;