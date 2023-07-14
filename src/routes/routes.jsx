import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Company from "../Container/Company/";
import Contact from "../Container/Contact/";
import Home from "../Container/Home/";
import NewProject from "../Container/NewProject/";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Route>
    </Routes>
  );
}

export default Router;
