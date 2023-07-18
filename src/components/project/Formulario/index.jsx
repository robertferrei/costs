import { useEffect } from "react";
import { useState } from "react";
import Inpuut from "../../input";
import Select from "../../Select";
import SubmitButton from "../../submitButton";
import { Forme } from "./styles";

function Formulario({handleSubmit, btnText,projectData }) {
  const [categories, setCategories] = useState([]);
  const[project,SetProjects]= useState(projectData || {})
  useEffect(() => {
    fetch(" http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit =(e) =>{
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
 
     
  }
  function handleChange(e) {
    SetProjects({ ...project, [e.target.name]: e.target.value })
  
  }

  function handleCategory(e) {
    SetProjects({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }
 

  return (
    <>
      <Forme onSubmit={submit}>
        <Inpuut
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
        />
        <Inpuut
          type="number"
          text="Orçamento"
          name="budget"
          placeholder="Insira o Orçamento total"
          handleOnChange={handleChange}
        />

        <Select
          name="category id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
   
        />

        <SubmitButton text={btnText} />
      </Forme>
    </>
  );
}

export default Formulario;
