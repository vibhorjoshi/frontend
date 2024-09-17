import React from "react";
import ReviewAnalytics from "./pages/ReviewAnalytics";

function App() {
    const productUrl = "YOUR_PRODUCT_URL"; // You can replace this with a dynamic value

    return ( <
        div className = "App" >
        <
        h1 > ReviewSense - Product Review Analysis < /h1> <
        ReviewAnalytics productUrl = { productUrl }
        /> <
        /div>
    );
}

export default App;