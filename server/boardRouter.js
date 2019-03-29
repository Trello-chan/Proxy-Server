import axios from 'axios';
import express from 'express';

const router = express.Router();

router.route('/cards')
  .get((req, res) => {
    let { board_id } = req.query;
    let url = process.env.ENV === 'production' ? process.env.SEARCH_SERVER : `localhost:3003`;
    console.log('hitting here')
    axios
      .get(`http://${url}/board-api/cards`, { params: { board_id }})
      .then(({data}) => res.status(200).send(data))
      .catch(() => res.status(404).send('error fetching from Search server'))
  })

export default router;