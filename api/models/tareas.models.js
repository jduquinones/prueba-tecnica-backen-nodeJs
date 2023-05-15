export function crearTarea(conexion, tarea) {
    try {
      let insertQuery = `INSERT INTO tareas (titulo, descripcion, completado, fecha_limite, prioridad, asignado_a) VALUES ('${tarea.titulo}', '${tarea.descripcion}', '${tarea.completado}',  '${tarea.fechaLimite}',  '${tarea.prioridad}', '${tarea.asignadoA}')`;
  
    return new Promise((resolve, reject) => {
      conexion.query(insertQuery, function (err, result) {
        if (err) {                   
          reject(err);
        };
        
        const { affectedRows } = result

        console.log(result);

        if (affectedRows > 0 ) {
          console.log('Se realizó al menos un INSERT en la base de datos.');
          resolve(result);
            
        }else {
          console.log('No se pudo insertar el dato en la base de datos.');
          resolve(result);           
        }

      });
    });
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo realizar el login');
    }
}

export function leerTarea(conexion) {
    try {
      let insertQuery = `SELECT * FROM tareas`;
  
    return new Promise((resolve, reject) => {
      conexion.query(insertQuery, function (err, result) {
        if (err) {            
          reject(err);
        }
        resolve(result);        
      });
    });
    } catch (error) {
      throw new Error('No se pudo realizar el login');
    }
}

export function leerTareaPorId(conexion, id) {
    try {
      let insertQuery = `SELECT * FROM tareas WHERE id = '${id}'`;
  
    return new Promise((resolve, reject) => {
      conexion.query(insertQuery, function (err, result) {
        if (err) {            
          reject(err);
        }
        resolve(result);       
      });
    });
    } catch (error) {
      throw new Error('No se pudo realizar el login');
    }
}

export function actualizarTarea(conexion, tarea) {
    try {
    
      let insertQuery = `UPDATE tareas SET titulo='${tarea.titulo}', descripcion='${tarea.descripcion}', completado ='${tarea.completado}', fecha_limite='${tarea.fechaLimite}', prioridad='${tarea.prioridad}', asignado_a='${tarea.asignadoA}'  WHERE id= '${tarea.id}'`;
    
      return new Promise((resolve, reject) => {
        conexion.query(insertQuery, function (err, result) {
          if (err) {
            reject(err);
          }   

          const { changedRows } = result

          console.log(result);

          if (changedRows > 0 ) {
              console.log('La tarea se actualizó correctamente.');
              resolve(changedRows);
          }else {
              console.log('No se encontró ninguna tarea para actualizar o los datos son los mismos.');
              resolve(changedRows);
          }
        });      
    });
    } catch (error) {
      throw new Error('No se pudo realizar el login');
    }
}
  

export function eliminarTarea(conexion, id, callback) {
    try {
      let insertQuery = `DELETE FROM tareas WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
  
      conexion.query(insertQuery, function (err, result) {
        if (err) {
          reject(err);
        } 

        const { affectedRows } = result
            
        if (affectedRows > 0 ) {
              console.log('Se elimino el dato de la base de datos.');
              resolve(affectedRows);
        }else {
              console.log('No se pudo eliminar el dato de la base de datos.');
              resolve(affectedRows);
        }
      });
    });
    } catch (error) {
      throw new Error('No se pudo realizar el login');
    }
}