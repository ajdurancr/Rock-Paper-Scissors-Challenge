var React = require('react');
var Play_players = React.createClass({

  getInitialState: function(){
    return {}
  },
  handleClick: function () {
    var p1_name = document.getElementById('player1_name').value;
    var p2_name = document.getElementById('player2_name').value;
    if (p1_name.length > 0 && p1_name.length > 0) {
        this.props.onClick(p1_name, p2_name);
    } else {
        alert("Players' name can't be empty");
    }
    
  },
  render: function(){
    return (
              <div className="card green darken-1 center">
                <div className="card-content white-text">
                  <span className="card-title">Players information</span>
                  <div className="input-field col s6">
                        <input id="player1_name" type="text" className="validate"/>
                        <label forhtml="player1_name">Player #1</label>
                  </div>
                  <div className="input-field col s6">
                        <input id="player2_name" type="text" className="validate"/>
                        <label forhtml="player2_name">Player #2</label>
                  </div>
                </div>
                <div className="card-action">
                  <a href="#" onClick = {this.handleClick}>Start</a>
                </div>
              </div>

    );
  }

});

module.exports = Play_players;
