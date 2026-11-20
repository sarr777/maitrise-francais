
import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        sujet: "",
        message: ""
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const destination = "contact@maitrisedufrancais.com";
        const subject = encodeURIComponent(form.sujet);
        const body = encodeURIComponent(
            `Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`
        );

        window.location.href =
            `mailto:${destination}?subject=${subject}&body=${body}`;
    }

    return (
        <div className="contact-page">
            <section className="learning-hero">
                <div className="learning-container">
                    <span className="section-label">RESTONS EN CONTACT</span>
                    <h1>Une question ? Échangeons ensemble.</h1>
                    <p>
                        Vous souhaitez obtenir des informations sur la plateforme,
                        partager une suggestion ou poser une question sur nos
                        ressources pédagogiques ? Nous serons heureux de découvrir
                        votre message.
                    </p>
                </div>
            </section>

            <section className="learning-container contact-content">
                <div className="contact-info">
                    <span className="section-label">NOUS ÉCRIRE</span>
                    <h2>Votre avis contribue à améliorer cette plateforme.</h2>
                    <p>
                        Les remarques, les questions et les propositions sont
                        importantes pour faire évoluer les ressources et rendre
                        l'apprentissage du français toujours plus accessible.
                    </p>

                    <div className="contact-info-card">
                        <span>Notre adresse électronique</span>
                        <strong>contact@maitrisedufrancais.com</strong>
                        <small>Adresse provisoire à remplacer par votre adresse réelle.</small>
                    </div>

                    <div className="contact-info-card">
                        <span>Notre engagement</span>
                        <strong>Écoute et amélioration continue</strong>
                        <small>Vos suggestions sont les bienvenues.</small>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Envoyer un message</h2>

                    <label htmlFor="nom">Nom complet</label>
                    <input
                        id="nom"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                    />

                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="exemple@email.com"
                        required
                    />

                    <label htmlFor="sujet">Sujet du message</label>
                    <input
                        id="sujet"
                        name="sujet"
                        value={form.sujet}
                        onChange={handleChange}
                        placeholder="Objet de votre message"
                        required
                    />

                    <label htmlFor="message">Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Écrivez votre message ici..."
                        required
                    />

                    <button type="submit" className="btn-primary">
                        Préparer mon message →
                    </button>

                    <p className="form-note">
                        Ce formulaire ouvre votre logiciel de messagerie. Il ne
                        transmet pas directement les messages à un serveur.
                    </p>
                </form>
            </section>
        </div>
    );
}

export default Contact;
