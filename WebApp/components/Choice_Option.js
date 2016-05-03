var React = require('react');
var Choice_Option = React.createClass({

	getInitialState: function(){
		return {}
	},
	handleClick: function(){
		this.props.onClick(this.props.choice_value);
	},
	render: function(){
		return (
		    	<img src={this.props.choice_img} className = "circle waves-effect waves-light green center tooltipped" data-position={this.props.tooltip_position} data-delay={this.props.tooltip_delay} data-tooltip={this.props.tooltip_text} onClick={this.handleClick}></img>

		);
	}

});

module.exports = Choice_Option;
