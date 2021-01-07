import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { RefScreen } from '../components/About/RefScreen';
import { MapScreen } from '../components/Map/MapScreen';
import { NavBar } from '../components/NavBar';
import { QuizScreen } from '../components/Quiz/QuizScreen';

export const AppRouter = () => {
  return (
    <Router>

      <NavBar />
      
      <div>
        <Switch>
          <Route path="/referencias">
            <RefScreen />
          </Route>
          <Route path="/cuestionarios">
            <QuizScreen />
          </Route>
          <Route path="/">
            <MapScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
