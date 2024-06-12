import LocalButton from './Button';
import { Header, Footer } from '../../sharedComponent/src';


const App = () => (
  <div>
    <Header/>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer/>
  </div>
);

export default App;
