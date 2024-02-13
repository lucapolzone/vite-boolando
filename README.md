# Esercizio: Vite Boolando (08/02/2024)
nome repo: `vite-boolando`

## Descrizione
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.

Non esagerate con i componenti: less is more.

L'esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).

## Bonus
Popoliamo le voci dell'header (sia le tre voci testuali che le tre icone) dinamicamente.

## Consigli
Ho scritto i passaggi da seguire per la creazione di un nuovo progetto e l'installazione di SASS nel file README allegato. E' un ottimo metodo per prendere appunti 😉

PS. nel file che vi ho mandato non c'è tutto: ad esempio non c'è scritto come "resettare" il componente App.vue per poi andare a riscriverlo con le option API. Potete partire dal mio e aggiungere quel che volete, integrando man mano anche gli argomenti delle prossime lezioni. Alla fine vi ritroverete con una guida completa!

Volendo esagerare, so di una classe i cui studenti hanno collaborato condividendo un file su Google Drive e prendendo appunti condivisi (basta che non vi distraiate troppo durante le spiegazioni).

Buon lavoro! <br><br>

# (09/02/2024)
stessa nome repo

## Descrizione
Continuate a lavorare nella stessa repo di ieri.

## Milestone 1
Create un componente `Card` predisposto per ricevere dall'esterno le informazioni necessarie alla visualizzazione dei propri elementi (con le `props`).
Potete testarlo stampando una singola `Card` con informazioni statiche.

## Milestone 2
(Se non lo avete già fatto) definite un array di prodotti nel componente `AppMain`. Potete prendere spunto dall'array allegato o usarlo direttamente così com'è. Iterate sull'array di prodotti e per ognuno di essi create un componente `Card`, inviando le informazioni necessarie alla visualizzazione.

## Bonus
Facciamo in modo che il cuore nella `Card` del prodotto sia colorato o vuoto a seconda del valore della proprietà `isInFavourites`

## Bonus 2
Spostate i menu dinamici dai componenti `AppHeader` e `AppFooter` al componente App. Inviateglieli poi tramite `props`.


```
[
  {
    id: 1,
    frontImage: '1.webp',
    backImage: '1b.webp',
    brand: "Levi's",
    name: 'Relaxed Fit',
    price: 29.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 2,
    frontImage: '2.webp',
    backImage: '2b.webp',
    brand: 'Guess',
    name: 'Roses Tee',
    price: 20.99,
    isInFavorites: true,
    badges: [
      {
        type: 'discount',
        value: '-30%',
      },
    ],
  },
  {
    id: 3,
    frontImage: '3.webp',
    backImage: '3b.webp',
    brand: 'Come Zucchero Filato',
    name: 'Voglia di colori pastello',
    price: 129.99,
    isInFavorites: false,
    badges: [
      {
        type: 'discount',
        value: '-30%',
      },
    ],
  },
  {
    id: 4,
    frontImage: '4.webp',
    backImage: '4b.webp',
    brand: "Levi's",
    name: 'Tee Unisex',
    price: 14.99,
    isInFavorites: false,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 5,
    frontImage: '5.webp',
    backImage: '5b.webp',
    brand: 'Maya Deluxe',
    name: 'Stripe Bodice',
    price: 99.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
      {
        type: 'discount',
        value: '-50%',
      },
    ],
  },
  {
    id: 6,
    frontImage: '6.webp',
    backImage: '6b.webp',
    brand: 'Esprit',
    name: 'Maglione - Black',
    price: 29.99,
    isInFavorites: true,
    badges: [
      {
        type: 'tag',
        value: 'Sostenibilità',
      },
    ],
  },
];
```

<br>

# (12/02/2024)
stessa nome repo

## MOCKING API
1. Installate la libreria `json-server`
2. Mettete in un file `.json` la struttura dati dei prodotti (vedi allegato - se non ne avete una ad hoc potete usarlo direttamente)
3. Fate partire il server delle mocking API
4. Testate il server e recuperate l'indirizzo che vi restituisce la lista dei prodotti
5. Chiamatelo via axios e stampare in pagina i prodotti presi dalla API

Di seguito i link per l'installazione dei pacchetti necessari <br>
https://www.npmjs.com/package/json-server <br>
https://www.npmjs.com/package/axios

## GLOBAL STATE
Realizzare un file "store" come visto in classe / come descritto dalla DOC di Vue
Usarlo per conservare ed utilizzare l'endpoint base (`localhost:3000`)

## BONUS
Aggiungere al global state (store) anche la lista di prodotti recuperata dal JSON Server ed utilizzarla durante la stampa


# (13/02/2024)
stessa nome repo

## Descrizione
Continuate a lavorare nella stessa repo di ieri. <br>
Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento "show-product" verso il componente App.
In App, quando riceviamo l'evento, apriamo una modale che mostra tutte le informazioni testuali del prodotto. Nella modale è presente una X (o un pulsante) per chiuderla.

## Bonus
Proviamo a creare una modale più completa: mostriamo le immagini del prodotto sulla sinistra e le informazioni di testo sulla destra.