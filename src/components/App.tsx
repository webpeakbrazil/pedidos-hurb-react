import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import SampleApp from './SampleApp';
import './../global.css';

const App = () => {
  return (
    <ZohoDeskProvider>
      <SampleApp />
    </ZohoDeskProvider>
  );
};
export default App;
