var React = require('react'),
      Choice_Option = require('./Choice_Option');
var Choice = React.createClass({

	getInitialState: function(){
		var choice_options = [
			{
				choice_value: 'R',
				choice_img: 'https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-256.png',
				tooltip_position: 'bottom',
				tooltip_delay: '50',
				tooltip_text: 'Rock'
			},
			{
				choice_value: 'P',
				choice_img: 'https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-006-256.png',
				tooltip_position: 'bottom',
				tooltip_delay: '50',
				tooltip_text: 'Paper'
			},
			{
				choice_value: 'S',
				choice_img: 'https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-014-256.png',
				tooltip_position: 'bottom',
				tooltip_delay: '50',
				tooltip_text: 'Scissors'
			}
		];
		return 	{
				choice_options: choice_options
			}
	},

	render: function(){
		var self = this;
		var options = self.state.choice_options.map(function (option) {
  		    	return (<Choice_Option key = {option.choice_value} choice_value = {option.choice_value}  choice_img ={option.choice_img} tooltip_position = {option.tooltip_position}  tooltip_delay = {option.tooltip_delay} tooltip_text = {option.tooltip_text} onClick = {self.props.onClick} />)
  			});
		return (
			<div className=" light-green ">
			      	
				<div className="center-align">
				<h6 className=" left">{this.props.username}'s turn: <small>make your choice</small></h6>
			      	<br></br><br></br>
					{options}
				</div>
				<br></br>
			</div>

		);
	}

});

module.exports = Choice;
