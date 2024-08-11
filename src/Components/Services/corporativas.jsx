import { useState } from 'react';

export const Corporativas = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="bg-blanco cursor-pointer p-8 text-azuloscuro w-[33%] flex flex-col justify-start items-center text-center rounded-[25px] mq980:w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h1 className="font-bold text-4xl z-10 highlight-title">Páginas corporativas</h1>
            <p className="font-semibold text-2xl mt-2">
                {hovered 
                    ? (
                        <ul className='list-disc pl-6 text-start'>
                            <li>Reflejo de la identidad de la empresa.</li>
                            <li>Proporciona información esencial.</li>
                            <li>Facilita la comunicación.</li>
                            <li>Herramienta de marketing.</li>
                            <li>Soporte al cliente.</li>
                            <li>Relaciones públicas.</li>
                            <li>Generación de confianza.</li>
                            <li>Acceso a la información actualizada.</li>
                        </ul>
                      )
                    : 'Sitio web que representa a una empresa, organización o entidad comercial en el entorno digital. Su propósito principal es proporcionar información sobre la empresa, sus productos o servicios, y facilitar la comunicación con clientes, socios, inversionistas y otros interesados. A diferencia de otros tipos de sitios web, una página web corporativa está diseñada para reflejar la identidad y los valores de la empresa, además de servir como una herramienta de marketing y relaciones públicas.'
                }
            </p>
        </div>
    );
};
