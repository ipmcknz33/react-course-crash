
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Prep" />
        <Todo title="Land $100k job" />
       
    </div>
      <Modal />
    </div>
  );
}


export default App;
