import React from 'react';


var Exito = React.createClass({
	
render: function() {


    return (
      <div>
      <div onClick={this.props.onClick}>{this.props.title}</div>;
      <p>holahola</p>
      </div>
   
      );
  },

  //this component will be accessed by the parent through the `ref` attribute
  animate: function() {
    console.log('Pretend %s is animating', this.props.title);
  }
});


export default Exito;