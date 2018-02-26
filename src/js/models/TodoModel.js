import { observable, autorun } from 'mobx'

import data from '../lib/data'

export default class TodoModel {
  @observable title
  @observable finished

  constructor (title, id = false, finished = false) {
    this.id = id || Math.random().toString(36).substr(2, 10)
    this.title = title
    this.finished = finished
    autorun((change) => {
      /**
       * Any time the properties of `this` below change this will
       * automatically be run, updating the record in localStorage
       */
      data.write({
        id: this.id,
        title: this.title,
        finished: this.finished
      })
    })
  }

  toggleStatus = () => {
    this.finished = !this.finished
  }
}
