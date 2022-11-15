
import { useAppContext } from "../../context/dataContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"



const Layout = ({children}) => {
    
    return(
        <>
            <Header />
            {children}
            <Footer />``
        </> 
    )
}

export default Layout