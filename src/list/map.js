import React, {Component} from 'react';

class ListItem extends Component{
    render(){
      const items = ["Kalpana","Anisha","Aisha","Aradhya","Leki"];

      const lists = items.map((itemList) => <li key={itemList.toString()}>{itemList}</li>);

      return(
        <div>
          <h2>USING MAP AND KEY TO LIST ITEMS</h2>
          <ul>{lists}</ul>
        </div>
      )
    }

}

export default ListItem;