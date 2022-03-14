import {Application} from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";



const app = new Application();


//register middleware
app.use(router.routes())
app.use(router.allowedMethods());




console.log("Server is running on port 5000");
await app.listen({port:5000});

