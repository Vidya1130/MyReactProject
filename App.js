import { Component } from "react";

import CreateNewRes from "./components/CreateNewRes";
import Search from "./components/Search"
import './components/restaurant.css';


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


class App extends Component {

  state = {
    createRes : false,
    searchStatus : false
  }

  createNewRes = () => {
    this.setState(prevState => ({
      createRes : !prevState.createRes
    }))
  }

  search = () => {
    this.setState(prevState => ({
      searchStatus : !prevState.searchStatus
    }))

  }

 

  render(){

  const {createRes,searchStatus} = this.state
  console.log(createRes)
  return (
    <div className="App">
       <div className = "restaurant-header">
            <h1>Welcome to Restaurant Page</h1>
       </div>
       <div className = "restaurant-button-container">
        
          <button onClick = {this.search}>Search Restaurant</button>
          <button onClick = {this.createNewRes}>Create new Restaurant</button>
      </div>
      {createRes && <CreateNewRes restaurantList = {restaurantList}/>}
      {searchStatus && <Search restaurantList = {restaurantList}/>}
     
    
    </div>
  );
}
}

export default App;