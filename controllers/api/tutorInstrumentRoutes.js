const router = require('express').Router();
const { User, Instrument, } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Instrument,
                required: true,
                where: {
                    instrument_name: req.params.id
                }
            }]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
