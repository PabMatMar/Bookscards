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


for (let i = 0; i < books.length; i++) {
  const jjssAnidamiento = document.querySelector("body")
  jjssAnidamiento.appendChild(section)
  const book = document.createElement("section")
  const articulo = document.createElement("article")
  book.appendChild(articulo)
  const titulo = document.createElement("h3").innerHTML = books[i].title
  const autor = document.createElement("p").innerHTML = "Author: " + books[i].author
  const country = document.createElement("p").innerHTML = "Country: " + books[i].country
  const imagen = document.createElement("img").src = books[i].imageLink
  const lengua = document.createElement("p").innerHTML = "Language: " + books[i].language
  const año = document.createElement("p").innerHTML = "Year: " + books[i].year
  articulo.appendChild(titulo)
  articulo.appendChild(autor)
  articulo.appendChild(country)
  articulo.appendChild(imagen)
  articulo.appendChild(lengua)
  articulo.appendChild(año)
}