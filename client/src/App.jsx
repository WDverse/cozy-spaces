import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";  // Importing the Header component
import SignUp from "./pages/Signup";       // Importing the Signup page component
import Login from "./pages/Login";         // Importing the Login page component
import Propertylist from "./components/PropertyList";  // Importing the PropertyList component
import Profile from "./pages/Profile";     // Importing the Profile page component
import Footer from "./components/Footer";  // Importing the Footer component
import Home from "./pages/Home";           // Importing the Home page component

const httpLink = createHttpLink({
  uri: "/graphql", // URI of the GraphQL server endpoint
});


const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", // Set the "Authorization" header with the token
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink), // Combines the authentication link and the HTTP link
  cache: new InMemoryCache(),      // Initializes an in-memory cache for Apollo Client
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header /> {/* Render the application header */}
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />} // Render the Home component when the path is "/"
              />
              <Route
                path="/spaces"
                element={<Propertylist />} // Render the Propertylist component when the path is "/spaces"
              />
              <Route
                path="/login"
                element={<Login />} // Render the Login component when the path is "/login"
              />
              <Route
                path="/signup"
                element={<SignUp />} // Render the SignUp component when the path is "/signup"
              />
              <Route
                path="/me"
                element={<Profile />} // Render the Profile component when the path is "/me"
              />
            </Routes>
          </div>
          <Footer /> {/* Render the application footer */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
