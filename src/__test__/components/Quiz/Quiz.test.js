import { shallow } from "enzyme";
import Quiz from "../../../components/Quiz/Quiz";

describe('Pruebas a Quiz', () => {

  const questions = [
    {
      questionText: 'Pregunta 1',
      answerOptions: [
        {answerText: 'respuesta 1', isCorrect: false },
        {answerText: 'respuesta 2', isCorrect: true },
        {answerText: 'respuesta 3', isCorrect: false },
        {answerText: 'respuesta 4', isCorrect: false },
      ]
    },
    {
      questionText: 'Pregunta 2',
      answerOptions: [
        {answerText: 'respuesta 1', isCorrect: false },
        {answerText: 'respuesta 2', isCorrect: true },
        {answerText: 'respuesta 3', isCorrect: false },
        {answerText: 'respuesta 4', isCorrect: false },
      ]
    },
  ];
  const wrapper = shallow(<Quiz questions={ questions } />);

  test('Debe mostrarse una pregunta y cuatro posibles respuestas', () => {
    expect(  wrapper.find('h2').text().trim() ).toEqual('Pregunta 1');
    expect(  wrapper.find('button') ).toHaveLength(4);
  });
  

  test('Debe pasar a la pregunta siguiente cuando se selecciona una respuesta', () => {
    wrapper.find('button').at(1).prop('onClick')();
    expect(  wrapper.find('h2').text().trim() ).toEqual('Pregunta 2');
  });
  
  test('Debe mostrar el score al contestar todas las preguntas', () => {
    wrapper.find('button').at(1).prop('onClick')();
    expect(  wrapper.find('h1').text().trim() ).toEqual('Resolviste bien 2 de 2!');
  });

});
