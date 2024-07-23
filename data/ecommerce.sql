-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 30 juin 2024 à 17:13
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `nom`) VALUES
(1, 'Livres'),
(2, 'Figurines');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `email`, `message`, `nom`) VALUES
(1, 'jester@jvvdqjy.fr', 'Bonjour est-ce que vous vendez des figurines?', 'jester'),
(2, 'cycrjct@vtuctc.com', 'Naruto > One Piece\n', 'drdrujd');

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `prix` double NOT NULL,
  `quantite` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `categorie_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id`, `description`, `photo`, `prix`, `quantite`, `titre`, `categorie_id`) VALUES
(1, 'Engloutir les ténèbres pour mieux les combattre !\nChaque année au Japon, on recense plus de 10 000 morts inexpliquées et portés disparus. Dans la majorité des cas, ce sont les sentiments négatifs des êtres humains qui sont en cause. Souffrance, regrets, humiliation : leur accumulation dans un même endroit provoque des malédictions souvent fatales...', 'https://m.media-amazon.com/images/I/71+HW7-kq2L._AC_UF1000,1000_QL80_.jpg', 9.99, 4, 'Jujutsu Kaisen - Tome 1', NULL),
(2, 'Naruto est un garçon un peu spécial. Il est toujours tout seul et son caractère fougueux ne l\'aide pas vraiment à se faire apprécier dans son village. Malgré cela, il garde au fond de lui une ambition: celle de devenir un maître Hokage, la plus haute distinction dans l\'ordre des ninjas, et ainsi obtenir la reconnaissance de ses pairs.', 'https://m.media-amazon.com/images/I/71GsyZF5AyL._AC_UF1000,1000_QL80_.jpg', 9.99, 8, 'Naruto - Tome 1', NULL),
(3, 'Nous sommes à l\'ère des pirates. Luffy, un garçon espiègle, rêve de devenir le roi des pirates en trouvant le “One Piece”, un fabuleux trésor. Seulement, Luffy a avalé un fruit du démon qui l\'a transformé en homme élastique. Depuis, il est capable de contorsionner son corps dans tous les sens, mais il a perdu la faculté de nager. Avec l\'aide de ses précieux amis, il va devoir affronter de redoutables pirates dans des aventures toujours plus rocambolesques.', 'https://m.media-amazon.com/images/I/91t7YlWwGfL._AC_UF1000,1000_QL80_.jpg', 9.99, 9, 'One Piece - Tome 1', NULL),
(4, 'Découvrez l\'histoire du plus puissant des super-héros dans ce manga qui va vous mettre K.O. !!\nSaitama est un jeune homme sans emploi et sans réelle perspective d\'avenir, jusqu\'au jour où il décide de prendre sa vie en main. Son nouvel objectif : devenir un super-héros. Il s\'entraîne alors sans relâche pendant trois ans et devient si puissant qu\'il est capable d\'éliminer ses adversaires d\'un seul coup de poing. On le surnomme désormais One-Punch Man.', 'https://m.media-amazon.com/images/I/71vmRHMrG3L._AC_UF1000,1000_QL80_.jpg', 9.99, 8, 'One Punch Man - Tome 1', NULL),
(5, 'Light Yagami ramasse un étrange carnet oublié dans la cour de son lycée. Selon les instructions du carnet, la personne dont le nom est écrit dans les pages du Death Note mourra dans les 40 secondes !! Quelques jours plus tard, Light fait la connaissance de l\'ancien propriétaire du carnet : Ryûk, un dieu de la mort ! Poussé par l\'ennui, il a fait entrer le carnet sur terre. Ryûk découvre alors que Light a déjà commencé à remplir son carnet...', 'https://m.media-amazon.com/images/I/812k3BWrksL._AC_UF1000,1000_QL80_.jpg', 9.99, 8, 'Death Note - Tome 1', NULL),
(6, 'Les dragon balls sont des boules de cristal magiques. Celui qui les réunit invoque un dragon qui réalisera ses voeux. Sangoku, Dendé, Végéta et tous les protagonistes de cette grande saga tentent de trouver les sept dragon balls qui, une fois le voeu exaucé, s\'éparpilleront à nouveau dans l\'univers.Devenue un véritable phénomène de mode dès sa parution, cette série connaît un succès mondial auprès de toute une génération.', 'https://m.media-amazon.com/images/I/81TkSJw2vqL._AC_UF1000,1000_QL80_.jpg', 9.99, 9, 'Dragon Ball - Tome 1', NULL),
(7, 'Les guildes magiques sont des associations. Elles proposent différentes tâches aux magiciens, allant de la recherche d\'un objet à l\'attaque en règle. Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l\'invite alors à rejoindre sa guilde. Il s\'agit de la célèbre Fairy Tail, le sujet de tous les rêves de Lucy. Mais celle-ci est bien mystérieuse et semble être à l\'origine de nombreux scandales.', 'https://m.media-amazon.com/images/I/91B0dwAjhcL._AC_UF1000,1000_QL80_.jpg', 9.99, 9, 'Fairy Tail - Tome 1', NULL),
(8, 'En voulant ressusciter leur mère, Edward et Alphonse Elric utilisent une technique alchimique interdite : la transmutation humaine. Seulement, l\'expérience tourne mal : Edward perd un bras et une jambe et Alphonse, son corps, son esprit se retrouvant prisonnier d\'une armure. Devenu un alchimiste d\'État, Edward, surnommé le Fullmetal Alchemist, se lance, avec l\'aide de son frère, à la recherche de la pierre philosophale, seule chance de retrouver leurs corps. Les deux frères commencent à enquêter sur un homme étrange, \" le fondateur \", qui passe pour un faiseur de miracles...\n', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSD3B5ZdG-7sZBXFOw8QXEL1xi6WoiLvgMxRQC7vLRdEgWcpxUO', 9.99, 9, 'Fullmetal Alchemist - Tome 1', NULL),
(9, 'Le monde appartient désormais aux Titans, des êtres gigantesques qui ont presque décimé l’Humanité. Voilà une centaine d’années, les derniers rescapés ont bâti une place forte, une cité cernée d’une haute muraille au sein de laquelle vivent aujourd’hui leurs descendants. Parqués, ignorants tout du monde extérieur, ils s’estiment au moins à l’abri de ces effroyables êtres qui ne feraient d’eux qu’une bouchée. Hélas, cette illusion de sécurité vole en éclats le jour où surgit un Titan démesuré, encore bien plus colossal que tous les autres. S’engage alors un combat désespéré pour la survie du genre humain...', 'https://www.pika.fr/sites/default/files/images/livres/couv/9782811611699-T.jpg', 9.99, 11, 'L\'Attaque des Titans - Tome 1', NULL),
(10, 'Le Japon, au début du XXe siècle (ère Taisho). Un jeune vendeur de charbon nommé Tanjiro mène une vie sans histoire dans les montagnes, jusqu’au jour tragique où il découvre son village et sa famille massacrés par un démon. La seule survivante de cette tragédie est sa jeune soeur Nezuko. Hélas, au contact du démon, elle s’est métamorphosée en monstre féroce... Afin de renverser le processus et de venger sa famille, Tanjiro décide de partir en quête de vérité. Pour le jeune héros et sa soeur, c’est une longue aventure de sang et d’acier qui commence !', 'https://m.media-amazon.com/images/I/81ZNkhqRvVL._AC_UF1000,1000_QL80_.jpg', 9.99, 13, 'Demon Slayer - Tome 1', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK52xhp55kbbl6u4rbluxm3g9hw` (`categorie_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `FK52xhp55kbbl6u4rbluxm3g9hw` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
