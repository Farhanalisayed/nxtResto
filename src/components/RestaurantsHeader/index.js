import {Component} from 'react'

import './index.css'
const categories = [
  'Salads and Soup',
  'From The Barnyard',
  'From the Hen House',
  'Fresh From The Sea',
  'Biryani',
  'Fast Food',
]

class RestaurantsHeader extends Component {
  state = {
    activeCategoryId: 'Salads and Soup',
  }

  onChangeSortBy = event => {
    const {updateActiveCategoryId} = this.props
    this.setState({activeCategoryId: event.target.value})
    updateActiveCategoryId(event.target.value)
  }

  render() {
    const {activeCategoryId} = this.state

    return (
      <div className="Restaurants-header">
        {categories.map(each => (
          <button
            onClick={this.onChangeSortBy}
            value={each}
            className={activeCategoryId === each ? 'active-btn' : 'normal-btn'}
          >
            {each}
          </button>
        ))}
      </div>
    )
  }
}
export default RestaurantsHeader
