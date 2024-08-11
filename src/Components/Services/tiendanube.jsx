import { useState } from 'react';

export const TiendaNube = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="bg-blanco cursor-pointer p-8 text-azuloscuro w-[33%] flex flex-col justify-start items-center text-center rounded-[25px] mq980:w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h1 className="font-bold text-4xl z-10 highlight-title mq980:text-3xl">Personalización de Tienda Nube</h1>
            <p className="font-semibold text-2xl mt-2 mq980:text-xl">
                {hovered 
                    ? (
                        <ul className='list-disc pl-6 text-start'>
                            <li>Adaptación a la identidad de tu marca.</li>
                            <li>Mejora de la experiencia del usuario.</li>
                            <li>Optimización de la conversión.</li>                          
                            <li>Adaptación a campañas y promociones.</li>
                        </ul>
                      )
                    : 'Ofrecemos un servicio integral de personalización para Tienda Nube, una plataforma líder en comercio electrónico en América Latina. Este servicio está diseñado para adaptar tu tienda en línea a las necesidades específicas de tu negocio, mejorando la experiencia del usuario y aumentando las conversiones.'
                }
            </p>
        </div>
    );
};
