import { useEffect, useState } from 'react';
import { AppRouter } from '../routers/AppRouter';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('data/data.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.warn);
  }, []);
  return <AppRouter data={data} />;
}

export default App;
