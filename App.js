import './App.css';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards';
import Issues from './New folder/Issues/Index';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Root />,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "issues",
      element: <Issues />,
    },
  ]);


  return (
    <>
      {/* <Home /> */}
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Cards />
          <RouterProvider router={ro} />
        </header>
      </div>
    </>
  );
}

export default App;
