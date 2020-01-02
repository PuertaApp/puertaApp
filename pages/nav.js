import {AgentNav, BuyerNav} from '../components/AgentNav';
import ReactDOM from 'react-dom';

const Nav = (props) => {
    const isAgent = props.isAgent;
    if(isAgent === true){
        return <AgentNav/>;
    } else {
    return <BuyerNav/>;}

}


const Test =()=> {
    return(
        <Nav isAgent={true}/>
    )
}

export default Test;