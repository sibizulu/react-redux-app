import { connect } from 'react-redux'
import List from '../components/List'
import { removeFromFav } from '../actions'

const mapStateToProps = (state) => {
  return {
    listing: state.favorite,
    title: 'Favorite',
    button: 'Remove from FAV'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddToFav: (text, index) => {
      dispatch(removeFromFav(index))
    }
  }
}

const Favorite = connect(mapStateToProps, mapDispatchToProps)(List)

export default Favorite
