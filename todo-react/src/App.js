import './App.css';
import TodoCounter from './components/todocounter/TodoCounter';
import TodoList from './components/todolist/TodoList';
import TodoSearch from './components/todosearch/TodoSearch';
import TodoItem from './components/todoitem/TodoItem';
import TodoButton from './components/todobutton/TodoButton';
import { useState } from 'react';

const todos = [
  { text: "repetir el curso de react" },
  { text: "Terminar las maquinas" },
  { text: "conseguir un mejor trabajo" }
]

function App() {

  const [serchValue, setSerchValue] = useState('')

  return (
    <div className="App">
      <>
        <TodoCounter />
        <TodoSearch 
          serchValue={serchValue}
          setSearchValue={setSerchValue}
        />
          <TodoList>
            { 
              todos.map( todo => <TodoItem key = { todo.text } text = { todo.text } /> ) 
            }
          </TodoList>
      </>
        <TodoButton />
    </div>
  );
}

export default App;
