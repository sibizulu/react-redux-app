import { connect } from 'react-redux'
import ListData from '../components/ListData'
import { addListToFav } from '../actions'

const mapStateToProps = (state) => {
  return {
    listing: state.posting,
    title: 'Post'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddToFav: (text, index) => {
      dispatch(addListToFav(text))
    }
  }
}

const Listing = connect(mapStateToProps, mapDispatchToProps)(ListData)

export default Listing
