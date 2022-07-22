const Proyecto = require('../models/proyecto');
const { validationResult } = require('express-validator');


exports.crearProyecto = async (req, res) => {
    //Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    
    try {
        const proyecto = new Proyecto(req.body);
        //Guardar el creador del proyecto via jwt
        proyecto.creador = req.usuario.id;

        //Guardamos el proyecto 
        await proyecto.save();
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear proyecto');
    }
}

//Obtiene todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({ creado: -1 });
        res.json({ proyectos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener los proyectos');
    }
}
