
import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './App.css';
import Men from "./Components/Men/Men";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Routes path='/men' element={<Men/>}/>
        </Routes>

      </HashRouter>
    
    </div>
  );
}

export default App;
