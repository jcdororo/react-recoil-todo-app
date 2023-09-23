import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState, todoListState } from './todoAtoms';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log('todoList',todoList)
  console.log('filteredTodoList',filteredTodoList);
  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
