var express = require('express');
var router = express.Router();

const defaultUserItem = { staffid: 1, LoginID: 'admin' };

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.redirect('/');
});


router.post('/', function (req, res, next) {
    render(req, res, next)
});

router.post('/auth', function (req, res, next) {
    render(req, res, next)
});

function render(req, res, next) {
    console.log(req.body)
    res.send({
        status: req.body.ID && req.body.ID == req.body.password,
        user: defaultUserItem
    });
}



module.exports = router;
