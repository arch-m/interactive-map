import { shallow } from "enzyme";
import { NavBar } from "../../components/NavBar";

describe('Pruebas a NavBar', () => {

  const wrapper = shallow(<NavBar />);

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text().trim()).toBe('AWA');
  });
  
});
