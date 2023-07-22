import React from 'react'
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom'
import Header from './components/Header'
import Feed  from './components/Feed'
import SearchResult from './components/SearchResult'

import VideoaDetails from './components/VideoDetails'
import { AppContext} from './context/contextApi'
const App = () => {
  return (
    <AppContext>
    <Router>
     <div className="flex flex-col h-full">
      <Header/>
        <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>} />
        <Route path='/video/:id' element={<VideoaDetails/>} />
      </Routes>
     </div>
    </Router>
    </AppContext>   
  )
}

export default App 