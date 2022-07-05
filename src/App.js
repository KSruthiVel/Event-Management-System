import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mailer from "./components/Mailer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CorporateEvent from "./pages/Corporate";
import SocialEvent from "./pages/Social";
import FestiveEvent from "./pages/Festive";
import CommunityEvent from "./pages/Community";
import WeddingEvent from "./pages/Wedding";
import PartyEvent from "./pages/Party";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/corporate-event" exact component={CorporateEvent} />
          <Route path="/social-event" exact component={SocialEvent} />
          <Route path="/festive-event" exact component={FestiveEvent} />
          <Route path="/community-event" exact component={CommunityEvent} />
          <Route path="/wedding-event" exact component={WeddingEvent} />
          <Route path="/party-event" exact component={PartyEvent} />
        </Switch>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
