import React, {Component} from 'react';
import Input from '../components/input';
import Button from '../components/button';

class DeleteItem extends Component{ 
    constructor(props){
        super(props);
        this.state = {values:'',list:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    handleChange(event){
        this.setState({values:event.target.value});
    }
    handleAddItem(){
        this.setState(function(prevState){
            return(
                prevState.list.push(this.state.values),
                this.setState({values:''})
            )
        })
    }
    handleRemoveItem(key){
        
    }   
   
 
    render(){
        const listItems = this.state.list.map((item,index)=>
                            <li 
                                id={index} 
                                key={index}>
                                {item}
                                <Button button='Delete' onClick={this.handleRemoveItem}></Button>
                            </li>
                        )
        return(
            <div>
                <h2>DELETE ADDED ITEM</h2>
                <div>{listItems}</div>
                <Input type='text' value={this.state.values} onChange={this.handleChange} ></Input>
                <Button button ='Add' onClick={this.handleAddItem}></Button>
            </div>
        )

    }
}

export default DeleteItem;
