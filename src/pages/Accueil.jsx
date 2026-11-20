
import { Link } from "react-router-dom";
import {
    BookOpen,
    GraduationCap,
    MessageCircle,
    PenTool,
    ArrowRight,
    CheckCircle,
    BookText,
    Lightbulb,
    Target,
    Globe
} from "lucide-react";

function Accueil() {
    const formations = [
        {
            icon: BookOpen,
            title: "Grammaire française",
            description:
                "Comprenez les règles fondamentales de la langue française. Apprenez à construire des phrases correctes, à maîtriser les accords et à éviter les erreurs les plus fréquentes.",
            link: "/grammaire",
            number: "01"
        },
        {
            icon: GraduationCap,
            title: "Conjugaison",
            description:
                "Découvrez les temps et les modes verbaux, comprenez leurs usages et apprenez à conjuguer correctement les verbes dans toutes les situations.",
            link: "/conjugaison",
            number: "02"
        },
        {
            icon: BookText,
            title: "Richesse du vocabulaire",
            description:
                "Développez votre répertoire lexical, découvrez des expressions précises et apprenez à choisir les mots justes pour exprimer vos idées.",
            link: "/vocabulaire",
            number: "03"
        },
        {
            icon: MessageCircle,
            title: "Expression orale",
            description:
                "Améliorez votre manière de parler, structurez vos interventions et apprenez à communiquer avec assurance, clarté et naturel.",
            link: "/expression-orale",
            number: "04"
        },
        {
            icon: PenTool,
            title: "Expression écrite",
            description:
                "Apprenez à rédiger des textes cohérents, à organiser vos idées et à produire des écrits précis, fluides et adaptés à chaque contexte.",
            link: "/expression-ecrite",
            number: "05"
        },
        {
            icon: Target,
            title: "Exercices pratiques",
            description:
                "Évaluez vos connaissances, mettez vos acquis en application et progressez grâce à des exercices accompagnés de corrections détaillées.",
            link: "/exercices",
            number: "06"
        }
    ];

    const avantages = [
        "Des leçons structurées et accessibles à tous les niveaux",
        "Des explications claires accompagnées d'exemples concrets",
        "Des exercices pour transformer la théorie en pratique",
        "Un apprentissage progressif à votre propre rythme"
    ];

    return (
        <div className="home-page">

            {/* HERO */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-label">
                            <span className="hero-dot"></span>
                            VOTRE ESPACE D'APPRENTISSAGE DU FRANÇAIS
                        </span>

                        <h1>
                            La maîtrise du français,
                            <span> une force pour votre avenir.</span>
                        </h1>

                        <p>
                            Bien s'exprimer est bien plus qu'une compétence linguistique :
                            c'est une manière de transmettre ses idées, de défendre ses
                            convictions et de saisir de nouvelles opportunités.
                            Découvrez une méthode d'apprentissage conçue pour enrichir
                            votre vocabulaire, perfectionner votre expression et vous
                            donner une véritable aisance en français.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/grammaire" className="btn-primary">
                                Commencer à apprendre <ArrowRight size={18} />
                            </Link>

                            <Link to="/a-propos" className="btn-secondary">
                                Découvrir la plateforme
                            </Link>
                        </div>

                        <div className="hero-note">
                            <CheckCircle size={17} />
                            Accessible à tous ceux qui souhaitent progresser.
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-frame">
                            <img
                                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
                                alt="Une personne qui étudie et prend des notes"
                            />
                        </div>

                        <div className="hero-floating-card">
                            <div className="floating-icon">
                                <BookOpen size={22} />
                            </div>
                            <div>
                                <strong>Apprendre chaque jour</strong>
                                <span>Un progrès à la fois.</span>
                            </div>
                        </div>

                        <div className="hero-decoration"></div>
                    </div>
                </div>

                <div className="hero-bottom-line"></div>
            </section>

            {/* INTRODUCTION */}
            <section className="intro-section">
                <div className="section-container intro-container">
                    <div className="intro-heading">
                        <span className="section-label">POURQUOI APPRENDRE ?</span>
                        <h2>
                            Les mots sont des outils.
                            <span> Apprenez à en faire une force.</span>
                        </h2>
                    </div>

                    <div className="intro-text">
                        <p>
                            Dans les études, dans le monde professionnel et dans la vie
                            quotidienne, la qualité de notre expression joue un rôle
                            essentiel. Savoir choisir ses mots, construire une phrase
                            avec précision et transmettre clairement une pensée permet
                            de mieux se faire comprendre et de gagner en crédibilité.
                        </p>

                        <p>
                            Pourtant, maîtriser le français ne consiste pas simplement
                            à mémoriser des règles grammaticales ou à apprendre des mots
                            difficiles. C'est un apprentissage qui demande de la pratique,
                            de la curiosité, de la régularité et surtout le désir de
                            progresser. C'est précisément dans cette démarche que
                            Maîtrise du Français souhaite vous accompagner.
                        </p>
                    </div>
                </div>
            </section>

            {/* FORMATIONS */}
            <section className="courses-section">
                <div className="section-container">
                    <div className="section-heading centered">
                        <span className="section-label">NOS DOMAINES D'APPRENTISSAGE</span>
                        <h2>
                            Construisez votre maîtrise
                            <span> du français étape par étape.</span>
                        </h2>
                        <p>
                            Explorez nos différentes disciplines et développez les
                            compétences nécessaires pour comprendre, écrire et parler
                            le français avec davantage de justesse.
                        </p>
                    </div>

                    <div className="courses-grid">
                        {formations.map((formation) => {
                            const Icon = formation.icon;

                            return (
                                <article className="course-card" key={formation.number}>
                                    <div className="course-card-top">
                                        <div className="course-icon">
                                            <Icon size={25} />
                                        </div>
                                        <span className="course-number">{formation.number}</span>
                                    </div>

                                    <h3>{formation.title}</h3>
                                    <p>{formation.description}</p>

                                    <Link to={formation.link} className="course-link">
                                        Découvrir le cours <ArrowRight size={17} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* METHODE */}
            <section className="method-section">
                <div className="section-container method-container">
                    <div className="method-content">
                        <span className="section-label">NOTRE APPROCHE</span>
                        <h2>
                            Apprendre avec méthode.
                            <span> Progresser avec confiance.</span>
                        </h2>

                        <p>
                            Un apprentissage efficace repose sur une démarche claire :
                            comprendre une notion, observer son utilisation, s'exercer
                            et corriger ses erreurs. Chaque étape contribue à construire
                            des connaissances solides et durables.
                        </p>

                        <div className="advantages-list">
                            {avantages.map((avantage, index) => (
                                <div className="advantage-item" key={index}>
                                    <CheckCircle size={19} />
                                    <span>{avantage}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/a-propos" className="btn-primary">
                            En savoir plus <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="method-visual">
                        <div className="method-image">
                            <img
                                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85"
                                alt="Bibliothèque et livres"
                            />
                        </div>

                        <div className="method-quote">
                            <Lightbulb size={27} />
                            <p>
                                La progression naît de la régularité, de la pratique
                                et de la volonté de toujours mieux comprendre.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OBJECTIFS */}
            <section className="objectives-section">
                <div className="section-container">
                    <div className="section-heading centered">
                        <span className="section-label">VOTRE PROGRESSION</span>
                        <h2>Le français au service de vos ambitions.</h2>
                        <p>
                            Chaque compétence linguistique acquise devient un atout
                            pour vos études, votre carrière et vos relations.
                        </p>
                    </div>

                    <div className="objectives-grid">
                        <div className="objective-card">
                            <div className="objective-icon"><GraduationCap size={27} /></div>
                            <h3>Réussir ses études</h3>
                            <p>
                                Comprendre les cours, rédiger des travaux de qualité,
                                présenter ses idées et réussir ses évaluations.
                            </p>
                        </div>

                        <div className="objective-card">
                            <div className="objective-icon"><Globe size={27} /></div>
                            <h3>Évoluer professionnellement</h3>
                            <p>
                                Rédiger des courriels professionnels, participer aux
                                réunions et communiquer avec davantage de précision.
                            </p>
                        </div>

                        <div className="objective-card">
                            <div className="objective-icon"><MessageCircle size={27} /></div>
                            <h3>Gagner en aisance</h3>
                            <p>
                                Prendre la parole, développer ses arguments et exprimer
                                ses opinions de manière claire et structurée.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-container">
                    <span className="section-label">LE MOMENT DE COMMENCER</span>
                    <h2>
                        Votre progression commence
                        <span> avec un premier pas.</span>
                    </h2>
                    <p>
                        Ne laissez pas les difficultés linguistiques limiter vos
                        ambitions. Prenez le temps d'apprendre, exercez-vous
                        régulièrement et faites de la maîtrise du français
                        une véritable compétence.
                    </p>

                    <Link to="/exercices" className="btn-light">
                        Découvrir les exercices <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default Accueil;
