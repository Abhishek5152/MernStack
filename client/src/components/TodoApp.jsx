import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }

  addTask() {
    this.setState(state => ({
      tasks: [...state.tasks, { text: state.newTask, completed: false }],
      newTask: ''
    }));
  }

  toggleTask(index) {
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks[index].completed = !tasks[index].completed;
      return { tasks };
    });
  }

  render() {
    const totalTasks = this.state.tasks.length;
    const completedTasks = this.state.tasks.filter(task => task.completed).length;

    return (
      <div>
        <h2>To-Do List</h2>
        <p>Total tasks: {totalTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
        <input 
          type="text" 
          value={this.state.newTask} 
          onChange={this.handleChange} 
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
              <button onClick={() => this.toggleTask(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
