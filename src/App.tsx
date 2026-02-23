import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router';

// type Post = {
//   id: number;
//   name: string;
//   email: string;
//   address: string;
//   phone: string;
// }
function App() {

  // const[post,setPost] = useState<Post[]>([]);
  const[test,setTest] = useState("");


  const getPosts = async () => {
    const getuserInfo = await fetch("/api/post", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    })
    const data = await getuserInfo.json();
    console.log(data.records);
  }

  getPosts();

  // kalo mau returnnya ada dari data, maka harus ada {data : tipeData} , harus sesuai dari API nya
  // lengkapnya ada di postList minggu 2

  useEffect(() => {
    console.log("useEffect");
  },[test])
return (<>
    <input type="text" onChange={(e) => setTest(e.target.value)} /> {test}
  </>
  );
}

export default App;