Notre TP consistait a creer un CV avec REACT et VITE , dans un projet nomme 001.

le CV doit etre compose de 3 composants:
- Les informations personelles
- Les competences
- Les experiences

Dans un premier etape nous avons ouvert le dossier COUR REACT  puis nous avons avons ouvert le terminale afin de pouvoir cree le dossier 001.
De ce fait nous avons executer la commande ci-dessous:"npm create vite@latest 001 -- -- template react" donc ceci nous permet de gere les paquets javacript, de creer un nouveau projet avec la version disponible de vite, ainsi que le nom de notre projet , de demander a vite de preparer le projet avec REACT.
Pendant la configuration, Vite nous a posé des questions. Nous avons choisi ESLint pour la vérification du code, puis accepté l’installation des dépendances et le démarrage du projet.
la commande utilise pour installer les dependances :"npm install"elle installe les bibliotheque dont on aura besoin.
"npm run dev" ouvre le projet dans le navigateur pour verifier si ce que nous fesons marche.
Apres la creation du projet vite a cree  plusieurs  fichiers et dossier  automatiquement.
SRC contient le code source de notre apllication
Nous avons  cree un dossier  nomme components a l'interieur de"SRC" ensuite 3 fichiers dans componentes  ou on a presenter le code de notre CV.

Nous avons créé un dossier appelé components dans le dossier src afin de séparer les différentes parties de notre CV. À l’intérieur de ce dossier, nous avons créé trois fichiers : InfoPerso.jsx, Competences.jsx et Experiences.jsx.
Nous avons utilisé le mot-clé function pour déclarer la fonction. À l’intérieur de celle-ci, le mot-clé return permet de renvoyer le contenu que nous voulons afficher dans la page.
Ensuite la balise "section" pour regrouper l ensemble du code
Apre avoir cree les trois composants nous les avons importes dans le fichier App.jsx 
Enfin, nous avons écrit export default App pour exporter le composant principal.

Ainsi, App.jsx rassemble les trois composants et organise leur affichage dans une seule page.