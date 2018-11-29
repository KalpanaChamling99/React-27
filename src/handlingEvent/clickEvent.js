import React, {Component} from 'react';
import Button from '../components/button';

class Clickable extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); 
    }
   
    handleClick(){
        alert('hello'); 
    }

    render(){
        return(
            <div>
                <h2>CLICK EVENT</h2>
                <Button classname='button' onClick={this.handleClick} button='Click Here' />
            </div>
        )
    }
}

export default Clickable;
 