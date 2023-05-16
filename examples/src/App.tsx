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
          // decode
          width={400}
          height={300}
          type="lazy"
          loader={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                background: "#d7d7d7",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              loading
            </div>
          }
        />
      ))}
      <Img
        src={"www.baidu.com/test.png"}
        // decode
        width={400}
        height={300}
        type="lazy"
        loader={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              background: "#d7d7d7",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            loading
          </div>
        }
        unloader={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              background: "black",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            error
          </div>
        }
      />
    </>
  );
}

export default App;
