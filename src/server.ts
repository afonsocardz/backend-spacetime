import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const user = await prisma.user.findMany({})
  return user
})

app
  .listen({
    port: 5000,
  })
  .then(() => console.log('server running'))
