import InputToDo from "./components/InputToDo";
import Header from "./components/Header";
import ListContent from "./components/ListContent";
import { useSelector } from "react-redux";

function App() {
  const { todoList, todoFilter } = useSelector((state) => state.todo);
  console.log(todoList);
  console.log(todoFilter);

  return (
    <div className="md:container md:mx-auto">
      <Header>
        <InputToDo />
        <ListContent />
      </Header>
    </div>
  );
}

export default App;
