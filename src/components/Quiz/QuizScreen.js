import React from 'react';
import { useFetchQuestionsData } from '../../hooks/useFetchData';
import Quiz from './Quiz';

export const QuizScreen = () => {


  const { data:questions, loading } = useFetchQuestionsData();

  return (
    <>
    { !loading && <Quiz key={ questions.questionText } questions={ questions }/>}
      
    </>
  );
}
