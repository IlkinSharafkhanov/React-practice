// rooting
import { Routes, Route, useLocation } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
//components
import Header from "./components/Header";
//pages
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Table from "./pages/Table";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
//styles

function App () {
  const navigate = useLocation()
  console.log(navigate);
  return (
    <div className="app">
      {navigate.pathname !== "/"?<Header/>:null}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<Table />} exact />
          <Route path="/details:id" element={<Details exact />} />
          <Route path="/count" element={<Main />} exact />
        </Route>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
