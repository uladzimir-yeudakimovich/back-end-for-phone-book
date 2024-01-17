module.exports = {
  anecdotes: {
    getAll: '/api/anecdotes',
    getById: id => `/api/anecdotes/${id}`,
    create: '/api/anecdotes',
    update: id => `/api/anecdotes/${id}`,
    delete: id => `/api/anecdotes/${id}`
  },
  blogs: {
    getAll: '/api/blogs',
    getById: id => `/api/blogs/${id}`,
    create: '/api/blogs',
    update: id => `/api/blogs/${id}`,
    delete: id => `/api/blogs/${id}`
  },
  courses: {
    getAll: '/api/courses',
    getById: id => `/api/courses/${id}`,
    create: '/api/courses',
    update: id => `/api/courses/${id}`,
    delete: id => `/api/courses/${id}`
  },
  info: '/info',
  information: '/api/v1/information',
  login: '/login',
  refreshToken: '/refresh-token',
  registration: '/registration',
  persons: {
    getAll: '/api/persons',
    getById: id => `/api/persons/${id}`,
    create: '/api/persons',
    update: id => `/api/persons/${id}`,
    delete: id => `/api/persons/${id}`
  },
  users: {
    getAll: '/api/users',
    getById: id => `/api/users/${id}`,
    create: '/api/users',
    update: id => `/api/users/${id}`,
    delete: id => `/api/users/${id}`
  }
};
