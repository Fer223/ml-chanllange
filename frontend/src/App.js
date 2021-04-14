import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search-results">
          <SearchResults />
        </Route>
        <Route path="/item-details">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
