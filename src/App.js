import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORGINALS' fetchUrl={requests.fetchNetflixOrginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRateMovies}/>
      <Row title='Action Movie' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movie' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries Movie' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
