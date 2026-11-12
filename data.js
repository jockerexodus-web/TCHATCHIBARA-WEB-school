const schoolData = {
    seconde: [
        { 
            id: "maths-2nde",
            matiere: "Mathématiques", 
            desc: "Nombres, Calculs et Géométrie", 
            contenu: `
                <h2>CHAPITRE 1 : LES NOMBRES RÉELS</h2>
                <p><strong>1.1 Définition des ensembles de nombres</strong></p>
                <p>L'ensemble des nombres réels (noté ℝ) regroupe tous les nombres connus. Il contient les entiers naturels (ℕ : 0, 1, 2...), les entiers relatifs (ℤ : -3, -2, -1, 0, 1...), les nombres décimaux (ex: 3,14), les nombres rationnels (ℚ : fractions comme 5/3) et les nombres irrationnels (ex: √2, π).</p>
                <p><strong>1.2 Opérations et règles de calcul</strong></p>
                <p>Les opérations de base sont l'addition, la soustraction, la multiplication et la division. Attention à la règle des signes : le produit de deux nombres de même signe est positif, le produit de deux nombres de signes contraires est négatif. La multiplication est distributive sur l'addition : a(b+c) = ab + ac.</p>
                <p><strong>1.3 Les intervalles</strong></p>
                <p>Un intervalle est un ensemble continu de nombres. On note [a ; b] l'intervalle fermé (a et b inclus), ]a ; b[ l'intervalle ouvert (a et b exclus). La réunion (∪) et l'intersection (∩) permettent de combiner des intervalles.</p>
                <p><strong>1.4 Valeur absolue et distance</strong></p>
                <p>La valeur absolue d'un réel x, notée |x|, est égale à x si x est positif, et à -x si x est négatif. Sur une droite graduée, |x - y| représente la distance entre les points d'abscisses x et y.</p>
                <h2>CHAPITRE 2 : GÉOMÉTRIE PLANE</h2>
                <p><strong>2.1 Le triangle</strong></p>
                <p>Dans un triangle, la somme des angles est égale à 180°. Le théorème de Pythagore s'applique aux triangles rectangles : le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés (AB² = AC² + BC²).</p>
                <p><strong>2.2 Les vecteurs</strong></p>
                <p>Un vecteur est défini par une direction, un sens et une norme. La somme de deux vecteurs se fait graphiquement par la règle du parallélogramme. Deux vecteurs sont colinéaires s'ils ont la même direction.</p>
                <p><strong>2.3 Le repère orthonormé</strong></p>
                <p>Un repère orthonormé est formé de deux axes perpendiculaires de même unité. Les coordonnées d'un point M sont (x ; y). La distance entre deux points A(xA ; yA) et B(xB ; yB) se calcule par : AB = √((xB-xA)² + (yB-yA)²).</p>
            ` 
        },
        { 
            id: "physique-2nde",
            matiere: "Physique-Chimie", 
            desc: "Mécanique, Électricité et Chimie", 
            contenu: `
                <h2>CHAPITRE 1 : MÉCANIQUE - LE MOUVEMENT</h2>
                <p><strong>1.1 Notion de référentiel</strong></p>
                <p>Le mouvement est relatif : il dépend du référentiel choisi. Un référentiel est un solide auquel on associe un repère et une horloge. Le référentiel terrestre est utilisé pour les mouvements quotidiens, le référentiel géocentrique pour les satellites, et le référentiel héliocentrique pour les planètes.</p>
                <p><strong>1.2 Vitesse et trajectoire</strong></p>
                <p>La trajectoire est l'ensemble des positions successives d'un mobile. Elle peut être rectiligne, circulaire ou curviligne. La vitesse moyenne est v = d/t, où d est la distance parcourue et t la durée. L'unité légale est le mètre par seconde (m/s). Pour convertir en km/h, on multiplie par 3,6.</p>
                <p><strong>1.3 Les forces</strong></p>
                <p>Une force est modélisée par un vecteur ayant un point d'application, une direction, un sens et une valeur en Newtons (N). Le poids P = m × g (g ≈ 9,8 N/kg sur Terre). La réaction normale du support et la force de frottement s'opposent souvent au mouvement.</p>
                <h2>CHAPITRE 2 : ÉLECTRICITÉ</h2>
                <p><strong>2.1 Le courant électrique</strong></p>
                <p>Le courant électrique est un déplacement de charges (électrons) dans un conducteur. L'intensité I se mesure en Ampères (A) avec un ampèremètre branché en série. La tension U se mesure en Volts (V) avec un voltmètre branché en dérivation.</p>
                <p><strong>2.2 La loi d'Ohm</strong></p>
                <p>Pour un conducteur ohmique, la tension est proportionnelle à l'intensité : U = R × I, où R est la résistance en Ohms (Ω).</p>
                <h2>CHAPITRE 3 : CHIMIE - L'ATOME</h2>
                <p>La matière est constituée d'atomes. Un atome possède un noyau (protons + neutrons) et des électrons qui tournent autour. Le numéro atomique Z correspond au nombre de protons. La masse atomique est concentrée dans le noyau.</p>
            ` 
        },
        { 
            id: "francais-2nde",
            matiere: "Français", 
            desc: "Narration, Théâtre et Poésie", 
            contenu: `
                <h2>CHAPITRE 1 : LE RÉCIT ET LA NARRATION</h2>
                <p><strong>1.1 Le schéma narratif</strong></p>
                <p>Tout récit structuré suit un schéma narratif en cinq étapes : la situation initiale (présentation des personnages et du cadre), l'élément perturbateur (un événement qui change la situation), les péripéties (les actions et rebondissements), le dénouement (la résolution du problème) et la situation finale (le nouvel équilibre).</p>
                <p><strong>1.2 Le narrateur</strong></p>
                <p>Le narrateur est celui qui raconte l'histoire. Il peut être interne (il est un personnage et raconte à la première personne), externe (il observe de l'extérieur à la troisième personne) ou omniscient (il connaît tout des pensées des personnages).</p>
                <p><strong>1.3 Les temps du récit</strong></p>
                <p>L'imparfait exprime la description et les actions d'arrière-plan. Le passé simple marque les actions de premier plan et les événements importants. Le plus-que-parfait exprime l'antériorité par rapport au passé simple.</p>
                <h2>CHAPITRE 2 : LE THÉÂTRE</h2>
                <p><strong>2.1 Les caractéristiques du texte théâtral</strong></p>
                <p>Le théâtre est un texte destiné à être joué. Il se compose de dialogues et de didascalies (indications de mise en scène). Une pièce est divisée en actes et en scènes. Le langage théâtral utilise le monologue, le dialogue et l'aparte.</p>
                <p><strong>2.2 Les genres théâtraux</strong></p>
                <p>La comédie cherche à faire rire et se termine souvent bien. La tragédie met en scène des personnages nobles confrontés à un destin fatal, et suscite la pitié et la terreur (catharsis). Le drame mêle les deux registres.</p>
                <h2>CHAPITRE 3 : LA POÉSIE</h2>
                <p>La poésie joue avec les sonorités, les rythmes et les images. Les vers sont mesurés (alexandrin = 12 syllabes, décasyllabe = 10 syllabes). Les rimes peuvent être plates (AABB), croisées (ABAB) ou embrassées (ABBA). Les figures de style (métaphore, comparaison, personnification) enrichissent le texte poétique.</p>
            ` 
        },
        { 
            id: "svt-2nde",
            matiere: "SVT", 
            desc: "La Terre et la Vie", 
            contenu: `
                <h2>CHAPITRE 1 : LA CELLULE, UNITÉ DU VIVANT</h2>
                <p><strong>1.1 La cellule</strong></p>
                <p>Tous les êtres vivants sont constitués de cellules. On distingue les cellules procaryotes (sans noyau, comme les bactéries) et les cellules eucaryotes (avec un noyau, comme les cellules animales et végétales).</p>
                <p><strong>1.2 Les organites cellulaires</strong></p>
                <p>La membrane plasmique délimite la cellule. Le noyau contient l'ADN, le support de l'information génétique. Les mitochondries produisent l'énergie. Les chloroplastes (chez les végétaux) permettent la photosynthèse.</p>
                <h2>CHAPITRE 2 : LA REPRODUCTION</h2>
                <p><strong>2.1 La reproduction sexuée</strong></p>
                <p>Elle implique la rencontre de deux cellules reproductrices (gamètes) : l'ovule et le spermatozoïde. La fécondation donne une cellule-œuf qui se divise pour former un nouvel individu. La méiose permet de produire des gamètes avec la moitié des chromosomes.</p>
                <h2>CHAPITRE 3 : L'ÉCOLOGIE</h2>
                <p><strong>3.1 Les écosystèmes</strong></p>
                <p>Un écosystème est l'ensemble formé par un milieu de vie (biotope) et les êtres vivants qui l'habitent (biocénose). Les relations entre les êtres vivants incluent la prédation, la compétition et le mutualisme.</p>
                <p><strong>3.2 Les cycles biogéochimiques</strong></p>
                <p>Le cycle du carbone et le cycle de l'azote sont essentiels à la vie. Les décomposeurs (bactéries, champignons) recyclent la matière organique en matière minérale.</p>
            ` 
        },
        // Ajoute ici les autres matières de 2nde si nécessaire
    ],
    premiere: [
        { 
            id: "maths-1ere",
            matiere: "Mathématiques (Séries C & D)", 
            desc: "Polynômes, Suites et Dérivation", 
            contenu: `
                <h2>CHAPITRE 1 : POLYNÔMES ET ÉQUATIONS</h2>
                <p><strong>1.1 Le second degré</strong></p>
                <p>Un polynôme du second degré s'écrit P(x) = ax² + bx + c avec a ≠ 0. Le discriminant est Δ = b² - 4ac. Si Δ > 0, l'équation P(x) = 0 admet deux solutions réelles : x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a). Si Δ = 0, il y a une solution double x₀ = -b/(2a). Si Δ < 0, il n'y a pas de solution réelle.</p>
                <p><strong>1.2 Factorisation</strong></p>
                <p>Si Δ > 0, on peut factoriser P(x) = a(x - x₁)(x - x₂). Le signe du polynôme dépend du signe de a et des racines.</p>
                <h2>CHAPITRE 2 : LES SUITES NUMÉRIQUES</h2>
                <p><strong>2.1 Suites arithmétiques</strong></p>
                <p>Une suite (uₙ) est arithmétique de raison r si uₙ₊₁ = uₙ + r. Le terme général est uₙ = u₀ + nr. La somme des n premiers termes est Sₙ = n × (u₀ + uₙ₋₁)/2.</p>
                <p><strong>2.2 Suites géométriques</strong></p>
                <p>Une suite (uₙ) est géométrique de raison q si uₙ₊₁ = q × uₙ. Le terme général est uₙ = u₀ × qⁿ. La somme des termes est Sₙ = u₀ × (1 - qⁿ)/(1 - q) si q ≠ 1.</p>
                <h2>CHAPITRE 3 : DÉRIVATION</h2>
                <p>Le nombre dérivé de f en a est f'(a) = lim(h→0) [f(a+h) - f(a)]/h. Il correspond à la pente de la tangente. Les formules : (xⁿ)' = nxⁿ⁻¹, (uv)' = u'v + uv', (u/v)' = (u'v - uv')/v². La dérivée permet d'étudier les variations d'une fonction.</p>
            ` 
        },
        { 
            id: "physique-1ere",
            matiere: "Physique-Chimie (Séries C & D)", 
            desc: "Cinématique et Chimie", 
            contenu: `
                <h2>CHAPITRE 1 : CINÉMATIQUE DU POINT</h2>
                <p><strong>1.1 Le mouvement rectiligne uniforme</strong></p>
                <p>Dans un mouvement rectiligne uniforme, la vitesse est constante. L'équation horaire est x(t) = v × t + x₀. L'accélération est nulle. C'est le cas d'une voiture roulant à vitesse constante sur une route droite.</p>
                <p><strong>1.2 Le mouvement rectiligne uniformément varié</strong></p>
                <p>L'accélération a est constante. La vitesse est v(t) = a × t + v₀. La position est x(t) = ½ a t² + v₀t + x₀. Si a > 0, le mouvement est accéléré ; si a < 0, il est retardé.</p>
                <h2>CHAPITRE 2 : DYNAMIQUE</h2>
                <p><strong>2.1 Les lois de Newton</strong></p>
                <p>Première loi : un corps isolé conserve son état de repos ou de mouvement rectiligne uniforme. Deuxième loi : ΣF = m × a (la somme des forces est égale à la masse fois l'accélération). Troisième loi : les actions réciproques sont opposées.</p>
                <h2>CHAPITRE 3 : CHIMIE DES SOLUTIONS</h2>
                <p>Une solution est un mélange homogène de soluté et de solvant. La concentration molaire est C = n/V (mol/L). Le pH mesure l'acidité d'une solution : pH = -log[H₃O⁺]. Une solution est acide si pH < 7, basique si pH > 7.</p>
            ` 
        },
    ],
    terminale: [
        { 
            id: "maths-tle-C",
            matiere: "Mathématiques (Série C)", 
            desc: "Limites, Dérivées et Intégrales", 
            contenu: `
                <h2>CHAPITRE 1 : LIMITES ET CONTINUITÉ</h2>
                <p><strong>1.1 Notion de limite</strong></p>
                <p>On dit que f(x) tend vers L quand x tend vers a si f(x) devient aussi proche que l'on veut de L. On note lim(x→a) f(x) = L. Une fonction est continue en a si lim(x→a) f(x) = f(a).</p>
                <p><strong>1.2 Limites à l'infini</strong></p>
                <p>On étudie le comportement de f quand x tend vers +∞ ou -∞. Par exemple, lim(x→+∞) 1/x = 0 et lim(x→+∞) x² = +∞. Les théorèmes de comparaison et de croissances comparées sont essentiels.</p>
                <h2>CHAPITRE 2 : DÉRIVATION</h2>
                <p><strong>2.1 Nombre dérivé et fonction dérivée</strong></p>
                <p>La dérivée de f en a est la limite du taux d'accroissement. Elle donne la pente de la tangente. Les formules de base : (xⁿ)' = nxⁿ⁻¹, (eˣ)' = eˣ, (ln x)' = 1/x, (sin x)' = cos x, (cos x)' = -sin x.</p>
                <p><strong>2.2 Applications</strong></p>
                <p>La dérivée permet de déterminer les variations d'une fonction : si f' > 0, f est croissante ; si f' < 0, f est décroissante. Les extremums (maximum, minimum) sont atteints lorsque f' = 0.</p>
                <h2>CHAPITRE 3 : CALCUL INTÉGRAL</h2>
                <p><strong>3.1 Primitive et intégrale</strong></p>
                <p>F est une primitive de f si F' = f. L'intégrale de a à b de f(x)dx est F(b) - F(a). Elle représente l'aire sous la courbe entre les abscisses a et b.</p>
                <h2>CHAPITRE 4 : NOMBRES COMPLEXES</h2>
                <p>Un nombre complexe s'écrit z = a + ib (a et b réels, i² = -1). Le module est |z| = √(a² + b²). Un argument θ vérifie cos θ = a/|z| et sin θ = b/|z|. La forme exponentielle est z = |z|e^(iθ).</p>
            ` 
        },
        { 
            id: "philo-tle",
            matiere: "Philosophie (Toutes séries)", 
            desc: "Conscience, Liberté et Vérité", 
            contenu: `
                <h2>CHAPITRE 1 : LA CONSCIENCE</h2>
                <p><strong>1.1 Conscience immédiate et conscience réfléchie</strong></p>
                <p>La conscience immédiate est la simple présence à soi et au monde (ex: je sens la chaleur). La conscience réfléchie est le retour sur soi, la capacité de se prendre soi-même comme objet de pensée. Descartes pose le cogito : "Je pense donc je suis", preuve de la certitude de l'existence du sujet pensant.</p>
                <p><strong>1.2 L'inconscient</strong></p>
                <p>Freud révèle que la conscience n'est pas maîtresse dans sa propre maison. L'inconscient psychique influence nos pensées et nos actes (rêves, lapsus, actes manqués).</p>
                <h2>CHAPITRE 2 : LA LIBERTÉ</h2>
                <p><strong>2.1 Le libre arbitre</strong></p>
                <p>Être libre, est-ce faire ce que l'on veut ? Le libre arbitre est la capacité de choisir sans être déterminé. Sartre affirme que "l'homme est condamné à être libre" et que l'existence précède l'essence.</p>
                <p><strong>2.2 Le déterminisme</strong></p>
                <p>Le déterminisme scientifique postule que tout événement a une cause. Spinoza montre que la liberté n'est pas l'absence de contrainte mais la connaissance des causes qui nous déterminent.</p>
                <h2>CHAPITRE 3 : LA VÉRITÉ</h2>
                <p><strong>3.1 Vérité et opinion</strong></p>
                <p>L'opinion est une croyance non fondée, souvent changeante. La vérité exige une démarche critique et une preuve. Platon distingue le monde des apparences (doxa) et le monde des Idées (épistémè).</p>
                <p><strong>3.2 Les critères de la vérité</strong></p>
                <p>La cohérence logique, la correspondance avec les faits et l'utilité pratique sont des critères de vérité. La science progresse en réfutant les erreurs (Popper, falsifiabilité).</p>
            ` 
        },
        { 
            id: "francais-tle",
            matiere: "Français (Toutes séries)", 
            desc: "Dissertation et Commentaire", 
            contenu: `
                <h2>CHAPITRE 1 : LA DISSERTATION LITTÉRAIRE</h2>
                <p><strong>1.1 Analyser le sujet</strong></p>
                <p>La dissertation commence par l'analyse des termes du sujet. Il faut définir les mots-clés, dégager la problématique et formuler un plan. Le plan dialectique (thèse, antithèse, synthèse) est le plus courant.</p>
                <p><strong>1.2 Rédiger l'introduction et la conclusion</strong></p>
                <p>L'introduction comprend une accroche, la présentation du sujet, la problématique et l'annonce du plan. La conclusion fait un bilan et ouvre sur une perspective plus large.</p>
                <h2>CHAPITRE 2 : LE COMMENTAIRE COMPOSÉ</h2>
                <p><strong>2.1 Méthode</strong></p>
                <p>Le commentaire explore un texte littéraire. Il faut d'abord lire attentivement, repérer les thèmes, les figures de style et la structure. Le plan peut être thématique, chronologique ou stylistique.</p>
                <p><strong>2.2 Les axes d'analyse</strong></p>
                <p>On analyse le fond (idées) et la forme (style). Les citations du texte sont indispensables pour justifier les interprétations.</p>
                <h2>CHAPITRE 3 : LE RÉSUMÉ DE TEXTE</h2>
                <p>Le résumé consiste à réduire un texte au quart de sa longueur en gardant les idées essentielles. Il exige une reformulation personnelle, sans copier-coller, et un respect du système d'énonciation du texte source.</p>
            ` 
        },
    ],
    bac: [
        { 
            id: "bac-maths",
            matiere: "Annales Maths Bac", 
            desc: "Sujets corrigés 2010-2023", 
            contenu: `
                <h2>SUJET TYPE BAC - MATHÉMATIQUES SÉRIE C</h2>
                <p><strong>Exercice 1 (5 points) : Nombres complexes</strong></p>
                <p>On considère le nombre complexe z = 1 + i√3.</p>
                <p>1) Calculer le module |z| et un argument θ de z.</p>
                <p>2) Écrire z sous forme exponentielle.</p>
                <p>3) En déduire la forme algébrique de z⁶.</p>
                <p><em>Correction : |z| = √(1² + (√3)²) = √4 = 2. θ = π/3 (car cos θ = 1/2 et sin θ = √3/2). Donc z = 2e^(iπ/3). z⁶ = 2⁶ × e^(i×6π/3) = 64 × e^(i2π) = 64 × 1 = 64.</em></p>
                <p><strong>Exercice 2 (5 points) : Suites numériques</strong></p>
                <p>Soit la suite (uₙ) définie par u₀ = 1 et uₙ₊₁ = (1/2)uₙ + 3.</p>
                <p>1) Calculer u₁ et u₂.</p>
                <p>2) Montrer que la suite (vₙ) définie par vₙ = uₙ - 6 est géométrique.</p>
                <p>3) En déduire l'expression de uₙ en fonction de n, puis la limite de la suite.</p>
                <p><em>Correction : u₁ = 3,5, u₂ = 4,75. vₙ₊₁ = uₙ₊₁ - 6 = (1/2)uₙ + 3 - 6 = (1/2)uₙ - 3 = (1/2)(uₙ - 6) = (1/2)vₙ. Donc (vₙ) est géométrique de raison 1/2 et de premier terme v₀ = -5. vₙ = -5 × (1/2)ⁿ. uₙ = 6 - 5 × (1/2)ⁿ. La limite est 6.</em></p>
            ` 
        },
        { 
            id: "bac-physique",
            matiere: "Annales Physique-Chimie", 
            desc: "Sujets corrigés et explications", 
            contenu: `
                <h2>SUJET TYPE BAC - PHYSIQUE SÉRIE C</h2>
                <p><strong>Exercice 1 (6 points) : Électricité</strong></p>
                <p>Un circuit comprend une pile de f.é.m. E = 12 V et de résistance interne r = 1 Ω, en série avec un résistor de résistance R = 5 Ω.</p>
                <p>1) Calculer l'intensité I du courant dans le circuit.</p>
                <p>2) Calculer la tension U aux bornes du résistor.</p>
                <p><em>Correction : Loi d'Ohm généralisée : I = E / (R + r) = 12 / (5 + 1) = 2 A. U = R × I = 5 × 2 = 10 V.</em></p>
                <h2>SUJET TYPE BAC - CHIMIE</h2>
                <p><strong>Exercice 2 (4 points) : Acide-base</strong></p>
                <p>On dissout 0,01 mol de HCl dans 1 L d'eau. Quelle est la concentration en ions H₃O⁺ et le pH de la solution ?</p>
                <p><em>Correction : HCl est un acide fort, donc [H₃O⁺] = C = 0,01 mol/L. pH = -log(0,01) = 2.</em></p>
            ` 
        }
    ]
};
