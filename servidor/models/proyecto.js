const mongoose = require('mongoose');


const proyectoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, 
        trim: true
    },
    descripcion: {
        type: String,
        required: false
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);
