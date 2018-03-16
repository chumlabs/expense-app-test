import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' }); // set test database

Enzyme.configure({
  adapter: new Adapter()
});
