const db = require('../models');

async function connectDatabase() {
    try {
        const komik = db.Komik.findAll();
        res.status(200).json(komik);
    } catch (error) {
        console.error('Error retrieving komik: ', error.message);
        res.status(500).json({ error: 'An error occurred while retrieving komik.' });
    }
}