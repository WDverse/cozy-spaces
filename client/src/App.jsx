import Header from "./components/Header";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Propertylist from "./components/PropertyList";



function App() {
  return (
    <>
<Header/>
      <SignUp />
      <Login/>
      <Propertylist/>
    </>
  );
}

export default App;
