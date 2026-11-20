
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            MAÎTRISE <span>DU FRANÇAIS</span>
                        </Link>
                        <p>
                            La maîtrise d'une langue ne se limite pas à connaître
                            ses règles. Elle consiste à penser avec clarté, à écrire
                            avec précision et à s'exprimer avec assurance.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Apprendre</h3>
                        <Link to="/grammaire">Grammaire</Link>
                        <Link to="/conjugaison">Conjugaison</Link>
                        <Link to="/vocabulaire">Vocabulaire</Link>
                        <Link to="/exercices">Exercices</Link>
                    </div>

                    <div className="footer-column">
                        <h3>S'exprimer</h3>
                        <Link to="/expression-orale">Expression orale</Link>
                        <Link to="/expression-ecrite">Expression écrite</Link>
                        <Link to="/blog">Conseils et articles</Link>
                        <Link to="/a-propos">À propos</Link>
                    </div>

                    <div className="footer-column">
                        <h3>Notre ambition</h3>
                        <p>
                            Vous accompagner vers un français plus juste,
                            plus riche et plus naturel, quel que soit votre niveau.
                        </p>
                        <Link to="/contact" className="footer-contact">
                            Nous contacter →
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Maîtrise du Français. Tous droits réservés.</p>
                    <p>Apprendre aujourd'hui, s'exprimer mieux demain.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
