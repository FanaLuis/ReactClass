import "./App.css";
import Home from "./components/home/Home";
import HomeList from "./components/home/HomeList";
import Pics from "./components/picss/Pics";
import Time from "./components/times/Time";
function App() {
  return (
    <div>
      <Time></Time>
      <Pics></Pics>
      <HomeList>
        <Home></Home>
        <Home></Home>
        <Home></Home>
        <Home></Home>
        <Home></Home>
        <Home></Home>
      </HomeList>
    </div>
  );
}

export default App;
