const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.post('/', (req, res) => {
  const newPlayer = new Player({
    array1: req.body.array1,
    array2: req.body.array2
  });

  newPlayer.save()
    .then(() => res.json({ message: 'Datos recibidos y guardados en la base de datos' }))
    .catch(err => res.status(500).json({ message: 'Error al guardar en la base de datos' }));
});

router.get('/', (req, res) => {
  Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(500).json({ message: 'Error al obtener los jugadores de la base de datos' }));
});

module.exports = router;