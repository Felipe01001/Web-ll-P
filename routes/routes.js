const express = require('express')
const router = express.Router()

const path = require('path')
const UsersController = require('../controllers/UsersController')
const CatalogController = require('../controllers/CatalogController')

router.get('/users',UsersController.showAll)
router.get('/users/:id',UsersController.show)
router.post('/users',UsersController.create)

router.put('/users/:id',UsersController.update)
router.delete('/users/:id',UsersController.delete)


router.get('/catalog',CatalogController.showAll)
router.get('/catalog/:id',CatalogController.show)
router.post('/catalog',CatalogController.create)

router.put('/catalog/:id',CatalogController.update)
router.delete('/catalog/:id',CatalogController.delete)

router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router