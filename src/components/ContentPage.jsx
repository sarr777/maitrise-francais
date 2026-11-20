
import { Link } from "react-router-dom";

function ContentPage({ eyebrow, title, introduction, sections, advice }) {
    return (
        <div className="learning-page">
            <section className="learning-hero">
                <div className="learning-container">
                    <span className="section-label">{eyebrow}</span>
                    <h1>{title}</h1>
                    <p>{introduction}</p>
                    <Link to="/exercices" className="btn-primary">
                        Mettre mes connaissances en pratique →
                    </Link>
                </div>
            </section>

            <div className="learning-container learning-layout">
                <main className="learning-content">
                    {sections.map((section, index) => (
                        <article className="lesson-section" key={index}>
                            <span className="lesson-number">
                                LEÇON {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2>{section.heading}</h2>

                            {section.paragraphs?.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}

                            {section.examples && (
                                <div className="example-box">
                                    <strong>Exemples :</strong>
                                    {section.examples.map((example, i) => (
                                        <p key={i}>{example}</p>
                                    ))}
                                </div>
                            )}

                            {section.bullets && (
                                <ul className="lesson-list">
                                    {section.bullets.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </main>

                <aside className="learning-sidebar">
                    <div className="advice-card">
                        <span>CONSEIL D'APPRENTISSAGE</span>
                        <h3>Apprenez avec régularité.</h3>
                        <p>{advice}</p>
                        <Link to="/exercices">Faire des exercices →</Link>
                    </div>

                    <div className="sidebar-links">
                        <h3>Continuer à apprendre</h3>
                        <Link to="/grammaire">Grammaire</Link>
                        <Link to="/conjugaison">Conjugaison</Link>
                        <Link to="/vocabulaire">Vocabulaire</Link>
                        <Link to="/expression-orale">Expression orale</Link>
                        <Link to="/expression-ecrite">Expression écrite</Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default ContentPage;
