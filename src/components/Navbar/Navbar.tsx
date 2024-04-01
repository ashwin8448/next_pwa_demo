import Link from "next/link"

const Navbar = () => {
    const navLinks = ["QBurst", "Kazhakuttom", "Trivandrum", "Kerala", "World"]
    return (
    <div>
        {navLinks.map((link)=><Link key={link} href={`/${link.toLowerCase()}`}>{link} </Link>)}
    </div>
  )
}

export default Navbar