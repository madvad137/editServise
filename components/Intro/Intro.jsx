import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Link from 'next/link';


let Intro = () => {

    
    return (
        <div className="intro">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
    >
                <SwiperSlide><div className="intro__slick-container">
                        <div className="intro__item">
                            <div className="intro__info">
                                <h1 className="intro__title">Ремонт техники в Армавире</h1>
                                <p className="intro__text">Вам требуется ремонт телефона в Армавире? Нет ничего проще. Сервисный центр PcFix предлагает ремонт телефонов в Армавире по привлекательной цене. Мы работаем с физическими и юридическим лицами. Предоставляем гарантию на все работы, запчасти и комплектующие.</p>
                                <Link href={"/singUp"} className="intro__btn">Записаться</Link>
                            </div>
                                <div className="intro__img">
                                    <img width={460} height={350} src="/intro1.jpg" alt="Ремонт техники в Армавире"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="intro__slick-container">
                        <div className="intro__item">
                            <div className="intro__info">
                                <h2 className="intro__title">Качество выполняемых работ</h2>
                                <p className="intro__text">Все работы производится на современном импортном оборудовании, используются специальные инструменты. Ремонт телефонов в Армавире и прочей техники осуществляют мастера с профильным образованием и большим опытом работы.</p>
                                <Link href={"/singUp"} className="intro__btn">Записаться</Link>
                            </div>
                                <div className="intro__img">
                                <img width={460} height={350} src="/intro1.jpg" alt="Качество выполняемых работ"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="intro__slick-container">
                        <div className="intro__item">
                            <div className="intro__info">
                                <h2 className="intro__title">Большой спектр услуг</h2>
                                <p className="intro__text">В сервисном центре можно заказать ремонт компьютера, ноутбука, телевизора, монитора. Мастера готовы выполнить комплексную чистку системы охлаждения у ноутбука и ПК. Произвести замену термопасты, оперативной памяти, жесткого диска, клавиатуры, аккумулятора, матрицы и других комплектующих. </p>
                                <Link href={"/singUp"} className="intro__btn">Записаться</Link>
                            </div>
                                <div className="intro__img">
                                <img width={460} height={350} src="/intro1.jpg" alt="Большой спектр услуг"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
              
    )
}

export default Intro;
