import "./App.css";
import Img from "../../src/Img";

function App() {
  const arr = new Array(100).fill(0);
  return (
    <>
      {arr.map((item, index) => (
        <Img
          src={`https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png?index=${
            item + index
          }`}
          style={{ width: 500 }}
        />
      ))}
    </>
  );
}

export default App;
