import "./App.css";
import Filters from "./Components/Fiters";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/SideBar";
import VideoContainer from "./Components/VideoContainer";
// import Filters from "./Components/Filters";
import { btnArr } from "./Components/filterArray/filtersArray";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      {/* Main content wrapper */}
     

        <div className="filters">
  {btnArr.map((btnObj, index) => (
    <Filters key={index} text={btnObj.text} />
  ))}
</div>
<VideoContainer/>
      </div>
  );
}

export default App;
