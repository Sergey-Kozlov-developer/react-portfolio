import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<ParallaxProvider>
						<App />
					</ParallaxProvider>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
