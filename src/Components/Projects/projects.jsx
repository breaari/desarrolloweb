import { Fitness } from "./fitness"
import { Siglo } from "./siglo"

export const Projects = () => {
    return (
        <div className="py-20 flex flex-col text-center items-center justify-center bg-gray-100 px-10 mq980:px-5 mq980:py-10">
            <h1 className="text-azuloscuro text-6xl font-extrabold relative rounded-md my-4 z-10 highlight-title mq980:text-5xl">Algunos de nuestros proyectos</h1>
            <div className="flex flex-row justify-evently space-x-20 my-8 mq980:flex-col mq980:space-x-0 mq980:space-y-4">
                <Siglo></Siglo>
                <Fitness></Fitness>
            </div>
        </div>
    )
}