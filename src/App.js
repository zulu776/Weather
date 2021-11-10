import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Context
import { CityProvider } from "./Context/CityContext";

//Layout
import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation"
import Error from "./Pages/Error/Error";


const App = () => {
  return (
    <div>
      <CityProvider>
        <BrowserRouter>
          <MainLayout>
            <Switch>

              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/weather/:name" exact>
                <WeatherInformation />
              </Route>

              <Route path="*" exact>
                <Error />
              </Route>

            </Switch>
          </MainLayout>
        </BrowserRouter>
      </CityProvider>
    </div>
  );
}

export default App;
