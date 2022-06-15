import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import Form from './components/Form';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Menu />
      <Typography variant="h2">Hello World</Typography>
      <Typography variant="body1">This is random text, because I need placeholder text.</Typography>
      <Form/>
      <Routes>
        <Route path="/about"
        element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
