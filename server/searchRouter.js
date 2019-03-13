import axios from 'axios';
import express from 'express';

const router = express.Router();

router.route('/load')
  .get((req, res) => {
    let { id } = req.query;
    let url = process.env.ENV === 'production' ? process.env.SEARCH_SERVER : `localhost:3001`;
    axios
      .get(`http://${url}/search-api/load?id=${id}`)
      .then(({data}) => res.status(200).send(data))
      .catch(() => res.status(404).send('error fetching from Search server'))
  })

router.route('/card')
  .get((req, res) => {
    let { label } = req.query;
    let url = process.env.ENV === 'production' ? process.env.SEARCH_SERVER : `localhost:3001`;
    axios
      .get(`http://${url}/search-api/card?label=${label}`)
      .then(({data}) => res.status(200).send(data))
      .catch(() => res.status(404).send('error fetching from Search server'))
  })

router.route('/board')
  .get((req, res) => {
    let { title } = req.query;
    let url = process.env.ENV === 'production' ? process.env.SEARCH_SERVER : `localhost:3001`;
    axios
      .get(`http://${url}/search-api/board?title=${title}`)
      .then(({data}) => res.status(200).send(data))
      .catch(() => res.status(404).send('error fetching from Search server'))
  })

export default router;