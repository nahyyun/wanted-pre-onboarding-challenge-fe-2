class Todo {
  /**
   * @param {string} id - The id of the Todo.
   * @param {string} content - The content of the Todo.
   * @param {boolean} done - The done of the Todo.
   * @param {string} category - The category of the Todo.
   * @param {?string[]} tags - The tags of the Todo.
   */
  constructor(id, content, done, category, tags) {
    this.id = id;
    this.content = content;
    this.done = done;
    this.category = category;
    this.tags = tags;
  }

  /**
   * todo create
   * @param {string} content - The content for create.
   * @param {string} category - The category for create.
   * @param {Tag[]} tags - The tag list for create.
   * @param {string} tags[].tagId - The tag id for create.
   * @param {string} tags[].content - The tag content for create.
   * @return {void}
   */
  createTodo(content, category, tags) {}

  /**
   * todo get
   * @param {?number} id - The id for get.
   * @return {Todo[]}
   */
  getTodo(id) {}

  /**
   * todo update
   * @param {number} id - The todo id for update.
   * @param {string} content - The content for update.
   * @param {string} category - The category for update.
   * @param {Tag[]} tags - The tag list for update.
   * @param {string} tags[].tagId - The tag id for update.
   * @param {string} tags[].content - The tag content for update.
   * @return {void}
   */
  updateTodo(id, content, category, tags) {}

  /**
   * todo delete
   * @param {?number} id - can delete all todos.
   *  @return {void}
   */
  deleteTodo(id) {}

  /**
   * tag delete
   * @param {number} todoId
   * @param {?number}tagId - can delete all tags.
   * @return {void}
   */
  deleteTag(todoId, tagId) {}
}

class Tag {
  /**
   * Represents a Tag.
   * @param {string} id - The id of the tag.
   * @param {string} content - The content of the tag.
   */
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}
