import "./App.css";
import Img from "../../src/Img";

function App() {
  const arr = new Array(20).fill(0);

  return (
    <>
      <div>123</div>
      {arr.map((item, index) => (
        <Img
          key={item + index}
          src={`https://s2.loli.net/2023/04/20/4t8NgpMxkdVCJcs.png?index=${
            item + index
          }`}
          decode
          width={400}
          height={300}
        />
      ))}
    </>
  );
}

export default App;
