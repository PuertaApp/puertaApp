import {AgentNav, BuyerNav, PropRepNav} from '../components/nav';
import ReactDOM from 'react-dom';

const Nav = (props) => {
    const user = props.role;
    if(user === "agent"){
        return <AgentNav/>;
    } if(user === "buyer") {
    return <BuyerNav/>;
}else{
    return <PropRepNav/>
}

}




export default Nav;