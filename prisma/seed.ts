// postgres
// datasource pg {
//   provider = "postgresql"
//   url      = env("POSTGRESQL_URL")
//   enabled  = false
// }

import { PrismaClient } from '@prisma/client'
const photon = new PrismaClient()

async function main() {
  const user1 = await photon.user.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      posts: {
        create: {
          title: 'Join us for Prisma Day 2019 in Berlin',
          content: 'https://www.prisma.io/day/',
          published: true,
        },
      },
    },
  })
  const user2 = await photon.user.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43"
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
            views: 10,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: true,
          },
          {
            title: 'Follow Nexus Prisma plugin',
            content: 'https://github.com/prisma-labs/nexus-prisma',
            published: true,
            views: 20,
          },
        ],
      },
    },
  })
  console.log({ user1, user2 })
}

main().finally(async () => {
  await photon.disconnect()
})
