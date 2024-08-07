import { Fitness } from "./fitness"
import { Siglo } from "./siglo"

export const Projects = () => {
    return (
        <div className="py-20 flex flex-col text-center items-center justify-center bg-gray-100">
            <h1 className="text-azuloscuro text-6xl font-extrabold relative px-4 rounded-md my-4 z-10 highlight-title">Algunos de nuestros proyectos</h1>
            <div className="flex flex-row justify-evently space-x-20 my-8">
                <Siglo></Siglo>
                <Fitness></Fitness>
            </div>
        </div>
    )
}