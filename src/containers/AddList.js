import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addListItem } from '../actions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'title', 'body']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    fullWidth
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const style = {
  margin: 12
}

class AddList extends Component {

  handleFormSubmit (data) {
    const {reset} = this.props
    const { dispatch } = this.props
    dispatch(addListItem({title: data.title, body: data.body}))
    reset()
  }

  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <Field name='title' component={renderTextField} label='Title' />
          </div>
          <div>
            <Field name='body' component={renderTextField} label='Description' multiLine rows={6} />
          </div>

          <div>
            <RaisedButton
              primary
              type='submit'
              disabled={pristine || submitting}
              label='Create'
              style={style} />
            <RaisedButton
              secondary
              type='submit'
              disabled={pristine || submitting}
              onClick={reset}
              label='Reset'
              style={style} />
          </div>
        </form>
      </div>
    )
  }
}

AddList = reduxForm({
  form: 'AddList',
  validate
})(AddList)

export default connect()(AddList)
