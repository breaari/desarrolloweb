import { useState } from 'react';

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nameIsValid } from '../Validations/nameIsValid';
import { lastnameIsValid } from '../Validations/lastnameIsValid';
import { companyIsValid } from '../Validations/companyIsValid';
import { sizeIsValid } from '../Validations/sizeIsValid';
import { emailIsValid } from '../Validations/emailIsValid';
import { whatsAppIsValid } from '../Validations/whatsAppIsValid';

export const Form = () => {

  const [input, setInput] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    tamaño: '',
    email: '',
    whatsapp: ''
  });

  const [inputError, setInputError] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    tamaño: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));

    let validation;

    switch (name) {
      case 'nombre':
        validation = nameIsValid(value);
        break;
      case 'apellido':
        validation = lastnameIsValid(value);
        break;
      case 'empresa':
        validation = companyIsValid(value);
        break;
      case 'tamaño':
        validation = sizeIsValid(value);
        break;
      case 'email':
        validation = emailIsValid(value);
        break;
      case 'whatsapp':
        validation = whatsAppIsValid(value);
        break;
      default:
        validation = { valid: true, error: '' };
    }

    setInputError((prevInputError) => ({
      ...prevInputError,
      [name]: validation.error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación de todos los campos
    const isInputValid = Object.values(input).every(value => value.trim() !== '');
    const isErrorValid = Object.values(inputError).every(({ valid }) => valid);
  
    // Preparar mensajes de error
    let errorMessages = [];
  
    // Recolectar mensajes de error de los campos específicos
    Object.entries(inputError).forEach(([key, { error }]) => {
      if (error) {
        errorMessages.push(error);
      }
    });
  
    // Mensaje genérico si hay campos vacíos
    if (!isInputValid) {
      errorMessages.push('Por favor, complete todos los campos.');
    }

    if (!isErrorValid) {
      errorMessages.push('Por favor, revisa todos los campos antes de enviar.');
    }
  
  
    try {
      const responseBack = await axios.post("https://formspree.io/f/movawkgg", input, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      setInput({
        nombre: '',
        apellido: '',
        empresa: '',
        tamaño: '',
        email: '',
        whatsapp: ''
      });
  
      if (!toast.isActive('success-toast')) {
        toast('Gracias por tu mensaje! Nos estaremos contactando a la brevedad.', {
          toastId: 'success-toast',
        });
      }
  
    } catch (error) {
      console.log(error);
      toast('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.', {
        toastId: 'generic-error-toast',
      });
    }
  };
  

  return (
    <form className="bg-white w-full max-w-lg mx-auto p-12 shadow-right rounded-[25px] border-2 border-celeste text-celeste text-xl" onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between space-x-2">
        <div className="mb-4 w-full">
          <label className="items-center font-semibold py-2">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={input.nombre}
            onChange={handleChange}
            className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.nombre ? 'border-red-500' : 'border-celeste'}`}
          />
          {inputError.nombre && <p className="text-red-500 text-sm">{inputError.nombre}</p>}
        </div>

        <div className="mb-4 w-full">
          <label className="items-center font-semibold py-2">Apellido</label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={input.apellido}
            onChange={handleChange}
            className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.apellido ? 'border-red-500' : 'border-celeste'}`}
          />
          {inputError.apellido && <p className="text-red-500 text-sm">{inputError.apellido}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="items-center font-semibold py-2">Nombre de la empresa</label>
        <input
          id="empresa"
          type="text"
          name="empresa"
          value={input.empresa}
          onChange={handleChange}
          className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.empresa ? 'border-red-500' : 'border-celeste'}`}
        />
        {inputError.empresa && <p className="text-red-500 text-sm">{inputError.empresa}</p>}
      </div>

      <div className="mb-4">
        <label className="items-center font-semibold py-2">Tamaño de la empresa</label>
        <select
          id="tamaño"
          name="tamaño"
          value={input.tamaño}
          onChange={handleChange}
          className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.tamaño ? 'border-red-500' : 'border-celeste'}`}
        >
          <option disabled value="">Seleccionar tamaño</option>
          <option value="1 a 10">1 a 10</option>
          <option value="11 a 50">11 a 50</option>
          <option value="50 a 200">50 a 200</option>
          <option value="más de 200">más de 200</option>
        </select>
        {inputError.tamaño && <p className="text-red-500 text-sm">{inputError.tamaño}</p>}
      </div>

      <div className="mb-4">
        <label className="items-center font-semibold py-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.email ? 'border-red-500' : 'border-celeste'}`}
        />
        {inputError.email && <p className="text-red-500 text-sm">{inputError.email}</p>}
      </div>

      <div className="mb-4">
        <label className="items-center font-semibold py-2">WhatsApp</label>
        <input
          id="whatsapp"
          type="tel"
          name="whatsapp"
          value={input.whatsapp}
          onChange={handleChange}
          className={`w-full focus:outline-none border-b-2 font-semibold ${inputError.whatsapp ? 'border-red-500' : 'border-celeste'}`}
        />
        {inputError.whatsapp && <p className="text-red-500 text-sm">{inputError.whatsapp}</p>}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-celeste text-white font-bold py-2 px-4 rounded-[50px] hover:scale-95"
        >
          ¡Enviar!
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        queue={false}
        theme="none"
        transition={Slide}
        className="toast-container bg-azuloscuro rounded-md max-w-full w-auto p-0 m-0 border-none shadow-none"
        bodyClassName="toast-body bg-azuloscuro text-blanco font-beiruti border-none shadow-none text-xl px-2"
      />
    </form>
  );
};
