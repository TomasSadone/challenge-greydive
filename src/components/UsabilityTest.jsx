import React from 'react';
import { useLocation } from 'react-router';
import { Player } from 'video-react';
import parse from 'html-react-parser';
import { Tareas } from './Tareas';

export const UsabilityTest = ({ data }) => {
  const location = useLocation();
  const testName = () => {
    const string = location.pathname.slice(location.pathname.lastIndexOf('/'));
    const string2 = string.replace('/', '');
    return string2;
  };
  console.log(testName());
  console.log(location);
  // const correspondingProps
  const {
    cliente,
    timeTest,
    linkVideo,
    escenario,
    idVideo,
    preguntas,
    transcripcion,
  } = data.find(test => test.cliente === testName());
  return (
    <div className='flow'>
      <h1 className='uppercase text-decoration'>{cliente}</h1>
      <h2>Test: Test de usabilidad en el sitio web</h2>
      <Player>
        <source src={linkVideo} />
      </Player>
      <h2>Transcripción</h2>
      <div className='transcripcion'>{parse(transcripcion)}</div>
      <h2>Tareas</h2>
      <p className='color-accent-1'>Escenario: {escenario}</p>
      <Tareas preguntas={preguntas} />
    </div>
  );
};

/*
        <div className='App'>
          {data.map(test => {
            const {
              cliente,
              escenario,
              idVideo,
              linkVideo,
              preguntas,
              timeTest,
              transcripcion,
            } = test;
            return (
              <UsabilityTest
                cliente={cliente}
                escenario={escenario}
                idVideo={idVideo}
                linkVideo={linkVideo}
                preguntas={preguntas}
                timeTest={timeTest}
                transcripcion={transcripcion}
              />
            );
          })}
        </div>
*/
