import GoogleMaps from '../components/GoogleMaps';
import { AgentNav } from '../components/Nav'
class Map extends React.Component {
  render() {
    return (
      <div>
        <GoogleMaps />     
        <AgentNav /> 
      </div>
    )
  }
}
export default Map;