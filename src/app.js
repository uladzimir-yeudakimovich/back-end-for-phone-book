const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const app = express();
const cors = require('cors');

const { showRequestLogger, saveRequestLogger } = require('./middleware/logger');
const infoRouter = require('./routers/info/info.router');
const informationRouter = require('./routers/information/information.router');
const loginRouter = require('./routers/login/login.router');
const refreshTokenRouter = require('./routers/refresh/refresh-token.router');
const registrationRouter = require('./routers/registration/registration.router');
const anecdotesRouter = require('./routers/anecdotes/anecdotes.router');
const blogsRouter = require('./routers/blogs/blog.router');
const commentsRouter = require('./routers/comments/comments.router');
const coursesRouter = require('./routers/courses/courses.router');
const personsRouter = require('./routers/persons/persons.router');
const usersRouter = require('./routers/users/user.router');
const checkToken = require('./middleware/check-token');
const unknownEndpoint = require('./middleware/unknown-endpoint');
const errorHandler = require('./middleware/error-handler');

app.use(cors());
app.use(helmet());
app.use(express.static('build'));
app.use(express.json());
app.use(showRequestLogger);
app.use(saveRequestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') return res.send('Service is running!');
  next();
});

app.use('/info', infoRouter);
app.use('/login', loginRouter);
app.use('/refresh-token', refreshTokenRouter);
app.use('/registration', registrationRouter);
app.use('/api/anecdotes', checkToken, anecdotesRouter);
app.use('/api/blogs', checkToken, blogsRouter);
app.use('/api/blogs/:id/comments', checkToken, commentsRouter);
app.use('/api/courses', checkToken, coursesRouter);
app.use('/api/persons', checkToken, personsRouter);
app.use('/api/users', checkToken, usersRouter);
app.use('/api/v1/information', checkToken, informationRouter);

if (process.env.NODE_ENV === 'development') {
  const testingRouter = require('./routers/testing/testing.router');
  app.use('/api/testing', testingRouter);
}

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
