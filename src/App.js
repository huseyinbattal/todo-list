import InputToDo  from "./components/InputToDo";
import Header from "./components/Header";

function App() {
  return (
    <div className="md:container md:mx-auto">
      <Header>
        <InputToDo/>
     </Header>
    </div>
  );
}

export default App;
