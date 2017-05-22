import React from 'react'
import { connect } from 'react-redux'
import { addListItem } from '../actions'

const AddList = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addListItem(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add List
        </button>
      </form>
    </div>
  )
}

export default connect()(AddList)
