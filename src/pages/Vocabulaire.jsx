
import ContentPage from "../components/ContentPage";

function Vocabulaire() {
    return (
        <ContentPage
            eyebrow="ENRICHIR SON EXPRESSION"
            title="Trouver les mots justes pour exprimer des idées fortes."
            introduction="Un vocabulaire riche ne consiste pas à employer des mots compliqués à chaque phrase. Il consiste à disposer d'un répertoire suffisamment varié pour exprimer une pensée avec précision, nuance et naturel."
            advice="Apprenez cinq mots par jour, mais surtout utilisez-les dans des phrases et des conversations."
            sections={[
                {
                    heading: "Pourquoi enrichir son vocabulaire ?",
                    paragraphs: [
                        "Les mots sont les instruments de notre pensée. Plus notre vocabulaire est précis, plus nous sommes capables de décrire une situation, de défendre une opinion et de transmettre une émotion.",
                        "Un vocabulaire développé facilite également la compréhension des textes, des conférences, des cours et des échanges professionnels. Il permet d'éviter les répétitions et de choisir une formulation adaptée à chaque contexte."
                    ]
                },
                {
                    heading: "Les mots pour exprimer une opinion",
                    paragraphs: [
                        "Pour présenter un point de vue, il est utile de connaître plusieurs verbes et expressions qui permettent de nuancer son discours."
                    ],
                    examples: [
                        "Estimer : considérer quelque chose comme vrai ou important.",
                        "Considérer : examiner une question sous un certain angle.",
                        "Soutenir : défendre une idée ou une position.",
                        "Nuancer : apporter des distinctions à une affirmation.",
                        "Contester : exprimer un désaccord argumenté."
                    ]
                },
                {
                    heading: "Les mots pour décrire une personne",
                    paragraphs: [
                        "Les adjectifs permettent de décrire le caractère, le comportement ou les qualités d'une personne. Il convient de les choisir selon le contexte et le sens recherché."
                    ],
                    examples: [
                        "Persévérant : qui poursuit ses efforts malgré les difficultés.",
                        "Bienveillant : qui manifeste de la gentillesse et de l'attention.",
                        "Rigoureux : qui agit avec méthode et précision.",
                        "Perspicace : qui comprend rapidement les situations.",
                        "Éloquent : qui s'exprime avec facilité et efficacité.",
                        "Intègre : qui agit avec honnêteté et droiture."
                    ]
                },
                {
                    heading: "Les expressions pour organiser un discours",
                    paragraphs: [
                        "Les connecteurs logiques assurent la progression d'un texte ou d'une intervention orale. Ils indiquent les relations entre les idées et aident le lecteur à suivre le raisonnement."
                    ],
                    bullets: [
                        "Pour commencer : tout d'abord, en premier lieu, avant toute chose.",
                        "Pour ajouter : de plus, par ailleurs, en outre.",
                        "Pour expliquer : en effet, autrement dit, cela signifie que.",
                        "Pour opposer : cependant, néanmoins, en revanche.",
                        "Pour illustrer : par exemple, notamment, à titre d'illustration.",
                        "Pour conclure : en somme, finalement, pour conclure."
                    ]
                },
                {
                    heading: "Remplacer les expressions trop répétitives",
                    paragraphs: [
                        "La répétition excessive des mêmes mots peut rendre un texte monotone. Il ne faut toutefois pas remplacer chaque mot par un synonyme sans vérifier le sens : deux mots proches ne sont pas toujours interchangeables."
                    ],
                    examples: [
                        "Important : essentiel, majeur, déterminant, considérable.",
                        "Dire : déclarer, expliquer, affirmer, préciser, annoncer.",
                        "Faire : réaliser, accomplir, effectuer, élaborer.",
                        "Beau : remarquable, élégant, harmonieux, admirable.",
                        "Aider : accompagner, soutenir, assister, épauler."
                    ]
                },
                {
                    heading: "Le vocabulaire soutenu et ses usages",
                    paragraphs: [
                        "Le registre soutenu s'emploie notamment dans certains discours, textes littéraires et communications formelles. Il demande une bonne connaissance du sens des mots et de leur contexte.",
                        "L'objectif n'est pas de paraître compliqué. Une expression élégante est avant tout une expression juste, naturelle et adaptée à son interlocuteur."
                    ],
                    examples: [
                        "« Je ne comprends pas » peut devenir « Je ne saisis pas pleinement cette idée ».",
                        "« C'est très important » peut devenir « Cet élément revêt une importance particulière ».",
                        "« Il a beaucoup progressé » peut devenir « Il a accompli des progrès remarquables »."
                    ]
                },
                {
                    heading: "Comment mémoriser durablement les mots ?",
                    paragraphs: [
                        "Un mot appris sans être utilisé est rapidement oublié. Pour l'intégrer à votre vocabulaire actif, associez-le à une définition, à un exemple personnel et à une situation concrète."
                    ],
                    bullets: [
                        "Tenez un carnet de vocabulaire.",
                        "Notez une définition simple pour chaque mot.",
                        "Cherchez des synonymes et des antonymes.",
                        "Construisez deux phrases personnelles.",
                        "Réutilisez le mot à l'oral et à l'écrit."
                    ]
                }
            ]}
        />
    );
}

export default Vocabulaire;
