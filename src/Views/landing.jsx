import { Contact } from "../Components/Contact/contact"
import { Footer } from "../Components/Footer/footer"
import { Header } from "../Components/Header/header"
import { Projects } from "../Components/Projects/projects"
import { Services } from "../Components/Services/services"
import { Chat } from "../Components/Chat/chat"

export const Landing = () => {
    return (
        <div className="font-beiruti">
            <Header></Header>
            <Services></Services>
            <Contact></Contact>
            <Projects></Projects>
            <Footer></Footer>
            <Chat></Chat>
        </div>
    )
}