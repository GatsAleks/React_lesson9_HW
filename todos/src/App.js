import { Provider } from "react-redux";
import List from "./components/List";
import store from "./store/store";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <Provider store={store}>
        <List />
      </Provider>
    </Container>
  );
}

export default App;
