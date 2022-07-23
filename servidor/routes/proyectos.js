const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');



//Crear proyecto 
//api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);
// obtener todos los proyectos 
router.get('/',
    auth,
    proyectoController.crearProyecto
);
// Actualizar proyecto via ID
router.put('/:id', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatoio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

// Eliminar un Proyecto
router.delete('/:id', 
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;