import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error-fallback";
import React from "react";
import { AppRoutes } from "./routes/routes.component";
import { BrowserRouter } from "react-router-dom";
import { IoC } from "./shared/components/ioc";
import { AppContainer } from "./containers";

function App(): React.ReactElement {
  return (
    <IoC.Provider container={AppContainer}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<h1>loading ...</h1>}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </React.Suspense>
      </ErrorBoundary>
    </IoC.Provider>
  );
}

export default App;
