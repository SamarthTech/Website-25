import {React , useEffect} from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scroll/ScrollToTop'
import ScrollUp from './components/scroll/ScrollUp'
import routes from './pages';
import Page404 from './pages/404';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);

    return (
        <>
            
            <Header />
              <ScrollUp />
              <Routes>

                {
                    routes.map((data,idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
            </Routes>

            <ScrollToTop />

            <Footer />
            <Analytics />
            {/* <SpeedInsights/> */}
    
        </>
    );
}

export default App;
