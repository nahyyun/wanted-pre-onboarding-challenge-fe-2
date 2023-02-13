interface ITodo {
  readonly id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface IAddInputValue {
  content: string;
  isDone?: boolean;
  category?: string;
  tags?: string[];
}

interface IEditInputValue {
  content?: string;
  isDone?: boolean;
  category?: string;
  tags?: string[];
}

interface ITodoService {
  addTodo(todo: IAddInputValue): void;
  getTodos(): ITodo[] | void;
  getTodoById(id: number): ITodo | void;
  updateTodo(id: number, value: IEditInputValue): void;
  deleteAllTodos(): void;
  deleteTodoById(id: number): void;
  deleteTag(id: number, tagName: string): void;
  deleteAllTags(id: number): void;
}

class Todos implements ITodoService {
  private todos: ITodo[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: IAddInputValue) {
    this.todos = [
      ...this.todos,
      {
        id: new Date().getTime(),
        isDone: false,
        category: "",
        tags: [],
        ...todo,
      },
    ];
  }

  getTodos(): void | ITodo[] {
    return this.todos;
  }

  getTodoById(id: number): void | ITodo {
    const find = this.todos.find((todo) => todo.id === id);

    return find;
  }

  updateTodo(id: number, value: IEditInputValue) {
    const newTodo = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...value };
      }
      return todo;
    });

    this.todos = newTodo;
  }

  deleteAllTodos() {
    this.todos = [];
  }

  deleteTodoById(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  deleteTag(id: number, tagName: string) {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        const newTags = todo.tags?.filter((tag) => tag !== tagName);
        todo.tags = newTags ?? [];
      }
      return todo;
    });

    this.todos = newTodos;
  }

  deleteAllTags(id: number) {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.tags = [];
      }
      return todo;
    });

    this.todos = newTodos;
  }
}
