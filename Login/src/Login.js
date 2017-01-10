import React from 'react';
import CustomMaskedPassword from 'react-custom-password-mask';
import './Login.css'

var Login = React.createClass({

  getInitialState() {
   return {
    name: "",
    password:""
  };
 },

  submitHandler(event) {

    if (this.state.name==""){
        this.refs.name.placeholder="¡CAMPO OBLIGATORIO!";
    }
   // else if (this.state.password==""){
     //   this.refs.pswd.placeholder="¡CAMPO OBLIGATORIO!";
    //}


    // PORQUE NO VA??
    else{
      this.refs.name.placeholder="sss";
    }

    event.preventDefault();
 
    // Using ref: secret 
    console.log("Using ref:", this.refs.pswd.value);
 
    // From form: password=secret 
   // console.log("From form:", serialize(this.refs.form));
      

  },

render: function() {

    return (
      <div className="Login">

        <h className="Login-header">Login de usuario</h>

        <form ref="forms" onSubmit={this.submitHandler}>
      
          <p>Nombre del local: {this.state.name}</p>
     
          <input type="text"
            ref="name"
            placeholder="Introduzca el nombre del bar"
            value={this.state.value}
            onChange={this.nameChange}
          />

          <p>Contraseña:</p>
          <CustomMaskedPassword ref="pswd" name="password" mask="*"/>
          <p> </p>
          <button>Entrar</button>
      
       </form>

  </div>);
  },

  //this component will be accessed by the parent through the `ref` attribute
  animate: function() {
    console.log('Pretend %s is animating', this.props.title);
  }
});


export default Login;


