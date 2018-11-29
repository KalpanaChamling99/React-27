import React, {Component} from 'react';
import Input from '../components/input';
import Button from '../components/button';

class Add extends Component{
    constructor(props){
        super(props);
        this.state = {value:'',items: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddElememts = this.handleAddElememts.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});

    }
    handleAddElememts(){
        this.setState(function(prevState){
            return(
                prevState.items.push(this.state.value)
            )
        });

    }

    render(){
        
        return(
            <div>
                <h2>ADDING ELEMENTS</h2>
                <div>{this.state.items}</div>
                <Input type='text' value={this.state.value} onChange={this.handleChange}></Input>
                <Button button='Add Item' onClick={this.handleAddElememts}></Button>

            </div>
        )
    }
}

export default Add;