import { shallow } from "enzyme";
import Quiz from "../../../components/Quiz/Quiz";

describe('Pruebas a Quiz', () => {

  const handleAnswerOptionClick = jest.fn();

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

  test('Debe mostrar el componente correctamente', () => {
    expect ( wrapper ).toMatchSnapshot();
  });

  test('Debe llamar cambiar el estado de la pregunta actual cuando se selecciona una respuesta', () => {

    wrapper.find('button').at(1).prop('onClick')();

    // expect( setCurrentQuestion ).toHaveBeenCalled();
    expect( handleAnswerOptionClick ).toHaveBeenCalled();

  })
  

})
