import React from "react";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import HomeScreen from "./screens/HomeScreen";
function App() {
    return (
        <div>
            <Nav />
            <Cart />
            <HomeScreen />
        </div>
    );
}

export default App;
