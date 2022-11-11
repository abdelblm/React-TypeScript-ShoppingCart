import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/abour' element={<About/>} />
      </Routes>
    </Container>
  );
}

export default App;
