const encoder = new TextEncoder();
const helloText = encoder.encode("Hello, Thank you!!!!");


// (async () => {
//     Deno.writeFile("hello.txt", helloText);
// });


//Top level Away
await Deno.writeFile("hello.txt", helloText);
