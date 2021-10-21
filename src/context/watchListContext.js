import React from "react"
import { createContext, useState } from "react"


export const WatchListContext = createContext()


export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState(['bitcoinn', 'ethereum', 'ripple'])

  return (
    <WatchListContext.Provider value={{ watchList }}>
      {props.childern}
    </WatchListContext.Provider>
  )
}