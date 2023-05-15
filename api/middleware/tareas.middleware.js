import moment from 'moment'

export function validarEliminarTarea(req, res, next) {    
    const id = req.body.id;
    console.log(id);
    

    if (!id || id === '') {
        return res.status(400).json({error: 'El ID es requerido'});
    }
    next();
}

export function validarCrearTarea(req, res, next) {
   
    let {titulo, descripcion, fechaLimite, completado, prioridad, asignadoA} = req.body;

    if (titulo && descripcion && fechaLimite && completado, prioridad, asignadoA) {

        if (!moment(fechaLimite).isValid()) {
            return res.status(400).json({error: 'La fechaLimite debe ser una fecha válida'})
        }

        const fechaActual = moment();

        if (!moment(fechaLimite).isAfter(fechaActual)) {
            return res.status(400).json({ error: 'La fechaLimite debe ser posterior a la fecha actual' });
        }

        if (completado === false) {
            completado = 0;
        } else if (completado === true) {
            completado = 1;
        }
        req.body.completado = completado;

        next();

    }else {
        return res.status(400).json({error: 'Los siguientes datos son requeridos: titulo, descripcion, fechaLimite, completado, prioridad y asignadoA'});
    }
}

export function vaildarListartareaPorId(req, res, next) {
    const id = req.params.id;
    console.log(id);

    if (!id || id === '') {
        return res.status(400).json({error: 'El ID es requerido'});
    }
    next();
}