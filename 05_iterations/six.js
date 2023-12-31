// for each do not return anything 

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item        
// } )

// console.log(values);    // undefined as for each do not return anything so filter came into picture

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// filter operator => accepts callback function and return arr of values which satisfies filter condition

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num).    // if we want to push a num into array then we 
                                 // have to use foreach loop not filter
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const titles = books.filter((book) => {
          return book.title
  })

//  console.log(titles)   // it will give all array of all books objects having valid titles

 // if i want a titles arrray then i have to use foreach loop or array map
let booksTitle = []
 
books.forEach((book)=>{
    if(book.title){
        booksTitle.push(book.title)
    }
})

console.log(booksTitle)


  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  //console.log(userBooks);