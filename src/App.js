import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';

// import LoginPage from 'components/LoginPage/LoginPage';
// import RegistrationPage from 'pages/registrationPage';
import { BackGround, Container } from 'components'


import DashboardPage from 'pages/dashboardPage';
import {
  BackGround,
  Container,
  Header,
  LoginPage,
} from 'components';


const RegistrationPage = lazy(() => import('pages/registrationPage'));



function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>
      {/* <Header /> */}
      <Container>
        {/* <Navigation /> */}
           <Routes>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
          {/* <Routes>
            <Route path="/" element={<LoginPage />}></Route>
          </Routes> */}
        {/* <DashboardPage /> */}
        </Suspense>
   </Container>
      
    </>
  );
}

export default App;
