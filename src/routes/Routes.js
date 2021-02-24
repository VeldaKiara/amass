import{
    BrowserRouter as Router,
    // Redirect,
    Route,
    // Switch,
} from "react-router-dom";
import Home from "../pages/Home";
const Routes = () => {
    return(
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
    );
};
export default Routes; 