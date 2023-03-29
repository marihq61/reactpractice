import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  
  return(
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} ToDo's</h2>
  );
}

//export default TodoCounter;//opcion 1 para encapsular y hay que importarlo en app.js, la diferencia es que el nombre puede ser x
export { TodoCounter } //opcion 2, la mejor opcion=obligar a usar el nombre que es por las llaves {}