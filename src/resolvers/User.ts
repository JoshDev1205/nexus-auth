import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.createdAt()
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({
      pagination: { first: true },
      ordering: { views: true },
    })
  },
})
