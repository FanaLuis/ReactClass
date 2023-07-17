import "./App.scss";
import Location from "./components/Location/Location";
import Home from "./components/home/Home";
import HomeList from "./components/home/HomeList";
import Pics from "./components/picss/Pics";
import Time from "./components/times/Time";
function App() {
  return (
    <div>
      <div className="p-5 border m-2  ">
        <Time></Time>
      </div>

      <Pics></Pics>
      {/* homelist vs home o folder home  */}
      <HomeList>
        <Home></Home>
        <Home></Home>
        <Home></Home>
      </HomeList>
      {/* location o folder location */}
      <div className="p-5 border m-2 text-center">
        <Location></Location>
      </div>
    </div>
  );
}

export default App;
