import React from 'react'

import TodoList from './TodoList'
import TodoListModel from '../models/TodoListModel'

import data from '../lib/data'

import '../../css/components/App.scss'

const todosStore = new TodoListModel()

// Load in any todos saved in localStorage
data.read().forEach((t) => {
  todosStore.addTodo(t.title, t.id, t.finished)
})

export class App extends React.Component {
  render () {
    return (
      <TodoList store={todosStore} />
    )
  }
}
