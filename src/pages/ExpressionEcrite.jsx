
import ContentPage from "../components/ContentPage";

function ExpressionEcrite() {
    return (
        <ContentPage
            eyebrow="ÉCRIRE AVEC CLARTÉ ET PRÉCISION"
            title="Construire des textes cohérents, structurés et agréables à lire."
            introduction="L'expression écrite permet de transmettre une pensée de manière durable et organisée. Un texte de qualité se distingue par la pertinence de son contenu, la précision de son vocabulaire, la cohérence de son organisation et le respect des règles linguistiques."
            advice="Rédigez régulièrement de courts textes, relisez-les à voix haute et corrigez une catégorie d'erreurs à la fois."
            sections={[
                {
                    heading: "Les bases d'une bonne rédaction",
                    paragraphs: [
                        "Bien écrire commence par une idée claire. Avant de rédiger, il faut déterminer le sujet, comprendre la consigne et identifier le message que l'on souhaite transmettre.",
                        "Un texte efficace ne se mesure pas uniquement à sa longueur. Il doit apporter des informations utiles, suivre une progression logique et éviter les développements qui éloignent le lecteur du sujet."
                    ]
                },
                {
                    heading: "Construire une introduction",
                    paragraphs: [
                        "L'introduction présente le sujet et prépare le lecteur à découvrir le contenu du texte. Elle doit être suffisamment précise pour situer le thème, sans développer immédiatement tous les arguments.",
                        "Dans un travail académique, elle peut présenter le contexte, formuler la problématique et annoncer les grandes parties du développement."
                    ],
                    examples: [
                        "Sujet : L'importance de la lecture.",
                        "Exemple : Dans une société où l'information circule rapidement, la capacité à lire et à comprendre demeure essentielle. La lecture contribue à la formation intellectuelle, enrichit le vocabulaire et développe l'esprit critique. Il convient donc d'examiner les différentes manières dont elle participe à l'épanouissement de l'individu."
                    ]
                },
                {
                    heading: "Développer ses arguments",
                    paragraphs: [
                        "Le développement constitue le cœur du texte. Chaque paragraphe doit présenter une idée principale, l'expliquer et, lorsque cela est pertinent, l'illustrer par un exemple.",
                        "Un paragraphe ne doit pas accumuler des affirmations sans lien. Les connecteurs logiques permettent d'assurer la continuité du raisonnement et d'indiquer les relations entre les idées."
                    ],
                    examples: [
                        "Idée : La lecture enrichit le vocabulaire.",
                        "Explication : Elle expose régulièrement le lecteur à des mots et à des constructions variés.",
                        "Exemple : La découverte de nouveaux termes dans un roman peut ensuite être réinvestie dans une rédaction."
                    ]
                },
                {
                    heading: "Rédiger une conclusion",
                    paragraphs: [
                        "La conclusion rassemble les enseignements essentiels du texte. Elle apporte une réponse à la question posée et permet au lecteur de retenir le message principal.",
                        "Évitez d'introduire un argument majeur qui n'a pas été développé auparavant. Une conclusion efficace reste cohérente avec l'ensemble de la rédaction."
                    ]
                },
                {
                    heading: "La cohérence et les connecteurs logiques",
                    paragraphs: [
                        "La cohérence signifie que les idées s'enchaînent de façon compréhensible. Les connecteurs jouent un rôle essentiel dans cette organisation."
                    ],
                    bullets: [
                        "Addition : de plus, également, en outre.",
                        "Cause : parce que, puisque, en raison de.",
                        "Conséquence : ainsi, par conséquent, dès lors.",
                        "Opposition : toutefois, néanmoins, en revanche.",
                        "Illustration : notamment, par exemple, en particulier.",
                        "Conclusion : en définitive, en somme, pour conclure."
                    ]
                },
                {
                    heading: "Écrire dans un registre adapté",
                    paragraphs: [
                        "Le choix du registre dépend du destinataire, du sujet et de la situation. Un message adressé à un ami n'obéit pas aux mêmes conventions qu'une lettre de motivation, un rapport universitaire ou un courrier administratif.",
                        "Dans un contexte professionnel, privilégiez les formulations précises, la politesse, les phrases structurées et un vocabulaire adapté. Évitez les abréviations et les expressions trop familières."
                    ]
                },
                {
                    heading: "Se relire et corriger ses textes",
                    paragraphs: [
                        "La relecture fait partie intégrante de la rédaction. Elle permet de repérer les fautes, mais aussi les phrases ambiguës, les répétitions et les passages qui manquent de précision."
                    ],
                    bullets: [
                        "Vérifiez les accords entre les sujets et les verbes.",
                        "Contrôlez le genre et le nombre des noms et des adjectifs.",
                        "Vérifiez la conjugaison des verbes.",
                        "Repérez les répétitions inutiles.",
                        "Assurez-vous que chaque paragraphe développe une idée identifiable.",
                        "Vérifiez la ponctuation et les accents."
                    ]
                }
            ]}
        />
    );
}

export default ExpressionEcrite;
