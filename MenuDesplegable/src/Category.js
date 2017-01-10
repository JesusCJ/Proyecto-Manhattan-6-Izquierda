import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import './Category.css'
import {Icon} from 'react-fa'

class Category extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		visible:false
  	}
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      visible:!this.state.visible

  })
  }
  render() {
    return (
      <div className="Category">
      	<li>
      	 <h3 onClick={this.handleClick.bind(this)}><Icon className='icon' name={this.props.icon}/>
         {this.props.name}</h3>
      	  <ul className= {this.state.visible? 'visible': 'no-visible'}>
            {this.props.items.map((item)=>{
              return <MenuItem name={item} key ={item}/>

            })}
      	  </ul>
      	</li>
      </div>
    );
  }
}

export default Category;
