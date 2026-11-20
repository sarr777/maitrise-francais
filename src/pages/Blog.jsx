
import { Link } from "react-router-dom";

const articles = [
    {
        category: "VOCABULAIRE",
        title: "Comment enrichir son vocabulaire et trouver les mots justes ?",
        description: "Des méthodes concrètes pour apprendre de nouveaux mots, comprendre leurs nuances et les intégrer naturellement dans votre expression.",
        date: "Conseil d'apprentissage",
        number: "01"
    },
    {
        category: "EXPRESSION ORALE",
        title: "Prendre la parole en public sans perdre ses moyens",
        description: "Découvrez comment préparer une intervention, structurer vos idées et développer progressivement votre assurance devant un auditoire.",
        date: "Communication",
        number: "02"
    },
    {
        category: "GRAMMAIRE",
        title: "Les erreurs de français les plus fréquentes à éviter",
        description: "Accords, homophones et conjugaison : apprenez à identifier les erreurs courantes et à améliorer la qualité de vos écrits.",
        date: "Langue française",
        number: "03"
    },
    {
        category: "EXPRESSION ÉCRITE",
        title: "Les clés pour rédiger un texte clair et convaincant",
        description: "De l'introduction à la conclusion, découvrez les principes qui donnent à une rédaction sa cohérence et sa force.",
        date: "Méthode de rédaction",
        number: "04"
    },
    {
        category: "APPRENTISSAGE",
        title: "Pourquoi la lecture régulière transforme-t-elle notre expression ?",
        description: "La lecture développe la compréhension, nourrit la réflexion et permet de découvrir des structures linguistiques variées.",
        date: "Culture générale",
        number: "05"
    },
    {
        category: "CONJUGAISON",
        title: "Passé composé et imparfait : comprendre enfin la différence",
        description: "Apprenez à distinguer ces deux temps essentiels à travers des explications simples et des situations concrètes.",
        date: "Grammaire pratique",
        number: "06"
    }
];

function Blog() {
    return (
        <div className="blog-page">
            <section className="learning-hero">
                <div className="learning-container">
                    <span className="section-label">LECTURE ET CONNAISSANCES</span>
                    <h1>Le français se découvre aussi par la lecture.</h1>
                    <p>
                        Retrouvez des conseils, des méthodes et des réflexions
                        pour approfondir votre connaissance de la langue française.
                        Chaque article vous apporte des pistes concrètes pour
                        progresser dans votre expression.
                    </p>
                </div>
            </section>

            <section className="blog-content learning-container">
                <div className="blog-intro">
                    <span className="section-label">NOS PUBLICATIONS</span>
                    <h2>Des ressources pour apprendre et progresser.</h2>
                    <p>
                        Prenez le temps de lire, de réfléchir et de mettre en pratique
                        les conseils proposés. L'apprentissage devient plus solide
                        lorsqu'il s'accompagne d'une démarche régulière.
                    </p>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <article className="blog-card" key={article.number}>
                            <div className="blog-card-number">{article.number}</div>
                            <span className="blog-category">{article.category}</span>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <div className="blog-card-bottom">
                                <span>{article.date}</span>
                                <Link to="/vocabulaire">Explorer →</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Blog;
