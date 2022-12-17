import Link from "next/link";
import { useState } from "react";
import DropMenuItem from "./DropMenuItem/DropMenuItem";

let Header = () => {
    const [ulClassState, setUlClassState] = useState(false);
    const [navClassState, setNavClassState] = useState(false);
    return(
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">PcFix</div>
                <div className="header__burger" onClick={() => {setNavClassState(!navClassState)}}><span></span> <span></span> <span></span></div>
                <nav className={navClassState === true ? 'nav nav-active':'nav'}>
                    <ul className="nav__list">
                        <li className="nav__item" onClick={() => {setNavClassState(false)}}><Link className="nav__item-link" href={"/"}>главная</Link></li>
                        <li className="nav__item" onClick={(e) =>{setUlClassState(!ulClassState)}}><span className="nav__item-link nav__item-link-drop"><span>услуги </span> 
                            <span className="nav__item-arrow">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" fill="#555" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                            </span></span>
                            <ul className={ulClassState === true ? 'drop-menu drop-menu-active':'drop-menu'}>
                                <DropMenuItem setNavClassState={setNavClassState} id ='Remont-televizorov-i-monitorov' name='Ремонт телевизоров и мониторов' key ='1'/>
                                <DropMenuItem setNavClassState={setNavClassState} id ='Remont-telefonov-i-planshetov' name='Ремонт телефонов и планшетов' key ='2'/>
                                <DropMenuItem setNavClassState={setNavClassState} id ='Remont-noutbukov-i-komputerov' name='Ремонт ноутбуков и компьютеров' key ='3'/>
                            </ul>
                        </li>
                        <li className="nav__item" onClick={() => {setNavClassState(false)}}><Link  href={"/singUp"} className="nav__item-link">записаться</Link></li>
                        <li className="nav__item" onClick={() => {setNavClassState(false)}}><Link  href={"/contacts"} className="nav__item-link" >контакты</Link></li>
                        <li className="nav__item"><a href='tel:+79675551616' className="nav__item-link">+7 (967) 555-16-16</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}



export default Header;