// Import dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Import components
import App from "./App.jsx";
import "./i18n.jsx";

// Import files
import "./index.css";

// Render the app in the root of HTML page
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
