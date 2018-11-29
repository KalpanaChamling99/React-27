import React, {Component} from 'react';
import Input from '../components/input';


class OnChange extends Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
       this.setState({value:event.target.value})
    }
    render(){
        return(
            <div>
                <h2>ONCHANGE EVENT</h2>
                <Input type='text' onChange={this.handleChange} value={this.state.value} ></Input>
                <div>{this.state.value}</div>
            </div>
        )
    }
}
export default OnChange;