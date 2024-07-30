import {Router} from 'express'
const router = Router()

import ProductService from '../service/productoService.js'
const Producto = new ProductService()

router.get('/',async(req,res) => {
    try {
        const productos = await Producto.getProductos()
        return res.render('productos/index',{productos})
    } catch (err) {
        console.log('error'+err)
    }
})

router.post('/',async(req,res) => {
    try {
        const producto = req.body
        const respuesta = await Producto.addProducto(producto)
        return res.status(200).json(respuesta)
    } catch (err) {
        console.log('error'+err)
    }
})

router.put('/:id',async(req,res) => {
    try {
        const id = req.params
        const producto = req.body
        const respuesta = await Producto.updateProductoById(id, producto)
        return res.status(200).json(respuesta)
    } catch (err) {
        console.log('error'+err)
    }
})

export default router