
import { Component } from "react";

import RestaurantItem from "./RestaurantItem";


const restaurantList = [
    {
      id : 1,
      name : "MadhuRestaurant",
      type : "AC",
      city : "Kurnool",
      rating : 4.5,
      costForOne : 1500,
    },
    {
      id : 2,
      name : "Paradise",
      type : "AC",
      city : "Nandyal",
      rating : 4,
      costForOne : 1200,
    },
    {
      id : 3,
      name : "Kakatheeya",
      type : "AC",
      city : "Hyderabad",
      rating : 5,
      costForOne : 2500,
    },
    {
      id : 4,
      name : "ViswaMithra",
      type : "AC",
      city : "Kurnool",
      rating : 4.5,
      costForOne : 1500,
    }
    
  ]


class CreateNewRes extends Component {

    state = {
        list : restaurantList,
        name : "",
        city : "",
        type : "",
        costForOne : 0,
       
        createStatus : false
    }

    crate = () => {
        const {name,type,city,costForOne,list} = this.state
        const id = list.length + 1 
        const newList = {
            id,
            name ,
            type,
            city,
            costForOne 
        }
        this.setState({createStatus : true
        ,list : [...list,newList]})

      
    

    }
    changeName = event => {
        this.setState({name : event.target.value})

    }
    changecity = event => {
        this.setState({city : event.target.value})
    }
    changetype = event => {
        this.setState({type : event.target.value})
    }
    changeCostForOne = event => {
        this.setState({costForOne : event.target.value})
    }


    deleteRestaurant = id => {
        const {list} = this.state
        // console.log(list)
          const updated = list.filter(each => each.id !== id )
        //  console.log(updated)
         this.setState({list : updated})
         console.log(list)
    }

    render (){
        const {list} = this.state
       
        return(
            <div>
            
                  <input type = "text" placeholder = {"enter name"} onChange = {this.changeName}/>
                  <input type = "text" placeholder = {"enter type"} onChange = {this.changetype}/>
                  <input type = "text" placeholder = {"enter city"} onChange = {this.changecity}/>
                  <input type = "text" placeholder = {"enter CostForone"} onChange = {this.changeCostForOne}/>
               
                  <button onClick = {this.crate}>Create</button>

                  {list.map(eachItem => (
                      
                      <RestaurantItem restaurantDetails = {eachItem}
                      deleteRestaurant = {this.deleteRestaurant}/>
                  ))
                     }



                  {/* {createStatus && <Restaurant list = {list}/>} */}

            
            </div>
        )
    }

}

export default CreateNewRes