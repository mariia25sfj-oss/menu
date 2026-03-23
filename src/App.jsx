import { menu } from "./data/menu";

function App() {
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Menu items={menu} />
    </div>
  );
}

export default App;