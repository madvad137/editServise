import Head from "next/head";
import Addres from "../components/Addres/Addres";

import SingUp from "../components/SingUp/SingUp";



    export async function getServerSideProps ({params}) {
        let response = await fetch(`https://636e2e99b567eed48ad590cf.mockapi.io/data/${params.id}`);
        const data = await response.json()
        return{
          props:{
            post:data
          }
        }
      }


  
 const contact = ({post}) => {

    return (
        <>
            <Head>
                <title>{post.name}</title>
            </Head>
            <div className="gajet__info">
                <div className="intro__item gajet__item">
                    <div className="intro__info">
                        <h2 className="intro__title">{post.name}</h2>
                        <a href="" className="intro__btn">Записаться</a>
                    </div>
                    <div className="intro__img">
                        <img src="/intro1.jpg"/>
                    </div>
                </div>
                <div className="gajet__text">
                    <div className="container">
                        {post.text}
                    </div>
                </div>
                <div className="gajet__prise">
                    <table className="gajet__table">
                        <tbody className="gajet__table-body">
                            <tr>
                                <th>Название</th>
                                <th>Стоимость</th>
                            </tr>
                            {
                                post.priseItem.map((item,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.prise}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <SingUp/>
                <Addres/>
            </div>
        </>
        
        
    )
  }
  export default contact;
  