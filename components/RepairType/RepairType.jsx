import Image from 'next/image'
import Link from 'next/link';

let RepairType = () => {

    return(
        <div className="repairType">
        <h3 className="repairType__title">Выберете тип ремонта</h3>
        <div className="container">
            <div className="repairType__inner">
                <Link href={"/Remont-noutbukov-i-komputerov"} className="repairType__item">
                    <div className="repairType__img">
                        <Image width={150} height={150} src="/laptop.png" alt="ремонт ноутбуков и компьютеров"/>
                    </div>
                    <h3 className="repairType__name">Ремонт компьютеров и ноутбуков</h3>
                </Link>
                <Link href={"/Remont-telefonov-i-planshetov"} className="repairType__item">
                    <div className="repairType__img">
                        <Image width={150} height={150} src="/server.png" alt="Ремонт телефонов и планшетов"/>
                    </div>
                    <h3 className="repairType__name">Ремонт телефонов и планшетов</h3>
                </Link>
                <Link href={"/Remont-televizorov-i-monitorov"} className="repairType__item">
                    <div className="repairType__img">
                        <Image width={150} height={150} src="/monitor.webp" alt="Ремонт телевизоров и мониторов"/>
                    </div>
                    <h3 className="repairType__name">Ремонт телевизоров и мониторов</h3>
                </Link>
               
            </div>
        </div>
    </div>
    )
}

export default RepairType;