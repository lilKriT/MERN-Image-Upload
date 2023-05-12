import { useState } from "react";
import axios from "axios";
const url = "http://localhost:3000/upload";

function App() {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const res = await axios.post(url, file);
  };

  return (
    <>
      <h1>This is my basic app</h1>
      <form
        action={`${url}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type="file" name="myImage" onChange={(e) => onFileChange(e)} />
        <button>Send</button>
      </form>
    </>
  );
}

export default App;
