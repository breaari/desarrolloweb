
export const Form = () => {
  return (
    <form className="bg-white w-full max-w-lg mx-auto p-12 shadow-right rounded-[25px] border-2 border-celeste text-celeste text-xl">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Formulario de Contacto</h2> */}
      <div className="flex flex-row justify-between space-x-2">
      {/* Campo Nombre */}
      <div className="mb-4 ">
        <label  className="items-center font-semibold py-2"> Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
       
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        />
      </div>
      
      {/* Campo Apellido */}
      <div className="mb-4 ">
        <label className="items-center font-semibold py-2">Apellido</label>
        <input
          id="apellido"
          type="text"
          name="apellido"
         
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        />
      </div>
      </div>
      
      {/* Campo Nombre de Empresa */}
      <div className="mb-4 ">
        <label  className="items-center font-semibold py-2">Nombre de la empresa</label>
        <input
          id="empresa"
          type="text"
          name="empresa"
         
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        />
      </div>
      
      {/* Campo Tamaño de la Empresa */}
      <div className="mb-4 ">
        <label className="items-center font-semibold py-2">Tamaño de la empresa</label>
        <select
          id="tamano"
          name="tamano"
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        >
          <option disabled value="">Tamaño de la empresa</option>
          <option value="pequeña">Pequeña</option>
          <option value="mediana">Mediana</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      
      {/* Campo E-mail */}
      <div className="mb-4 ">
        <label className="items-center font-semibold py-2"> Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        />
      </div>
      
      {/* Campo WhatsApp */}
      <div className="mb-4 ">
        <label className=" items-center font-semibold py-2 ">WhatsApp </label>
        <input
          id="whatsapp"
          type="tel"
          name="whatsapp"
          className="w-full focus:outline-none border-b-2 border-celeste font-semibold"
          
        />
       
      </div>
      
      {/* Botón de Envío */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-celeste text-white font-bold py-2 px-4 rounded-[50px] hover:scale-95 "
        >
          ¡Enviar!
        </button>
      </div>
    </form>
  );
};
