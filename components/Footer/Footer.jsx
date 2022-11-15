import Link from "next/link";


let Footer = () => {

    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <ul className="footer__nav">
                    <li className="footer__nav-item"><Link href={"/"} className="footer__nav-link">Главная</Link></li>
                    <li className="footer__nav-item"><Link href={"/singUp"} className="footer__nav-link">Записаться</Link></li>
                    <li className="footer__nav-item"><Link href={"/contacts"} className="footer__nav-link">Контакты</Link></li>
                </ul>
                <div className="footer__logo">Edit Service</div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;