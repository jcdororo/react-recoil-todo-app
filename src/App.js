import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import { todoListState } from './todoAtoms';

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList)
  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
