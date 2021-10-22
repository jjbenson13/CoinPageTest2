import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import "./App.css";
import Header from "./components/header";

const App = () => {
  return (
    <div>

        <BrowserRouter>
        <Header/>
          <Route exact path="/" component={CoinSummaryPage} />
          <Route exact path="/" component={CoinDetailPage} />
        </BrowserRouter>

    </div>
  );
};

export default App;
