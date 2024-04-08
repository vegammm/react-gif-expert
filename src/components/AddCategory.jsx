import { useState } from "react";

//export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
   
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategories(inputValue.trim());

    //setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}// OPCION LARGA
        //onChange={onInputChange} //OPCION OPTIMIZADA ES CUANDO LE PASAS EL MISMO ARGUMENTO QUE SE MANDA AL LA FUNCIÓN QUE SE QUIERE EJECUTAR, SE PUEDE OBVIAR
      />
    </form>
  );
};
