import InputToDo  from "./components/InputToDo";
import Header from "./components/Header";
import ListContent from "./components/ListContent";

function App() {
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
