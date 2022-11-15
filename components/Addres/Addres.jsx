import Image from 'next/image';

let Addres = () => {
    return(
        <div className="addres">
            <div className="addres__inner">
                <div className="addres__map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9c0fa5c247ce45ce63a634127298771c115f2af38ed31e3e749e1f30266e578&amp;source=constructor" width="100%" height="350" ></iframe>
                </div>
                <div className="addres__info">
                    <div className="addres__info-title">Сервисный центр <br />
                        расположен по адресу:
                    </div>
                    <div className="addres__info-item">
                        <div className="addres__info-img">
                            <Image width={40} height={40} src="/svg.svg" alt="аддрес" />
                        </div>
                        <div className="addres__info-text">Г. Армавир Володарского 120 офис 209</div>
                    </div>
                    <div className="addres__info-item">
                        <div className="addres__info-img">
                            <Image width={40} height={40} src="/svg.svg" alt="номер телефона" />
                        </div>
                        <div className="addres__info-text">+7 (967) 555-16-16</div>
                    </div>
                    <div className="addres__info-item">
                        <div className="addres__info-img">
                            <Image width={40} height={40} src="/svg.svg" alt="mail" />
                        </div>
                        <div className="addres__info-text">Editservicearmavir@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addres;