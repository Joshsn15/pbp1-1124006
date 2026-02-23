import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Divider, Avatar, ListItemAvatar } from "@mui/material";
import { useNavigate } from "react-router";
import { Menu } from "../types.ts";


export default function GetAllMenu() {

    const [menus, setMenus] = useState<Menu[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
    const GetMenus = async () => {
        const getMenu = await fetch('http://localhost:5174/api/list-menu', {
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
        })
        const data = await getMenu.json();
        setMenus(data)
    }
    
        GetMenus();
    },[menus])


    function updateMenu(id: string) {
        return navigate(`/update-menu/:${id}`)
    }
    function deleteMenu(id: string) {
        return navigate(`/delete-menu/:${id}`)
    }
    return <>
        <h1>List Menu</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {menus.map((menu) => (
                <ListItem alignItems="flex-start" key={menu.id}>
                    <ListItemAvatar>
                        <Avatar alt={menu.nama} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>

                    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>

                        <ListItemText
                            sx={{ fontWeight: 'bold', color: 'primary.main' }}
                            primary={
                                <Typography
                                    sx={{ display: 'block', maxWidth: '400px', fontWeight: 'bold' }}
                                    component="span"
                                    variant="h6"
                                    color="text.primary"
                                >
                                    {menu.nama}
                                </Typography>
                            }

                            secondary={
                                <Typography

                                    display="inline"
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                    textOverflow="ellipsis"
                                    // maxWidth="60px"
                                    overflow="hidden"
                                    whiteSpace="nowrap"
                                >
                                    {menu.deskripsi}

                                    <Typography variant="body2" color="text.secondary" >
                                        {menu.harga}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" >
                                        { }
                                    </Typography>
                                </Typography>

                            }
                        />
                        <button onClick={() => updateMenu(menu.id)}>Update</button>
                        <button onClick={() => deleteMenu(menu.id)}>Delete</button>
                        <Divider variant="inset" />
                    </div>
                </ListItem>
            ))}
        </List>
    </>
}

