import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCustomer from "./models/AddCustomer";
import EditCustomer from "./models/EditCustomer";
import RemovCustomer from "./models/RemoveCustomer";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<AddCustomer/>}></Route>
        <Route path="/edit/:id" element={<EditCustomer/>}></Route>
        <Route path="/delete/:id" element={<RemovCustomer/>}></Route>
      </Routes>
    </BrowserRouter>
 
  );
};
export default App;
