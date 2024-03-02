import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { app } from "./firebase.config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <App />
  </Provider>
);
