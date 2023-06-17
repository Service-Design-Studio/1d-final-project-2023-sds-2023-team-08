import Homescreen from "./views/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import Recenttransaction from "./views/RecentTransaction";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import Routing from "./routes/Routes";

function App() {
  return (
    <Routing></Routing>
  );
}

export default App;
