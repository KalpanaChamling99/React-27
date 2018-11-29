import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clickable from './handlingEvent/clickEvent';
import Toggle from './state/toggle';
import ListItem from './list/map';
import OnChange from './handlingEvent/onChangeEvent';
import Add from './CRUD/add';
import ListingAddedElements from './CRUD/ListingAddedElement';
import ClearInputField from './CRUD/ClearInputField';
import DeleteItem from './CRUD/delete';



class Todo extends React.Component{
    render(){
        return(
            <div>
                <App />
                <Clickable />
                <Toggle />
                <ListItem />
                <OnChange />
                <Add />
                <ListingAddedElements />
                <ClearInputField />
                <DeleteItem />
            </div>
        )
    }
}

ReactDOM.render(<Todo/>, document.getElementById('root'));

