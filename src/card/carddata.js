import React from 'react';
import axios from 'axios';
import CardComponent from './card';
class CardData extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            friendState:[]
        }
    }
    componentWillMount()
    {
this.getRemovedata()
    }
   getRemovedata()
    {
        axios.get("http://localhost:8788/all").then((response)=>{
            console.log(response.data)
            console.log("Before")
            console.log(this.state.friendState)
            this.setState(
                {
                    friendState:response.data

                }
            )
            console.log("After")
            console.log(this.state.friendState)
        })
    }
    displayFriendCard()
    {
        return this.state.friendState.map((mydata)=>{
            return(
                <CardComponent key={mydata.id} 
                
                pic={mydata.image}
               
                ></CardComponent>
            )
        })
    }
    render() {
        return (
           
              <div>
                  <div class="row">
                  {
                      this.displayFriendCard()
                  }</div>
              </div>
        );
    }
    }

 
export default CardData;