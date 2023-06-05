import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
    <Routes>
      <Route path='/zity.in/1' element={<Page1 />} />
      <Route path='/zity.in/2' element={<Page2 />} />
    </Routes>
  </div>
  );
}

export default App;
