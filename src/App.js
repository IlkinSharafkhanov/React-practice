// rooting
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
//pages
import Main from "./pages/Main";
import Table from "./pages/Table";
import Details from "./pages/Details";
//styles

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/table" element={<Table />} />
        <Route path="/details:id" element={<Details />} />
      </Routes>  
    </div>
  );
}

export default App;
