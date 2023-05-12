const url = "http://localhost:3000/upload";

function App() {
  return (
    <>
      <h1>This is my basic app</h1>
      <form action={`${url}`} method="POST">
        <input type="file" name="myImage" />
        <button>Send</button>
      </form>
    </>
  );
}

export default App;
