import express from 'express';
import path from 'path';
import parser from 'body-parser';

// import router from './router';
import searchRouter from './searchRouter';

const app = express();
const port = process.env.PORT || 3009;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

// app.use('/api', router)

app.use('/search-api', searchRouter)

app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

if (process.env.NODE_ENV !== 'jest') {
  app.listen(port, () => console.log(`server is listening on port ${port}`));
}


export default app;