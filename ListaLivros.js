// Criem uma lista de livros e cadastrem nela ao menos 5 livros

// propriedades de um livro
// titulo
// descrição
// isbn
// preco

let registerBooks = [];

for (let contador = 1; contador <=5; contador++){
  
  let book = {};

  const titleBook = prompt("Cadastre o nome do livro:");
  book.titleBook = titleBook;

  const descriptionBook = prompt("Cadastre a descrição do livro:");
  book.descriptionBook = descriptionBook;

  const isbnBook = parseInt(prompt("Cadastre o registro do livro"));
  book.isbnBook = isbnBook;

  let priceBook = parseFloat(prompt("Cadastre o preço do livro"));
  book.priceBook = priceBook;

  registerBooks.push(book);
 
}

const priceBooksAboveTen = registerBooks.filter((valor) => valor.priceBook >= 10 )

const addPriceBooks = registerBooks.reduce((acc,valor)=>{
  return acc+= valor.priceBook
  },0)
console.log(registerBooks)
console.log(priceBooksAboveTen)
console.log(addPriceBooks) 