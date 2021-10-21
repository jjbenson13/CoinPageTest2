import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import './App.css'
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import { WatchListContextProvider } from './context/watchListContext'

const App = () => {
  return (
    <div>
      <Header />
      <WatchListContextProvider>
      <BrowserRouter>
        <Route exact path='/' component={CoinSummaryPage} />
        <Route exact path='/' component={CoinDetailPage} />
      </BrowserRouter>
      </WatchListContextProvider>

    </div>
  )
}

export default App
