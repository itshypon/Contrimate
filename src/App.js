import Login from './pages/Auth/Login';
import Issues from './pages/homepage/Issues';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {

  const Template = ({ children }) => {
    return (
      <>
      <Navbar />
      {children}
      <Footer />
      </>
    )
  }


  return (
    <>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Template><Carousel /><Issues /></Template>}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
          {/* <RouterProvider router={router} /> */}
        </header>
      </div>
    </>
  );
}

export default App;
