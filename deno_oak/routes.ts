import {Router} from "https://deno.land/x/oak/mod.ts";
import { Book } from "./types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const router = new Router();


let books: Book[] = [
    {
        id: "1",
        title: "Book One",
        author: "One",
    },
    {
        id: "2",
        title: "Book Two",
        author: "Two",
    },
    {
        id: "3",
        title: "Book Three",
        author: "Three",
    },
]

//Route
router.get('/', (context)=> {
    context.response.body = "Hello World Server";
})
     .get('/books', (context) => {
    context.response.body = books;
})

// Push new data
     .post("/book", async (context) => {
       const body = await  context.request.body();

       //if empty in information field
       if(!context.request.hasBody){
           context.response.status = 400;
           context.response.body = "No New Data";
       } else {
           //Create ID, new objiect and Push new data
           const book: Book = await body.value;
           book.id = v4.generate();
           books.push(book);
           context.response.status = 201;
           context.response.body = book;
       }
     })
     .get("/book/:id", async(context) => {
         //Check param to find the same ID
         const book: Book | undefined = books.find((b) => b.id === context.params.id)

         if(book) {
             context.response.body = book;
             context.response.status = 200;
         } else {
            context.response.body = "Book undefined"
            context.response.status = 404;
         }
     })


export default router;