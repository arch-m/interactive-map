import { useEffect, useState } from "react";
import { loadStates } from "../helpers/loadStates";

export const useFetchData = () => {
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
