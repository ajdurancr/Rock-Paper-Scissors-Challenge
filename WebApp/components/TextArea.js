var React = require('react');

var TextArea = React.createClass({
  handleChange(event){
    if (event.target.value === "") {
      return;
    } 
    this.props.onChange(event.target.value);
  },

  render(){

    return (
        <div className="row" >
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">edit_mode</i>
                <textarea id="textarea1" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="textarea1">{this.props.label}</label>
              </div>
            </div>
          </form>
        </div>

    );
  }

});

module.exports = TextArea;
