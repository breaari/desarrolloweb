import { useState } from 'react';

export const LandingPages = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="bg-blanco cursor-pointer p-8 text-azuloscuro w-[33%] flex flex-col justify-start items-center text-center rounded-[25px] mq980:w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h1 className="font-bold text-4xl z-10 highlight-title">Landing Pages</h1>
            <p className="font-semibold text-2xl mt-2">
                {hovered 
                    ? (
                        <ul className='list-disc pl-6 text-start'>
                            <li>Alta conversión en clientes.</li>
                            <li>Obtención de datos valiosos.</li>
                            <li>Promoción de productos o servicios específicos.</li>
                            <li>Captación de suscriptores.</li>
                            <li>Generación de leads para campañas de marketing.</li>
                            <li>Inscripción a eventos o webinars.</li>
                            <li>Descarga de recursos exclusivos.</li>
                            <li>Creación de campañas estacionales.</li>
                            <li>Redirección de tráfico desde redes sociales.</li>
                        </ul>
                      )
                    : 'Página web diseñada específicamente para convertir visitantes en leads o clientes. Su objetivo principal es persuadir al visitante a realizar una acción concreta, como completar un formulario, descargar un recurso, registrarse para un evento o realizar una compra.'
                }
            </p>
        </div>
    );
};
