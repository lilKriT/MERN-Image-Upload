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

    const formData = new FormData();
    formData.append("myImage", file);

    const res = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <>
      <h1>This is my basic app</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" onChange={(e) => onFileChange(e)} />
        <button>Send</button>
      </form>
    </>
  );
}

export default App;
