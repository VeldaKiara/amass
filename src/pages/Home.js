import {Nav, Midsect, Midsectevent, Footer} from '../components';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    console.log(state.user.token)
    return {
      v:state.user.token
    }
  }
const Home = (props) => {
    return(
    <div>
        
        <Nav tok={props.v}/>
        <Midsect />
        <Midsectevent />
        <Footer />
    </div>
    
   
    )
}
// export default Home;
export default connect(mapStateToProps)(withRouter(Home));