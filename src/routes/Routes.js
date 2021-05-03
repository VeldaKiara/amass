import{
    BrowserRouter as Router,
    // Redirect,
    Route,
    // Switch,
} from "react-router-dom";
import {Home, Login, Signup, Communities, Events, Rsvp, Forgotpwd, Joinus, Dashboard, Createvents} from "../pages";

const Routes = () => {
    return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/communities" component={Communities} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/rsvp/:id" component={Rsvp} />
      <Route exact path="/forgotpwd" component={Forgotpwd} />
      <Route exact path="/joinus" component={Joinus} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/createvents" component={Createvents} />

    </Router>
    );
};
export default Routes; 