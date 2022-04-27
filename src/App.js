import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChagne = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    // currentArray는 처음엔 비어있고 todolist를 추가 하면 생긴다. => 이후에 대한 설명으로는 todo는 input에 입력하는 새로운 todo value이고 ...currentArray는 이전에 추가했던 todo list 즉
    // => todo, ...currentArray는 새로운toDo와 이전의 todo를 더해서 listUp 하는 코드
    //만약 todo가 4 currentArray가 1 2 3 이었을때 ...currentArray에서 ...을 뺀다면 / [4, [1 2 3]] / 이렇게 됨 ...을 넣으면 /[4, 1 2 3 ] 이렇게 되는것
  };

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChagne}
          type="text"
          placeholder="Write yout to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주고 새로운 array로 return 한다. / 예전 array를 가져와서 변형시킴  */}
      </ul>
    </div>
  );
}

export default App;
