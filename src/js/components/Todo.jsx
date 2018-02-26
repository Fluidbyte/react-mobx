import React from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem } from 'react-bootstrap'

import '../../css/components/Todo.scss'

export default class Todo extends React.Component {
  render () {
    return (
      <ListGroupItem
        onClick={this.props.todo.toggleStatus}
        disabled={this.props.todo.finished}
      >
        {this.props.todo.title}
      </ListGroupItem>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object
}
