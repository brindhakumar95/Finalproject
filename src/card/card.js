import React from 'react';
import axios from 'axios';
class CardComponent extends React.Component {
    state = {  }
    render() { 
        return(
            <div class="col-md-4">
            <div class="card" class="pt-xl-5 pl-xl-4" style={{ width: `18rem` }}>
                <img src={`images/${this.props.pic}`} class="card-img-top" alt="..."></img>
                
            </div>
            </div>
        );
       
    }}
 
export default CardComponent;