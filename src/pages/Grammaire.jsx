
import ContentPage from "../components/ContentPage";

function Grammaire() {
    return (
        <ContentPage
            eyebrow="LES FONDAMENTAUX DE LA LANGUE"
            title="Comprendre la grammaire pour mieux construire ses phrases."
            introduction="La grammaire est l'ensemble des règles qui organisent les mots et les phrases. Elle permet de transmettre une pensée de manière correcte, cohérente et compréhensible. La maîtriser, c'est donner à son expression une base solide."
            advice="Étudiez une règle à la fois. Après chaque explication, inventez vos propres phrases et vérifiez vos accords."
            sections={[
                {
                    heading: "Qu'est-ce que la grammaire française ?",
                    paragraphs: [
                        "La grammaire étudie la structure de la langue, la nature des mots et les relations qu'ils entretiennent dans une phrase. Elle nous apprend comment organiser les éléments d'un énoncé afin de produire un message clair et correct.",
                        "Une phrase bien construite ne repose pas uniquement sur le choix des mots. Elle exige également le respect des accords, des fonctions grammaticales et de l'ordre des éléments. Une bonne maîtrise de ces règles facilite aussi bien la rédaction que la prise de parole."
                    ],
                    examples: [
                        "Correct : Les étudiants sérieux préparent leurs examens.",
                        "Incorrect : Les étudiant sérieux prépare leurs examen."
                    ]
                },
                {
                    heading: "Les principales classes grammaticales",
                    paragraphs: [
                        "Les mots appartiennent à différentes classes grammaticales selon leur nature. Certaines catégories servent à désigner, d'autres à caractériser, à exprimer une action ou à établir une relation entre les éléments de la phrase."
                    ],
                    bullets: [
                        "Le nom : désigne une personne, un lieu, un objet ou une idée. Exemple : étudiant, école, liberté.",
                        "Le déterminant : accompagne le nom. Exemple : le, une, ces, mon.",
                        "L'adjectif : apporte une précision sur le nom. Exemple : une réponse pertinente.",
                        "Le verbe : exprime une action ou un état. Exemple : apprendre, devenir, sembler.",
                        "Le pronom : remplace un nom ou un groupe nominal. Exemple : il, nous, celui-ci.",
                        "L'adverbe : précise le sens d'un verbe, d'un adjectif ou d'un autre adverbe. Exemple : clairement, très.",
                        "La préposition : introduit un complément. Exemple : à, de, avec, pour.",
                        "La conjonction : relie des mots ou des propositions. Exemple : mais, parce que, lorsque."
                    ]
                },
                {
                    heading: "Le sujet et le verbe",
                    paragraphs: [
                        "Le sujet indique qui accomplit l'action ou de qui l'on parle. Le verbe exprime l'action ou l'état. Dans une phrase simple, le verbe s'accorde avec son sujet en personne et en nombre.",
                        "Pour identifier le sujet, on peut poser la question « qui est-ce qui ? » ou « qu'est-ce qui ? » avant le verbe. Cette méthode permet de vérifier l'accord, notamment lorsque le sujet est éloigné du verbe."
                    ],
                    examples: [
                        "L'étudiante révise chaque soir. → Qui révise ? L'étudiante.",
                        "Les professeurs expliquent la leçon. → Le sujet est pluriel, le verbe aussi."
                    ]
                },
                {
                    heading: "Les accords en genre et en nombre",
                    paragraphs: [
                        "En français, le nom possède généralement un genre, masculin ou féminin, et un nombre, singulier ou pluriel. Les déterminants et les adjectifs qui l'accompagnent doivent respecter ces caractéristiques.",
                        "L'accord est une source fréquente d'erreurs. Il faut donc identifier le nom principal avant de choisir la forme du déterminant ou de l'adjectif."
                    ],
                    examples: [
                        "Un étudiant motivé / Une étudiante motivée.",
                        "Des projets ambitieux / Des idées ambitieuses."
                    ]
                },
                {
                    heading: "Construire une phrase correcte",
                    paragraphs: [
                        "La phrase simple s'organise généralement autour d'un sujet et d'un verbe. Elle peut être enrichie par des compléments qui apportent des informations sur le lieu, le temps, la manière ou l'objet de l'action.",
                        "Pour améliorer la qualité d'une phrase, évitez les formulations inutilement longues. Une idée principale par phrase facilite la lecture et renforce la compréhension."
                    ],
                    examples: [
                        "Phrase simple : L'étudiant travaille.",
                        "Phrase enrichie : Chaque soir, l'étudiant travaille avec sérieux à la préparation de son examen."
                    ]
                },
                {
                    heading: "Les erreurs à éviter",
                    paragraphs: [
                        "Certaines erreurs reviennent régulièrement dans les écrits. Elles concernent notamment les accords, les homophones grammaticaux et la confusion entre des formes verbales proches."
                    ],
                    bullets: [
                        "a / à : « Il a un livre » et « Il va à l'école ».",
                        "et / est : « Le cours est intéressant et utile ».",
                        "son / sont : « Son travail est sérieux » et « Ils sont prêts ».",
                        "ces / ses : « Ces livres sont nouveaux » et « Elle range ses affaires ».",
                        "Infinitif ou participe passé : « Il faut travailler » mais « Il a travaillé »."
                    ]
                }
            ]}
        />
    );
}

export default Grammaire;
