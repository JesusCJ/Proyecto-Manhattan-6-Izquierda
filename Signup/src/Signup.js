import React from 'react';
import serialize from 'jquery';
import CustomMaskedPassword from 'react-custom-password-mask';
import Exito from './Exito.js'
import './Signup.css'


var Signup = React.createClass({
 getInitialState() {
   return {
    name: "",
    adress: "",
    coordenadas: "",
    category: "",
    openingHours: "",
    nameAccount:"",
    password:"",
    checkPassword:"",
    msgTerms:"",
    msgPas:""
 	};
 },
  nameChange(event) {
    this.setState({name: event.target.value.substr(0, 140)});
  },
  adressChange(event) {
    this.setState({adress: event.target.value.substr(0, 140)});
  },
  categoryChange(event) {
    this.setState({category: event.target.value.substr(0, 140)});
  },
  openingHoursChange(event) {
    this.setState({openingHours: event.target.value.substr(0, 140)});
  },
  nameAccountChange(event) {
    this.setState({nameAccount: event.target.value.substr(0, 140)});
  },
  passwordChange(event) {
    this.setState({password: event.target.value.substr(0, 140)});
  },
  componentDidMount: function() {
        console.log(this._child.animate()); // Prints 'bar'    //      this._child.render();

    },

termsHandler(){


        console.log("Usingasdasd ref:");
 
	      window.open('https://www.google.es/?gfe_rd=cr&ei=yAN1WIrsEumJ8Qf3sqWICw', 'sharer', 'toolbar=1,status=0,width=548,height=325')
   
  },

  submitHandler(event) {

  

    if (this.state.name==""){
        this.refs.name.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if (this.state.adress==""){
        this.refs.adress.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if (this.state.category==""){
        this.refs.category.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if (this.state.openingHours==""){
        this.refs.openingHours.placeholder="¡CAMPO OBLIGATORIO!";
    }
     if (this.state.nameAccount==""){
        this.refs.nameAccount.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if (this.state.password==""){
        this.refs.pswd.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if (this.state.password2==""){
        this.refs.pswd2.placeholder="¡CAMPO OBLIGATORIO!";
    }
    if(this.refs.terminos.checked!=true){
       this.setState({msgTerms: "¡Debe aceptar los términos y condiciones de uso!"});
    }
    else{
      this.setState({msgTerms: ""});
    }

    if(this.refs.pswd.value!=this.refs.pswd2.value){
      this.setState({msgPas: "Las contraseñas no coinciden"});
    }
    else{
      this.setState({msgPas: ""});
    }
    event.preventDefault();
 
    // Using ref: secret 
    console.log("Using ref:", this.refs.pswd.value);
 
 
    // From form: password=secret 
    console.log("From form:", serialize(this.refs.form));
  },

 render() {
   return (
   
    
      <div className="Signup">
        <h className="Signup-header">Regitro de usuario</h>
    
        <form ref="form" onSubmit={this.submitHandler}>   
        <p>Nombre del local: {this.state.name}</p>
  	 
      	<input type="text"
          ref="name"
          placeholder="Introduzca el nombre del bar"
          value={this.state.value}
          onChange={this.nameChange}
        />

        <p>Dirección: {this.state.adress}</p>
  	
    	  <input type="text" 
          ref="adress"
          placeholder="Introduzca la dirección"
          value={this.state.value}
          onChange={this.adressChange}
        />

        <p>Categoría: {this.state.category}</p>
  	
    	  <input type="text"
          ref="category"
          placeholder="Introduzca la categoría"
          value={this.state.value}
          onChange={this.categoryChange}
        />

        <p>Horario: {this.state.openingHours}</p>
  	
    	  <input type="text"
          ref="openingHours"
          placeholder="Introduzca el horario"
          value={this.state.value}
          onChange={this.openingHoursChange}
        />

        <p>Nombre de cuenta: {this.state.nameAccount}</p>
  	
    	  <input type="text"
          ref="nameAccount"
          placeholder="Introduzca el nombre de la cuenta"
          value={this.state.value}
          onChange={this.nameAccountChange}
        />

        <p>Contraseña:</p>
    
        <CustomMaskedPassword ref="pswd" name="password" mask="*"/>
        <p></p>
        <font color="red">{this.state.msgPas}</font>

        <p>Contraseña (otra vez): </p>
    
        <CustomMaskedPassword ref="pswd2" name="password2" mask="*"/>
        <p></p>
  
        <input type="checkbox"
        ref="terminos"
        value={this.state.value}
       />
 		

        <button onClick={this.termsHandler}>Leer terminos</button>		
        <p>Alomejor me he leido y acepto los terminos y ta ta tal</p>
    

        <font color="red">{this.state.msgTerms}</font>
        <button>Submit</button>
      </form>
       
    </div>);
 }
});


export default Signup;