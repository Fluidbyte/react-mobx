/* eslint no-unused-vars: 0 */
import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import Todo from './Todo'

import { ProgressBar, ListGroup, ListGroupItem, FormControl } from 'react-bootstrap'

@observer
export default class TodoList extends React.Component {
  @observable newTodo = ''

  render () {
    return (
      <div>
        <ProgressBar
          striped
          bsStyle='success'
          now={this.props.store.percentComplete}
        />
        <ListGroup>
          {this.props.store.todos.map((todo, id) => (
            <Todo todo={todo} key={id} />
          ))}
        </ListGroup>
        <form onSubmit={this.handleFormSubmit}>
          <FormControl
            type='text'
            value={this.newTodo}
            onChange={this.handleInputChange}
            placeholder='New Todo...'
          />
        </form>
      </div>
    )
  }

  handleInputChange = e => {
    this.newTodo = e.target.value
  };

  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodo)
    this.newTodo = ''
    e.preventDefault()
  };
}

TodoList.propTypes = {
  store: PropTypes.object
}
