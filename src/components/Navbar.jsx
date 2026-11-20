
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Accueil", path: "/" },
        { name: "Grammaire", path: "/grammaire" },
        { name: "Conjugaison", path: "/conjugaison" },
        { name: "Vocabulaire", path: "/vocabulaire" },
        { name: "Expression orale", path: "/expression-orale" },
        { name: "Expression écrite", path: "/expression-ecrite" },
        { name: "Exercices", path: "/exercices" },
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
                    <span className="logo-icon">M</span>
                    <span>
                        MAÎTRISE
                        <small>DU FRANÇAIS</small>
                    </span>
                </Link>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Ouvrir le menu"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/a-propos"
                        className="nav-about"
                        onClick={() => setMenuOpen(false)}
                    >
                        À propos <ChevronDown size={15} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
