import { connect } from 'react-redux'
import List from '../components/List'
import { addListToFav } from '../actions'

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
    title: 'Vegetables',
    button: 'Add to FAV'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddToFav: (text, index) => {
      dispatch(addListToFav(text))
    }
  }
}

const Listing = connect(mapStateToProps, mapDispatchToProps)(List)

export default Listing
