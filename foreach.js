const coding = ['JS','ruby','java','python','HTML']
// const lang = coding.forEach( (item)=>{
//     console.log(item)
// })
// console.log(lang)



const mycoding = [
    {
        LanguageName : "Javascript",
        developer : "Priya"
    },
    {
        LanguageName : "Python",
        developer : "Priya"
    },
    {
        LanguageName : "Java",
        developer : "Priya"
    },
    {
        LanguageName : "C++",
        developer : "Priya"
    },
    {
        LanguageName : "Ruby",
        developer : "Priya"
    },
    
]

mycoding.forEach( (items)=>{
    // console.log(items.LanguageName)
})







const Numbers = [1, 2 ,3 , 4, 5, 6 , 7, 8, 9, 10]
// const numbers2 = Numbers.filter( (Num)=> Num > 4)
// console.log(numbers2)

const books = [
  {
    title: "Atomic Habits",
    genre: "Self-help",
    author: "James Clear",
    publishYear: 2018,
    edition: "1st"
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    author: "Paulo Coelho",
    publishYear: 1988,
    edition: "1st"
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    author: "Robert Kiyosaki",
    publishYear: 1997,
    edition: "1st"
  },
  {
    title: "Think and Grow Rich",
    genre: "Self-help",
    author: "Napoleon Hill",
    publishYear: 1937,
    edition: "Revised"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    author: "Robert C. Martin",
    publishYear: 2008,
    edition: "1st"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    author: "Andrew Hunt",
    publishYear: 1999,
    edition: "2nd"
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    author: "Cal Newport",
    publishYear: 2016,
    edition: "1st"
  },
  {
    title: "Zero to One",
    genre: "Business",
    author: "Peter Thiel",
    publishYear: 2014,
    edition: "1st"
  },
  {
    title: "Start with Why",
    genre: "Leadership",
    author: "Simon Sinek",
    publishYear: 2009,
    edition: "1st"
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    author: "Eric Ries",
    publishYear: 2011,
    edition: "1st"
  },
  {
    title: "Ikigai",
    genre: "Lifestyle",
    author: "Héctor García",
    publishYear: 2016,
    edition: "1st"
  },
  {
    title: "Sapiens",
    genre: "History",
    author: "Yuval Noah Harari",
    publishYear: 2011,
    edition: "1st"
  },
  {
    title: "Homo Deus",
    genre: "History",
    author: "Yuval Noah Harari",
    publishYear: 2015,
    edition: "1st"
  },
  {
    title: "The Psychology of Money",
    genre: "Finance",
    author: "Morgan Housel",
    publishYear: 2020,
    edition: "1st"
  },
  {
    title: "Can't Hurt Me",
    genre: "Motivation",
    author: "David Goggins",
    publishYear: 2018,
    edition: "1st"
  },
  {
    title: "The 48 Laws of Power",
    genre: "Strategy",
    author: "Robert Greene",
    publishYear: 1998,
    edition: "1st"
  },
  {
    title: "Mastery",
    genre: "Self-help",
    author: "Robert Greene",
    publishYear: 2012,
    edition: "1st"
  },
  {
    title: "Thinking, Fast and Slow",
    genre: "Psychology",
    author: "Daniel Kahneman",
    publishYear: 2011,
    edition: "1st"
  },
  {
    title: "Rework",
    genre: "Business",
    author: "Jason Fried",
    publishYear: 2010,
    edition: "1st"
  },
  {
    title: "Hooked",
    genre: "Product Design",
    author: "Nir Eyal",
    publishYear: 2014,
    edition: "1st"
  }
];

let mybook =books.filter( (bk)=> bk.title == 'Hooked')
mybook = books.filter( (bk)=>{return bk.author === 'Nir Eyal'})

console.log(mybook)

