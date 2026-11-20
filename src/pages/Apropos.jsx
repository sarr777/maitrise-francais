
import { Link } from "react-router-dom";

function Apropos() {
    return (
        <div className="about-page">
            <section className="learning-hero">
                <div className="learning-container">
                    <span className="section-label">QUI SOMMES-NOUS ?</span>
                    <h1>Une ambition : rendre la maîtrise du français accessible à tous.</h1>
                    <p>
                        Maîtrise du Français est une plateforme éducative consacrée
                        à l'apprentissage et au perfectionnement de la langue française.
                        Elle accompagne toutes les personnes qui souhaitent améliorer
                        leur manière de comprendre, d'écrire et de s'exprimer.
                    </p>
                </div>
            </section>

            <section className="learning-container about-content">
                <article className="about-block">
                    <span className="section-label">NOTRE RAISON D'ÊTRE</span>
                    <h2>La langue est un outil de connaissance et d'ouverture.</h2>
                    <p>
                        La maîtrise du français représente un atout important dans
                        le parcours scolaire, universitaire et professionnel. Elle
                        facilite l'accès au savoir, permet de mieux communiquer et
                        contribue à la construction d'une pensée structurée.
                    </p>
                    <p>
                        Pourtant, de nombreuses personnes rencontrent des difficultés
                        lorsqu'il s'agit de construire une phrase, de choisir le mot
                        approprié, de conjuguer correctement un verbe ou de prendre
                        la parole devant un public. Ces difficultés ne doivent pas
                        être considérées comme une fatalité. Avec des explications
                        adaptées et une pratique régulière, chacun peut progresser.
                    </p>
                </article>

                <article className="about-block">
                    <span className="section-label">NOTRE MISSION</span>
                    <h2>Apprendre, comprendre et mettre en pratique.</h2>
                    <p>
                        Notre mission est de proposer des ressources pédagogiques
                        organisées, accessibles et utiles. Nous souhaitons rendre
                        les règles de la langue plus compréhensibles et montrer
                        comment les appliquer dans des situations réelles.
                    </p>
                    <p>
                        La plateforme couvre plusieurs domaines complémentaires :
                        grammaire, conjugaison, vocabulaire, expression orale,
                        expression écrite et exercices. Chaque domaine contribue
                        à une maîtrise plus complète du français.
                    </p>
                </article>

                <div className="values-grid">
                    <div className="value-card">
                        <span>01</span>
                        <h3>Accessibilité</h3>
                        <p>Des explications compréhensibles, quel que soit le niveau de départ.</p>
                    </div>
                    <div className="value-card">
                        <span>02</span>
                        <h3>Rigueur</h3>
                        <p>Des règles expliquées avec précision et illustrées par des exemples.</p>
                    </div>
                    <div className="value-card">
                        <span>03</span>
                        <h3>Progression</h3>
                        <p>Un apprentissage organisé qui encourage la pratique régulière.</p>
                    </div>
                    <div className="value-card">
                        <span>04</span>
                        <h3>Autonomie</h3>
                        <p>Des ressources pour apprendre à son rythme et prendre confiance.</p>
                    </div>
                </div>

                <article className="about-block about-conclusion">
                    <span className="section-label">NOTRE CONVICTION</span>
                    <h2>Chaque progrès commence par la volonté d'apprendre.</h2>
                    <p>
                        Il n'est pas nécessaire de maîtriser parfaitement le français
                        pour commencer à progresser. Il suffit d'accepter d'apprendre,
                        de pratiquer et de corriger ses erreurs. Notre ambition est
                        de vous accompagner dans cette démarche, une notion et un
                        exercice à la fois.
                    </p>
                    <Link to="/grammaire" className="btn-primary">
                        Découvrir les cours →
                    </Link>
                </article>
            </section>
        </div>
    );
}

export default Apropos;
