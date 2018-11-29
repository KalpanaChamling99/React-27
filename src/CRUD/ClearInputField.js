import React, {Component} from 'react';
import Input from '../components/input';
import Button from '../components/button';

class ClearInputField extends Component{ 
    constructor(props){
        super(props);
        this.state = {values:'',list:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItems = this.handleAddItems.bind(this);
    }
    handleChange(event){
        this.setState({values:event.target.value});
    }
    handleAddItems(){
        this.setState(function(prevState){
            return(
                prevState.list.push(this.state.values),
                this.setState({values:''})
            )
        })
    }
   
 
    render(){
        const listItems = this.state.list.map((item,index)=><li id={index} key={index}>{item}</li>)
        return(
            <div>
                <h2>CLEARING INPUT FIELD AFTER FORM SUBMISSION</h2>
                <div>{listItems}</div>
                <Input type='text' value={this.state.values} onChange={this.handleChange} ></Input>
                <Button button ='Add' onClick={this.handleAddItems}></Button>
            </div>
        )

    }
}

export default ClearInputField;