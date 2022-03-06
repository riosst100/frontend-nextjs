import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <header id="header" className="bg-main fixed-top header-inner-pages">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto" style={{ "fontSize": "20px" }}>
                        <Link href="/">
                            <a>IA
                                <span style={
                                    {
                                        "paddingLeft": "7px",
                                        "textAlign": "right",
                                        "paddingTop": "5px",
                                        "fontSize": "14px",
                                        "opacity": "0.8",
                                    }
                                }>App</span>
                            </a>
                        </Link>
                    </h1>
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header;