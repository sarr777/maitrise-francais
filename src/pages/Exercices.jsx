
import { useState } from "react";

const questions = [
    {
        category: "Grammaire",
        question: "Quelle phrase est correctement écrite ?",
        answers: [
            "Les étudiant travaille sérieusement.",
            "Les étudiants travaillent sérieusement.",
            "Les étudiants travail sérieusement."
        ],
        correct: 1,
        explanation: "Le sujet « les étudiants » est au pluriel. Le verbe doit donc être conjugué à la troisième personne du pluriel : travaillent."
    },
    {
        category: "Conjugaison",
        question: "Complétez : Hier, nous _____ au marché.",
        answers: ["allons", "irons", "sommes allés"],
        correct: 2,
        explanation: "L'expression « hier » indique un événement passé. Le passé composé convient ici : nous sommes allés."
    },
    {
        category: "Vocabulaire",
        question: "Quel mot signifie « qui persévère malgré les difficultés » ?",
        answers: ["Persévérant", "Indifférent", "Hésitant"],
        correct: 0,
        explanation: "Une personne persévérante poursuit ses efforts malgré les obstacles."
    },
    {
        category: "Orthographe",
        question: "Complétez : Il _____ beaucoup de courage.",
        answers: ["à", "a", "as"],
        correct: 1,
        explanation: "« A » est le verbe avoir au présent. On peut le remplacer par « avait » : il avait beaucoup de courage."
    },
    {
        category: "Expression",
        question: "Quel connecteur introduit généralement une conséquence ?",
        answers: ["Cependant", "Par conséquent", "Néanmoins"],
        correct: 1,
        explanation: "« Par conséquent » annonce une conséquence. « Cependant » et « néanmoins » expriment plutôt une opposition ou une réserve."
    },
    {
        category: "Grammaire",
        question: "Quel est le verbe dans la phrase : « Les enfants lisent un roman » ?",
        answers: ["Enfants", "Roman", "Lisent"],
        correct: 2,
        explanation: "« Lisent » est le verbe conjugué. Il exprime l'action accomplie par le sujet « les enfants »."
    }
];

function Exercices() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [finished, setFinished] = useState(false);

    const question = questions[current];
    const score = answers.filter(
        (answer, index) => answer === questions[index].correct
    ).length;

    function validate() {
        if (selected === null) return;

        const updated = [...answers];
        updated[current] = selected;
        setAnswers(updated);

        if (current === questions.length - 1) {
            setFinished(true);
        } else {
            setCurrent(current + 1);
            setSelected(null);
        }
    }

    function restart() {
        setCurrent(0);
        setSelected(null);
        setAnswers([]);
        setFinished(false);
    }

    return (
        <div className="exercise-page">
            <section className="learning-hero">
                <div className="learning-container">
                    <span className="section-label">APPRENDRE EN PRATIQUANT</span>
                    <h1>Testez vos connaissances en français.</h1>
                    <p>
                        La pratique permet de transformer les connaissances en
                        véritables compétences. Répondez aux questions, découvrez
                        vos erreurs et prenez le temps de comprendre chaque correction.
                    </p>
                </div>
            </section>

            <section className="exercise-area">
                <div className="exercise-card">
                    {!finished ? (
                        <>
                            <div className="exercise-top">
                                <span>{question.category}</span>
                                <span>Question {current + 1} / {questions.length}</span>
                            </div>

                            <div className="progress-track">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>

                            <h2>{question.question}</h2>

                            <div className="answer-list">
                                {question.answers.map((answer, index) => (
                                    <button
                                        key={index}
                                        className={`answer-option ${selected === index ? "selected" : ""}`}
                                        onClick={() => setSelected(index)}
                                    >
                                        <span className="answer-letter">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        {answer}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="btn-primary exercise-submit"
                                onClick={validate}
                                disabled={selected === null}
                            >
                                {current === questions.length - 1 ? "Voir mon résultat" : "Valider et continuer"}
                            </button>
                        </>
                    ) : (
                        <div className="exercise-result">
                            <span className="section-label">VOTRE ÉVALUATION</span>
                            <h2>Votre série est terminée !</h2>
                            <div className="score-circle">
                                {score}<span>/{questions.length}</span>
                            </div>
                            <p>
                                {score === questions.length
                                    ? "Excellent travail ! Toutes vos réponses sont correctes."
                                    : score >= 4
                                        ? "Très bon résultat. Continuez à pratiquer pour consolider vos acquis."
                                        : "Chaque erreur est une occasion d'apprendre. Relisez les corrections et recommencez."}
                            </p>

                            <div className="correction-list">
                                {questions.map((item, index) => (
                                    <div className="correction-item" key={index}>
                                        <strong>
                                            {index + 1}. {item.category}
                                            {answers[index] === item.correct ? " — Bonne réponse" : " — À revoir"}
                                        </strong>
                                        <p>{item.question}</p>
                                        <p className="correct-answer">
                                            Réponse : {item.answers[item.correct]}
                                        </p>
                                        <p>{item.explanation}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="btn-primary" onClick={restart}>
                                Recommencer les exercices
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Exercices;
