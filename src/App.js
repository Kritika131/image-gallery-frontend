
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import CardSection from './components/CardSection';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
        {/* <Route path="/" element={<AddCard/>}> */}
          <Route path='/' element={<CardSection/>}/>
          <Route path='/addcard' element={<AddCard/>}/>
          <Route path='/editcard/:id' element={<EditCard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
