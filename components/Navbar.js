import Link from "next/link"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactModal from 'react-modal'
import { useRouter } from "next/router";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const showMobileMenu = () => {
        setMobileMenu(true);
    }
    const closeMobileMenu = () => {
        setMobileMenu(false);
    }

    return (
        <>
            <div>
                <ReactModal
                    isOpen={mobileMenu}
                    contentLabel="onRequestClose Example"
                    onRequestClose={closeMobileMenu}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <>
                        <MenuList closeMobileMenu={closeMobileMenu} />
                    </>
                </ReactModal>
            </div>
            <nav id="navbar" className="navbar">
                <span style={{ "width": "20px", "marginRight": "5px" }}>
                    <FontAwesomeIcon icon="bars" onClick={showMobileMenu} />
                </span>
            </nav>
            <nav id="mobile_navbar" className="navbar navbar-mobile" style={
                {
                    "display": mobileMenu ? "block" : "none"
                }
            } onClick={closeMobileMenu}>

                <i className="bi mobile-nav-toggle bi-x" onClick={closeMobileMenu}></i>
            </nav>
        </>
    )
}

export function MenuList({ closeMobileMenu }) {
    return (
        <>
            <hr />
            <div style={
                {
                    "paddingLeft": "10px",
                    "paddingRight": "10px",
                    "marginBottom": "15px"
                }
            }>
                <table style={
                    {
                        "width": "100%"
                    }
                }>
                    <tbody>
                        <tr>
                            <td>
                                <MenuItem closeMobileMenu={closeMobileMenu} icon="home" label="Home" href="/" />
                            </td>
                            <td>
                                <MenuItem closeMobileMenu={closeMobileMenu} icon="user-lock" label="Admin Panel" href="/admin" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MenuItem closeMobileMenu={closeMobileMenu} icon="store" label="Bisnis" href="/business" />
                            </td>
                            <td>
                                <MenuItem closeMobileMenu={closeMobileMenu} icon="tshirt" label="Shop" href="/marketplace" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MenuItem closeMobileMenu={closeMobileMenu} icon="hamburger" label="Food Delivery" href="/delivery" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export function MenuItem({ icon, label, href, closeMobileMenu }) {
    const router = useRouter()
    const isActive = router.pathname === href ? true : false

    const noAction = () => {

    }

    return (
        <>
            <div className="col navbar-list-item-container" onClick={isActive ? closeMobileMenu : noAction}>
                <Link href={isActive ? '#' : href}>
                    <a className={isActive ? "navbar-list-item active" : "navbar-list-item"}>
                        <span className="icon">
                            <FontAwesomeIcon icon={icon} />
                        </span>
                        <div className="label">{label}</div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Navbar