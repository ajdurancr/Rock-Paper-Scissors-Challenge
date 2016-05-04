var React = require('react');
var Play_message = React.createClass({

  getInitialState: function(){
    return {}
  },
  render: function(){
    return (
              <div className="card green darken-1 center">
                <div className="card-content white-text">
                  <span className="card-title">{this.props.tittle}</span>
                  <p>{this.props.message}</p>
                </div>
                <div className="card-action">
                  <a href="#" onClick = {this.props.onClick}>{this.props.button_label}</a>
                </div>
              </div>

    );
  }

});

module.exports = Play_message;

 