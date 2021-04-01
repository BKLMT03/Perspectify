const path = require('path')
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

//connect to mongodb
connectDB();

const comments = require('./routes/comments')
const users = require('./routes/users')
const articles = require('./routes/articles')
const news = require('./routes/news')

const app = express();

app.use(cors());
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//whenever we reach localhost/api/v1/comments or users, it should route to comments.js or user.js
app.use('/api/v1/comments', comments)
app.use('/api/v1/users', users)
app.use('/api/v1/articles', articles)
app.use('/api/v1/news', news)

//production deployment after running npm run build and having build folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow.bold))