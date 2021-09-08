import { Component } from "react";
import RestaurantItem from "./RestaurantItem";

class Search extends Component {

    state = {
        restaurantList : this.props,
        searchInput : ""
    }


    searchValue = (event) => {
        this.setState({searchInput : event.target.value})
    }


    render(){
        const {restaurantList,searchInput} = this.state
        console.log(restaurantList)
        const arrayList = [...restaurantList.restaurantList]
        console.log(arrayList)

        const searchResult = arrayList.filter(each => each.name.toLowerCase().includes(searchInput))
       
        
        return(
            <div>
                <input type = "text" onChange = {this.searchValue} />
            {searchResult.map(each => (
                <RestaurantItem restaurantDetails = {each}/>
            ))}
            </div>
        )
    }
}

export default Search