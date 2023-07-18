import { useEffect } from "react";
import { useState } from "react";
import Inpuut from "../../input";
import Select from "../../Select";
import SubmitButton from "../../submitButton";
import { Forme } from "./styles";

function Formulario({ btnText }) {
  const [categories, setCategories] = useState([]);
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
  return (
    <>
      <Forme>
        <Inpuut
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <Inpuut
          type="number"
          text="Orçamento"
          name="budget"
          placeholder="Insira o Orçamento total"
        />

        <Select
          name="category id"
          text="Selecione a categoria"
          options={categories}
        />

        <SubmitButton text={btnText} />
      </Forme>
    </>
  );
}

export default Formulario;
