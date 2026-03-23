import { menu } from "./data/menu";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Menu items={menu} />
    </div>
  );
}

export default App;