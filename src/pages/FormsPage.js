import React, { useEffect, useState } from 'react';

const FormsPage = () => {
  const [name, setName] = useState();
  const [departamento, setDepartamento] = useState('rivera');
  const [errors, setErrors] = useState([]);

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors([]);
    const newErrors = [];
    if (name === "Julian"){
      newErrors.push("No quiero saber nada de esa persona");
    }

    if (departamento === "rivera"){
      newErrors.push("No entiendo Portunol");
    } 
    setErrors(newErrors);
  }

  return (
    <>
    
      {errors && <ul> {errors.map((error, index) => <li key={index}>{error}</li>) } </ul> }

      <form onSubmit={(event) => handleSubmit(event)} >

        <input 
          type="text" 
          placeholder="Ejemplo" 
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <select onChange={(event) => setDepartamento(event.target.value)} value={departamento}>
          <option value=""> ------ </option>
          <option value="artigas">Artigas</option>
          <option value="canelones">Canelones</option>
          <option value="cerro_largo">Cerro Largo</option>
          <option value="maldonado">Maldonado</option>
          <option value="montevideo">Montevideo</option>
          <option value="rio_negro">Rio Negro</option>
          <option value="rivera">Rivera</option>
          <option value="tacuarembo">Tacuarembo</option>
        </select>

        <button className="bg-red-100" type="submit">Enviar</button>

      </form>
    </>
  )
}

export default FormsPage;
