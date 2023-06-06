import NestedDrop from "./Components/NestedDrop/NestedDrop";
import FilterArrayObject from "./Components/FilterArrayObject";
import SearchingPattern from "./Components/SearchingPattern";

function App() {


  return (
    <div className="App">
     <NestedDrop showbtn={false}/>
     <FilterArrayObject/>
     <hr/>
     <SearchingPattern/>
    </div>
  );
}

export default App;
