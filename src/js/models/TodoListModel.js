import { observable, computed, action } from 'mobx'

import TodoModel from './TodoModel'

export default class TodoListModel {
  @observable todos = []

  @computed
  get finishedTodoCount () {
    return this.todos.filter(todo => todo.finished).length
  }

  @computed
  get percentComplete () {
    const finished = this.todos.filter(todo => todo.finished).length
    return Math.floor(finished / this.todos.length * 100) || 0
  }

  @action
  addTodo (title, id = false, finished = false) {
    this.todos.push(new TodoModel(title, id, finished))
  }
}
