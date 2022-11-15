import Link from "next/link";

let DropMenuItem = ({id, name, setNavClassState}) => {

    return(
        <li className="drop-menu__item" onClick={() => {setNavClassState(false)}}><Link className="drop-menu__link" href={`/${id}`}>{name}</Link></li>
    )
}

export default DropMenuItem;