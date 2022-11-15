import Head from "next/head"
import Addres from "../components/Addres/Addres"
import Advantages from "../components/Advantages/Advantages"
import SingUp from "../components/SingUp/SingUp"


let contacts = () => {

    return(
        <>
            <Head>
                <title>Наши контакты</title>
            </Head>
            <div className="contacts">
            <Addres/>
            <Advantages/>
            <SingUp/>
            </div>
        </>
        
    )
}

export default contacts