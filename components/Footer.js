import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="text-center">
                    <div className="mt-4 mb-4">
                        <Link href="/about-us"><a>Tentang Kami</a></Link> | <Link href="/privacy-policy"><a>Kebijakan Privasi</a></Link>
                    </div>
                    <center><div style={{ "width": "90%" }}><hr /></div></center>
                    <div className="mt-4" style={{
                        "color": "grey"
                    }}><span>PT. Inovasi Aktif Indonesia</span> &copy; 2022</div>
                </div>
            </footer>
        </>
    )
}