# Checkpoint 2 - Angular


**!!! PREMIERE ETAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

---

- Clone ce projet
- Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

---

**A chaque fois que tu complètes un exercice:**

- Fais un commit avec un message EXPLICITE sur ta branche.
- Fais un push de ta branche.

---
## Partie 1: Algorithme JS/TS

Réalise l'ensemble des algos présents. Tu peux les faire en JS ou en TS :

> [algo-1.js](./partie-1/algo-1.js)
>
> [algo-2.js](./partie-1/algo-2.js)
>
> [algo-3.js](./partie-1/algo-3.js)

BONUS (facultatif)
> [algo-4.js](./partie-1/algo-4.js)
>
> [algo-5.js](./partie-1/algo-5.js)
>
> [algo-6.js](./partie-1/algo-6.js)

## Partie 2: Angular 

### Intro
Rends-toi dans le dossier `partie-2`

Tu vas afficher une liste d'artistes(3) et au clique sur l'un des artistes, tu afficheras ses albums.

### 1ere étape
Tu auras besoin de deux routes : 
- "/artists" qui affichera la liste des artistes
- "/artists/{id}/albums" qui affichera les albums d'un artiste
- en cas d'erreur ou si l'url est vide, tu seras redirigé vers la page de la liste d'artistes.

Tu auras également besoin de 3 classes :
- Artist qui a les propriétés :
  - followers (objet qui a une propriété total (nombre))
  - id (chaîne de caractère)
  - images (tableau d'Image)
  - name (chaîne de caractère)
- Album :
  - artists (tableau d'Artist)
  - id (chaîne de caractère)
  - name (chaîne de caractère)
  - release_date (chaîne de caractère au format YYYY-MM-DD)
  - total_tracks (nombre)
  - images (tableau d'Image)
- Image
  - width (nombre)
  - height (nombre)
  - url (chaîne de caractère)

Une fois que tu auras fini la modélisation TS, n'oublie pas de typer les deux variables artists et albums dans le composant app.
Tu devras certainement déplacer la variable albums dans le composant qui gèrera l'affichage des albums d'un artist. N'oublie pas l'import!

L'id qui te servira à la redirection sera celui présent dans l'objet sous la propriété id.

### Critères
Le challenge sera considéré comme un succès si :
- lorsque je vais sur http://localhost:4200 ou http://localhost:4200/kjdshfhjdsb, je suis bien redirigé vers /artists.
- Que les 3 photos avec le nom des artistes et leurs nombres de followers au format 100,000,000 apparaîssent sur cette page.
- Que je peux cliquer sur les noms ET les photos.
- Qu'au click, je suis redirigé vers /artists/{id de l'objet}/albums
- Que sur cette page, tous les albums apparaissent avec :
  - leurs photos
  - leurs noms
  - leurs dates de sortie
  - leurs nombres de musiques

