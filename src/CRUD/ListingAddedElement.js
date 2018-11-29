import React, {Component} from 'react';
import Input from '../components/input';
import Button from '../components/button';

class ListingAddedElements extends Component{
    constructor(props){
        super(props);
        this.state = {values:'',list:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItems = this.handleAddItems.bind(this);
    }
    handleChange(event){
        this.setState({values:event.target.value});
    };
    handleAddItems(){
        this.setState(function(prevState){
            return(
                prevState.list.push(this.state.values)
            )
        }) 
    }
   
    render(){
        const itemList = this.state.list.map((item,index)=><li key={index}>{item}</li>)
        return(
            <div>
                <h2>LISTING ADDED ELEMENT</h2>
                <ul>{itemList}</ul>
                <Input  type='text' value={this.state.values} onChange = {this.handleChange}></Input>
                <Button button='Add' onClick = {this.handleAddItems}></Button>
            </div>
        )
    }
}
export default ListingAddedElements;