var React = require('react');

var Footer = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  render: function(){

    return (
        <footer className="page-footer light-green">
          <div className="footer-copyright green">
            <div className="container">
            Rock-Paper-Scissors Challenge
            <a className="grey-text text-lighten-4 right" href="https://github.com/ajdurancr/Rock-Paper-Scissors-Challenge">Github</a>
  
            </div>
          </div>
        </footer>

    );
  }

});

module.exports = Footer;
