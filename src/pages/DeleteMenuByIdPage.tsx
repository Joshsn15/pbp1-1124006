// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import type { Menu } from "../types";

// function DeleteMenu(){
//     const { id } = useParams();
//     const [menu, setMenu] = useState<Menu>();
//     const navigate = useNavigate();


//     useEffect(() => {
//         const GetMenus = async () => {
//             const getMenu = await fetch('http://localhost:5174/api/list-menu', {
//                 method: 'DELETE',
//                 headers: {
//                     "content-type": "application/json",
//                 },
//             })
//         }

//         GetMenus();
//     }, [menu])

//     return <>
//         <div>
//             <center>
//                 <h1>Menu berhasil dihapus</h1>
//                 {navigate('/list-menu')}
//             </center>
//         </div>
//     </>
// }