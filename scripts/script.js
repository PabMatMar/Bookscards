const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }]

//PARA EL ANIDAMIENTO USAREMOS VARIABLES QUE DECLAREN CON SU NOMBRE LA POSICION DE ANIDAMIENTO CON RESPECTO AL BODY

//Declaramos al padre
const padreBd = document.querySelector("body")

//creamos a header, main y footer
const mmaaiinn = document.createElement("main")
const hheeaaddeerr = document.createElement("header")
const ffooootteerr = document.createElement("footer")

//Los anidamos en body (padreBd) y declaramos a main como hijoBd
padreBd.appendChild(mmaaiinn)
padreBd.appendChild(hheeaaddeerr)
padreBd.appendChild(ffooootteerr)
const hijoBd = document.querySelector('main')

//Creamos el section, lo anidamos en main (hijoBd) y declaramos al seccion como nietoBd
const seccion = document.createElement("section")
hijoBd.appendChild(seccion)
const nietoBd = document.querySelector("section")

//Creamos un bucle for que itera tantas veces como objetos tenga el array Books
for (let i = 0; i < books.length; i++) {
  //Creamos los articulos, los anidamos en seccion (nietoBd) y declaramos cada articulo  como bisnietoBd 
  const articulo = document.createElement("article")
  nietoBd.appendChild(articulo)
  const bisnietoBd = document.getElementsByTagName("article")[i]
  //Creamos los elementos de texto e imagen:
  const titulo = document.createElement("h3")
  const autor = document.createElement("p")
  const pais = document.createElement("p")
  const portada = document.createElement("img")
  const idioma = document.createElement("p")
  const año = document.createElement("p")
  //Los anidamos en article (bisnietoBd):
  bisnietoBd.appendChild(titulo)
  bisnietoBd.appendChild(pais)
  bisnietoBd.appendChild(portada)
  bisnietoBd.appendChild(idioma)
  bisnietoBd.appendChild(año)

  //Le damos valor a cada elemento de texto e imagen

  titulo.innerHTML = books[i].title
  autor.innerHTML = "Author: " + books[i].author
  pais.innerHTML = "Country: " + books[i].country
  portada.src = books[i].imageLink
  idioma.innerHTML = "Language: " + books[i].language
  año.innerHTML = "Year: " + books[i].year
}