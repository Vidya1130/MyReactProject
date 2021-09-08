import "./restaurant.css"
const RestaurantItem = props => {
    const {restaurantDetails,deleteRestaurant} = props 
    const {name,type,costForOne,city,Rating,id} = restaurantDetails


    const onDelete = () => {
        deleteRestaurant(id)
    } 

    return(
        <div className = "item-container">
            <h1>{name}</h1>
            <div className = "item">
            <p>{type}</p>
            <p>{costForOne}</p>
            <p>{city}</p>
            <p>{Rating}</p>
            <div>
                <button onClick = {onDelete}>Delete</button>
            </div>
            </div>

           

            


        </div>
    )
}

export default RestaurantItem