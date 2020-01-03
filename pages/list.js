import axios from 'axios';

import PropertyList from '../components/PropertyList';
import Nav from './nav';

class Homepage extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/users/buyers/houses")
            console.log(data);
            this.setState({ data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { data } = this.state;
        return(
            <>
            <PropertyList data={data} />
            <Nav />
            </>
        )

    }
}
export default Homepage;