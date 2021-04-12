import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import './App.css';

function App() {
  const history = useHistory();

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
