import { Hono } from 'hono'

const app = new Hono()

app.all('/hello', (c) => c.text('Any Method /hello'))

export default app
