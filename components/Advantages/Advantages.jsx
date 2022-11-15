import Image from 'next/image'

let Advantages = () => {
    return(
        <div className="advantages">
        <div className="container">
            <div className="advantages__inner">
                <div className="advantages__item">
                    <div className="advantages__img">
                        <Image width={63} height={63} src="/ad1.png" alt="Опытные мастера"/>
                    </div>
                    <div className="advantages__title">Опытные мастера</div>
                    <div className="advantages__text">Все наши мастера имеют образование и большой опыт работы инженерами.</div>
                </div>
                <div className="advantages__item">
                    <div className="advantages__img">
                        <Image width={63} height={63} src="/ad1.png" alt="Склад запчастей"/>
                    </div>
                    <div className="advantages__title">Склад запчастей</div>
                    <div className="advantages__text">Более 90% требуемых для ремонта запчастей есть на нашем складе.</div>
                </div>
                <div className="advantages__item">
                    <div className="advantages__img">
                        <Image width={63} height={63} src="/ad1.png" alt="Всегда с вами"/>
                    </div>
                    <div className="advantages__title">Всегда с вами</div>
                    <div className="advantages__text">Приём заявок ведётся ежедневно. Ни одна заявка не останется без внимания.</div>
                </div>
                <div className="advantages__item">
                    <div className="advantages__img">
                        <Image width={63} height={63} src="/ad1.png" alt="Доступные цены"/>
                    </div>
                    <div className="advantages__title">Цены</div>
                    <div className="advantages__text">Доступные цены на все виды ремонтных работ.</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Advantages;