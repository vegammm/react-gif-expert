import { useState } from "react";

import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategories = (newCategory) => {
    //para que  no te deje poner dos veces el mismo nombre en la lista
    if (categories.includes(newCategory)) return;

    //return setCategories([...categories, "pulpo"]); //1forma
    //setCategories((cat) => ["pulpo", ...cat]); //2forma
    setCategories((cat) => [newCategory, ...cat]); //3forma
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategories={(event) => onAddCategories(event)}
        //setCategories={setCategories}
      />

      {/* LISTADO DE Gif */}

        {categories.map((category, i) => (
          <GifGrid key={`${category}-${i}`}category={category} index={i}/>
         
        ))}


      {/* Gif Ite,*/}
    </>
  );
};

