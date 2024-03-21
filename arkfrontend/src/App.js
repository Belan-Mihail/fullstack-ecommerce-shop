import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from "react-bootstrap";
import HomeScreen from './components/screens/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ProductScreen from './components/screens/ProductScreen';


const Layout = () => {
  return (
    <Container> 
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


//14 import Homescreens and add it. go to Homescreen
//20 add router dom and create ProductScreen.js indide screens folder and add it here - go to product.js