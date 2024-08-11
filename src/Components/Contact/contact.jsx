import { Form } from "./form"
import impulsar2 from "../../assets/impulsar2.png"

export const Contact = () => {

    return (
        <div className="bg-azuloscuro">
        <div className="relative blue-rounded-tl laputaquetepario min-h-screen max-w-screen bg-azuloscuro flex flex-row justify-center items-center mq980:flex-col overflow-hidden">
          <div className="relative bg-white w-[50%] text-5xl text-azuloscuro font-extrabold text-center flex flex-col justify-center items-center px-10 py-10 mq980:w-full mq980:px-5 mq980:text-5xl">
            Descubrí cómo podemos transformar tu presencia en la web y destacar en el mundo digital
            <img src={impulsar2} className="w-[200px] mt-4" alt="Impulsar 2" />
          </div>
          <div className="w-[50%] bg-white mq980:w-full mq980:px-5 mq980:my-10">
            <Form />
          </div>
        </div>
        </div>
      );
}
