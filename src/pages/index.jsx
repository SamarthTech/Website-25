import Activity from "./Activity";
import Contact from "./Contact";
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";
import Sponsor from "./Sponsor";
import Team from "./Team";
import About from"./About";
import Exam from"./Exam";
import Aspirants from "./Aspirants";
import Study from "./Study";
import Results from "./Results";


const routes = [
  { path: '/', component: <Home />},
  { path: '/events', component: <Events />},
  { path: '/gallery', component: <Gallery />},
  { path: '/activity', component: <Activity />},
  { path: '/sponsor', component: <Sponsor />},
  { path: '/team', component: <Team />},
  { path:'/About', component:<About/>},
  { path: '/contact', component: <Contact />},
  { path : '/Resources',component: <Exam />},
  { path : '/Aspirants',component: <Aspirants />},
  { path : '/study',component: <Study />},
  { path : '/results',component: <Results />},
  

]

export default routes;
