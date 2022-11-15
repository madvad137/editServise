import Head from "next/head"
import Addres from "../components/Addres/Addres"
import Advantages from "../components/Advantages/Advantages"
import SingUp from "../components/SingUp/SingUp"


let singUpPage = () => {

    return(
        <>
            <Head>
                <title>Записаться на ремонт</title>
            </Head>
            <div className="contacts">
                <SingUp/>
                <Addres/>
                <Advantages/>
            </div>
        </>
        
    )
}

export default singUpPage