import './App.css'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'
import SearchResults from './components/SearchResults'
import TrackList from './components/TrackList'

function App() {

  return (
    <div className="bg-[linear-gradient(to_right,_#30e9ff,_#0d0551)] h-screen flex flex-col items-center space-y-10">
        <Banner></Banner>
        <SearchBar></SearchBar>

        <div className="flex flex-col md:flex-row gap-20 px-20 w-full max-w-screen-xl flex-1 mb-10">
            <SearchResults></SearchResults>
            <TrackList></TrackList>
        </div>
    </div>
  )
}

export default App
