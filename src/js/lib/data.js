const ls = window.localStorage

const data = {
  /**
   * Returns all items in localStorage or empty array
   */
  read: () => {
    try {
      return JSON.parse(ls.getItem('todos')) || []
    } catch (e) {
      return []
    }
  },

  /**
   * Parses current data and if record doesn't exist - creates, if it does
   * exist - modified. Writes back to localStorage.
   */
  write: (rec) => {
    const curData = data.read()
    curData.filter((t) => t.id === rec.id).length === 0
      ? ls.setItem('todos', JSON.stringify(curData.concat([ rec ])))
      : ls.setItem('todos', JSON.stringify(curData.map((t) => t.id === rec.id ? rec : t)))
  }
}

export default data
