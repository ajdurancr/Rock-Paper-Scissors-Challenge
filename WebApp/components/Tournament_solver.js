var React = require('react'),
      ReactDOM = require('react-dom'),
      TextArea = require('./TextArea'),
      httpRequest = require('../services/httpConnection'),
      parser = require('json-parser');;



var Tournament_solver = React.createClass({
	getInitialState: function(){
		return {
			tournament: []
		}
	},

	onTextChange: function (tournamentString) {
		this.setState({
			tournament: tournamentString
		});
	},

	solveTournament: function () {
		var tourn = this.state.tournament.split(" ").join('');
		tourn = tourn.split("\n").join('');
		console.log(tourn);
		console.log(parser.parse(tourn));

		/*[

			[

				[ ["Armando", "P"], ["Dave", "S"] ],

				[ ["Richard", "R"], ["Michael", "S"] ],

			],

			[

				[ ["Allen", "S"], ["Omer", "P"] ],

				[ ["John", "R"], ["Robert", "P"] ]

			]

		]*/


		/*httpRequest.makeRequest({
		  method: 'post',
		  url: '/api/championship/new',
		  data: this.state.tournament
		},
		function (data) {
			var username = data.winner[0],
			tittle = 'Winner',
			choice;
			if (data.winner[1] == 'P'){
				choice = 'Paper';
			}else if (data.winner[1] == 'S'){
				choice = 'Scissors';
			}else{
				choice = 'Rock';
			}

			var message = 'Congrats '.concat(username,' you have won since you use ', choice ,'!.'),
			button_label = 'New game';
			self.showMessage(tittle, message, button_label, self.getPlayersInfo);
		});*/
	},

	render: function(){
		return (<div> <ul className="collection">
		 		<li  className="collection-item avatar">
		  			
		  			<h4>Tournament 
		  				<a className="btn-floating btn-large waves-effect waves-light green right tooltipped" data-position="left" data-delay="50" data-tooltip="Solve tournament" onClick={this.solveTournament}><i className="material-icons">done</i></a> 
		  				&nbsp;&nbsp;&nbsp;
		  				<a className="btn-floating btn-large waves-effect waves-light light-green right tooltipped" data-position="left" data-delay="50" data-tooltip="Load from .txt file"><i className="material-icons">add</i></a>
		  			</h4>
		  			<br></br>
			    	</li>
			    	<li className="collection-item avatar">
			    		<TextArea label='Insert tournament here' onChange = {this.onTextChange}/>
			    	</li>
			</ul>
				

			</div>);
	}
});

module.exports = Tournament_solver;
