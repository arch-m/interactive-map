import { useEffect, useState } from "react";
import { loadQuestions } from "../helpers/loadQuestions";
import { loadStates } from "../helpers/loadStates";

export const useFetchStatesData = () => {
  const [state, setState] = useState({
    data:[],
    loading:true
  });

  useEffect(() => {
    loadStates()
      .then( data => {
        setState({
          data: data,
          loading: false
        });
      });
  }, []);

  return state;
}

export const useFetchQuestionsData = () => {
  const [state, setState] = useState({
    data:[],
    loading:true
  });

  useEffect(() => {
    loadQuestions()
      .then (data => { 
        data.forEach( element => {
          element.then( value => {
            setState( values => ({
              data: [...values.data, value ],
              loading: false
            }))
          });
        });
      });  
  }, []);

  return state;
}
