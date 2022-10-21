import * as k from './styles';
import { Basic } from '../Basic';
import { mockBasic } from '../Basic/mock';

function Home() {
  return <Basic {...mockBasic} />;
}

export default Home;
