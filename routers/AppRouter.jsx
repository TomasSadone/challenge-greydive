import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Loading } from '../src/components/Loading';
import { UsabilityTest } from '../src/components/UsabilityTest';
import { UsabilityTests } from '../src/components/UsabilityTests';

export const AppRouter = ({ data }) => {
  return (
    <div className='container'>
      {!data ? (
        <Loading />
      ) : (
        <HashRouter basename='challenge-greydive'>
          <Routes>
            <Route path='/' element={<UsabilityTests data={data} />} />

            <Route path='/*' element={<UsabilityTest data={data} />} />
          </Routes>
        </HashRouter>
      )}
    </div>
  );
};
