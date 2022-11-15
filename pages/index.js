import Intro from '../components/Intro/intro'
import RepairType from '../components/RepairType/RepairType'
import SingUp from '../components/SingUp/SingUp'
import Advantages from '../components/Advantages/Advantages'
import Addres from '../components/Addres/Addres'
import Head from "next/head"



 const Home = () => {

  return (
    
    <>
      <Head>
        <title>Edit Service - Ремонт техники в Армавире</title>
        <meta keywords="ремонт техники в Армавире, ремонт телефонов в Армавире, ремонт планшетов в Армавире, ремонт компьютеров в Армавире, ремонт телевизоров в Армавире, ремонт ноутбуков в Армавире"></meta>
        <meta name="description" content="Вам требуется ремонт телефона в Армавире? Нет ничего проще. Сервисный центр EditService предлагает ремонт телефонов по привлекательной цене. Мы работаем с физическими и юридическим лицами. Предоставляем гарантию на все работы, запчасти и комплектующие"></meta>
      </Head>

      <Intro />
      <RepairType />
      <SingUp />
      <Advantages />
      <Addres />
    
      
    </>
  )
}
export default Home;
