import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import KCard from './components/card/KCard';

function App() {
  return (
    <div className='kanban-main'>
      <h2 className='title pt-2 pb-4'>Kanban Demo Project</h2>
      <Container>
        <a className='add-list-btn' href="#"><FontAwesomeIcon className='plus-icon' icon={faPlus} /> Add a list</a>
        <div className='d-flex mt-5 all-card'>
          <KCard></KCard>
          <KCard></KCard>
        </div>
      </Container>
    </div>
  );
}

export default App;
