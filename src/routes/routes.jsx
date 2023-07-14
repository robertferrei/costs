import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
 
import Contact from "../Container/Contact/";
import Home from "../Container/Home/";
import NewProject from "../Container/NewProject/";
import Projetos from "../Container/Projetos/index";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Route>
    </Routes>
  );
}

export default Router;
