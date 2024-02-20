import {Component} from 'react'

import Header from '../Header'
import RestaurantsHeader from '../RestaurantsHeader'
import Dish from '../Dish'

import './index.css'

class AllRestaurant extends Component {
  state = {
    restaurantsList: [],
    activeCategoryId: 'Salads and Soup',
  }

  componentDidMount() {
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    const {activeCategoryId} = this.state

    const apiUrl = `https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData[0]
      const menusList = updatedData.table_menu_list.map(each => ({
        menuCategory: each.menu_category,
        menuId: each.menu_category_id,
        menuDishes: each.category_dishes,
      }))
      const theMenu = menusList.find(
        each => each.menuCategory === activeCategoryId,
      )
      const dishesList = theMenu.menuDishes
      this.setState({
        restaurantsList: dishesList,
      })
    }
  }

  updateActiveCategoryId = activeCategoryId => {
    this.setState({activeCategoryId}, this.getRestaurantsList)
  }

  renderRestaurantsList = () => {
    const {restaurantsList} = this.state
    return (
      <>
        <Header />
        <RestaurantsHeader
          updateActiveCategoryId={this.updateActiveCategoryId}
        />
        <div className="Restaurants-container">
          {restaurantsList.map(each => (
            <Dish dishData={each} key={each.id} />
          ))}
        </div>
      </>
    )
  }

  render() {
    return <div>{this.renderRestaurantsList()}</div>
  }
}

export default AllRestaurant
