
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="not-found">
            <span>404</span>
            <h1>Cette page est introuvable.</h1>
            <p>
                L'adresse demandée ne correspond à aucune page de notre plateforme.
                Vous pouvez revenir à l'accueil et poursuivre votre apprentissage.
            </p>
            <Link to="/" className="btn-primary">
                Retourner à l'accueil →
            </Link>
        </section>
    );
}

export default NotFound;
