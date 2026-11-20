
import ContentPage from "../components/ContentPage";

function Conjugaison() {
    return (
        <ContentPage
            eyebrow="MAÎTRISER LES TEMPS VERBAUX"
            title="Conjuguer correctement pour exprimer ses idées avec précision."
            introduction="La conjugaison permet de situer une action dans le temps, d'exprimer une intention, une possibilité, un ordre ou une hypothèse. Elle constitue une compétence essentielle pour parler et écrire un français correct."
            advice="Choisissez un verbe courant, conjuguez-le à plusieurs temps et créez une phrase personnelle pour chaque forme."
            sections={[
                {
                    heading: "Comprendre la conjugaison",
                    paragraphs: [
                        "Conjuguer un verbe consiste à modifier sa forme selon le sujet, le temps et le mode. Le verbe permet ainsi de savoir qui agit, à quel moment se déroule l'action et quelle attitude le locuteur adopte à son égard.",
                        "Les verbes français sont traditionnellement répartis en trois groupes. Le premier groupe rassemble les verbes en -er, à l'exception d'aller. Le deuxième regroupe notamment les verbes en -ir qui font leur participe présent en -issant. Le troisième comprend les autres verbes, souvent irréguliers."
                    ],
                    examples: [
                        "Premier groupe : parler, aimer, travailler.",
                        "Deuxième groupe : finir, choisir, réussir.",
                        "Troisième groupe : prendre, venir, faire, aller."
                    ]
                },
                {
                    heading: "Le présent de l'indicatif",
                    paragraphs: [
                        "Le présent sert à exprimer une action actuelle, une habitude ou une vérité générale. Il est indispensable dans la communication quotidienne."
                    ],
                    examples: [
                        "Je parle français avec mes camarades.",
                        "Nous apprenons une nouvelle règle.",
                        "L'eau bout à cent degrés dans les conditions normales de pression."
                    ]
                },
                {
                    heading: "Le passé composé",
                    paragraphs: [
                        "Le passé composé exprime généralement une action achevée dans le passé. Il se forme avec l'auxiliaire avoir ou être au présent, suivi du participe passé du verbe.",
                        "Avec l'auxiliaire être, le participe passé s'accorde généralement avec le sujet. Avec avoir, l'accord dépend notamment de la place du complément d'objet direct."
                    ],
                    examples: [
                        "J'ai terminé mon exercice.",
                        "Elle est arrivée à l'heure.",
                        "Les lettres que j'ai écrites sont sur la table."
                    ]
                },
                {
                    heading: "L'imparfait",
                    paragraphs: [
                        "L'imparfait sert à décrire une situation passée, une habitude ou une action en cours dans le passé. Il est souvent utilisé pour installer le décor d'un récit.",
                        "On le rencontre fréquemment avec le passé composé : l'imparfait décrit le contexte, tandis que le passé composé présente un événement précis."
                    ],
                    examples: [
                        "Lorsque j'étais enfant, je lisais beaucoup.",
                        "Il pleuvait lorsque le cours a commencé."
                    ]
                },
                {
                    heading: "Le futur simple",
                    paragraphs: [
                        "Le futur simple permet d'exprimer une action qui se réalisera plus tard. Il est particulièrement utile pour annoncer un projet, présenter une prévision ou exprimer une promesse."
                    ],
                    examples: [
                        "Demain, nous étudierons la conjugaison.",
                        "Tu progresseras avec de la pratique.",
                        "Ils participeront à la prochaine rencontre."
                    ]
                },
                {
                    heading: "Le conditionnel présent",
                    paragraphs: [
                        "Le conditionnel présent permet d'exprimer une éventualité, un souhait, un conseil ou une demande formulée avec politesse. Il intervient également dans les phrases exprimant une hypothèse."
                    ],
                    examples: [
                        "Je voudrais améliorer mon expression.",
                        "Tu pourrais relire ton texte.",
                        "Si j'avais plus de temps, je lirais davantage."
                    ]
                },
                {
                    heading: "L'impératif",
                    paragraphs: [
                        "L'impératif sert à donner un ordre, formuler un conseil, exprimer une consigne ou inviter quelqu'un à agir. Il se conjugue principalement à la deuxième personne du singulier, à la première personne du pluriel et à la deuxième personne du pluriel."
                    ],
                    examples: [
                        "Lis attentivement la consigne.",
                        "Apprenons une nouvelle règle.",
                        "Prenez le temps de vous relire."
                    ]
                },
                {
                    heading: "Une méthode pour progresser",
                    paragraphs: [
                        "La conjugaison devient plus facile lorsqu'on comprend l'emploi des temps au lieu de mémoriser uniquement des tableaux. Commencez par les verbes fréquents, puis comparez les temps qui expriment des situations proches."
                    ],
                    bullets: [
                        "Apprenez chaque jour quelques verbes fréquents.",
                        "Travaillez les auxiliaires être et avoir.",
                        "Comparez le passé composé et l'imparfait.",
                        "Écrivez des phrases personnelles à plusieurs temps.",
                        "Relisez vos productions pour repérer les erreurs."
                    ]
                }
            ]}
        />
    );
}

export default Conjugaison;
