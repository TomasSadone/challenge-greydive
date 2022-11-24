import React from 'react';
import parse from 'html-react-parser';

export const Tareas = ({ preguntas }) => {
  return (
    <>
      {preguntas.map((pregunta, i) => (
        <div className='color-accent-1 tareas ' key={pregunta.texto}>
          <hr />
          <h3 className='color-accent-2 fs-24'>{`Tarea ${i + 1}:`}</h3>
          <p className='color-accent-1 fw700'>
            {parse(pregunta.texto.replace('\\n', '<br />'))}
          </p>
          {pregunta.tipoTarea === 'opinionScale5' && (
            <p>{pregunta.respuesta}</p>
          )}
          <p>{`Duración de la tarea: ${pregunta.tiempo}`}</p>
        </div>
      ))}
    </>
  );
};
