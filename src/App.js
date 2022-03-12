import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

import KCard from './components/card/KCard';

function App() {
  return (
    <div className='kanban-main'>
      <h2 className='title pt-2 pb-4'>Kanban Demo Project</h2>
      <KCard></KCard>
    </div>
  );
}

export default App;
