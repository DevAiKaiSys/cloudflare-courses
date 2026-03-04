import { Hono } from "hono";
import { accessAuth } from "./middleware/auth";
const app = new Hono();

// app.get('/', (c) => c.text('Hono!'))
app.use(accessAuth).get("/api/health", (c) => c.json("Healthy!🔥"));

export default app;
