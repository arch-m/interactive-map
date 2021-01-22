import { shallow } from "enzyme";
import { CardInfo } from "../../../components/Card/CardInfo";

describe('Pruebas a CardInfo', () => {

  const { name, description } = {
    name: 'estado',
    description: 'caracteristicas'
  }

  const wrapper = shallow(<CardInfo name={ name } description={ description } />);

  test('Debe mostrarse correctamente el nombre y descripción', () => {
    expect( wrapper.find('h3').text().trim() ).toEqual(name);
    expect( wrapper.find('span').text().trim() ).toEqual(description);
  });
  
});
