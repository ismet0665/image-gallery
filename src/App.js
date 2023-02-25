import Home from "./components/Home";
import Picture from "./components/Picture";
import data from "./data";

function App() {
  // console.log(data);
  return (
    <div>
      <Home />
      <Picture data ={data} />
    </div>
  );
}

export default App;
