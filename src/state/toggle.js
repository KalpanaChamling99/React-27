import React, {Component} from 'react';
import Button from '../components/button';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isLogIn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(prevState){
        this.setState(function(prevState){
            return{
                isLogIn: !prevState.isLogIn
            }
        });
      
    }
   
   render(){
       return(
           <div>
                <h2>STATE</h2>
                <Button onClick={this.handleClick} button={this.state.isLogIn ? "Login": "Logout"}></Button>
           </div>
       )
   }
}
export default Toggle;
