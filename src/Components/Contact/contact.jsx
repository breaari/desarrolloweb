// import { Form } from "./form"
// import transformar from "../../assets/transformar.png"
// import impulsar from "../../assets/impulsar.png"
// import impulsar2 from "../../assets/impulsar2.png"

// export const Contact = () => {
//     return (
//         <div className="bg-white flex flex-row my-10 rounded-tl-3xl">
//             <div className=" bg-white w-[50%] text-5xl text-azuloscuro font-extrabold text-center flex flex-col justify-center items-center px-10 py-10">
//                 Descubrí cómo podemos transformar tu presencia en la web y destacar en el mundo digital
//                 <img src = { impulsar2 } className="w-[200px] mt-4"></img>
//             </div>
//             <div className="w-[50%] bg-white">
//                 <Form></Form>
//             </div>
//         </div>
//     )
// }

import { Form } from "./form"
import transformar from "../../assets/transformar.png"
import impulsar from "../../assets/impulsar.png"
import impulsar2 from "../../assets/impulsar2.png"


export const Contact = () => {
    return (
        <div className="min-h-screen bg-white flex flex-row laputaquetepario justify-center items-center">
            <div className="relative blue-rounded-tl laputaquetepario bg-white w-[50%] text-5xl text-azuloscuro font-extrabold text-center flex flex-col justify-center items-center px-10 py-10">
                Descubrí cómo podemos transformar tu presencia en la web y destacar en el mundo digital
                <img src={impulsar2} className="w-[200px] mt-4" alt="Impulsar 2" />
            </div>
            <div className="w-[50%] bg-white">
                <Form />
            </div>
        </div>
    )
}
