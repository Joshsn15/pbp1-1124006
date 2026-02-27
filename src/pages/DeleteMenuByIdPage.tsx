import {  useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function DeleteMenu(){
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteMenu = async () => {
            const response = await fetch(`/api/delete-menu/${id}`, {
                method: 'DELETE'
            });
            if(response.status == 200){
                alert("menu berhasil dihapus");
                console.log(id);
            }
            
        }
        navigate('/list-menu');
        deleteMenu();

    })
    
    
}