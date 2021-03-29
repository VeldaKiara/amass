import{
    BrowserRouter as Router,
    // Redirect,
    Route,
    // Switch,
} from "react-router-dom";
import {Home, Login, Signup, Communities, Events, Rsvp} from "../pages";

const Routes = () => {
    return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/communities" component={Communities} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/rsvp" component={Rsvp} />
    </Router>
    );
};
export default Routes; 