
var React = require('react');

var TopItem = React.createClass({

  render(){
  	       var liClassName = "collection-item avatar",
                    iClassName = "circle light-green",
                    aClassName = "secondary-content";
		return (
                   <li className={liClassName}  >
          			     <i className={iClassName}>{this.props.itemId + 1}</i>
          			     <p>{this.props.text}</p>
    	             </li>);
  }

});

module.exports = TopItem;
