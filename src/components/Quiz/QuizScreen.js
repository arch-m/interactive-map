import React from 'react';
import { useFetchQuestionsData } from '../../hooks/useFetchData';
import Quiz from './Quiz';

export const QuizScreen = () => {


  const { data:questions, loading } = useFetchQuestionsData();

  if(!loading) 
    console.log(questions);

  return (
    <>
    { !loading && <Quiz questions={ questions }/>}
      
    </>
  );
}
