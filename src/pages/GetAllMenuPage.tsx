import { useEffect, useState } from "react";
import { Typography, Grid, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import type { Menu } from "../types.ts";


export default function GetAllMenu() {

    const [menus, setMenus] = useState<Menu[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const GetMenus = async () => {
            const getMenu = await fetch('http://localhost:5173/api/list-menu')
            const data = await getMenu.json();
            setMenus(data);
        }
        GetMenus();
    }, [])

    // function updateMenu(id: string) {
    //     return navigate(`/update-menu/:${id}`)
    // }
    // function deleteMenu(id: string) {
    //     return navigate(`/delete-menu/:${id}`)
    // }
    return <>
    <Container >
        <Grid container  direction="column" alignItems="center" justifyContent="center">
        <Grid >
            <h1>List Menu</h1>
        </Grid>
        <Button variant="contained" onClick={() => navigate('/create-menu')}>Tambah Menu</Button>
        </Grid>

        <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
            {menus.map((menu) => (
                <Grid key={menu.id} size={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
                        <Typography
                            sx={{ display: 'block', maxWidth: '400px', fontWeight: 'bold' }}
                            component="span"
                            variant="h5"
                            color="text.primary"
                        >
                            {menu.nama}
                        </Typography>
                        <Typography display="inline" component="span" variant="body2" color="text.primary" fontSize={20} textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap"></Typography>
                        {menu.deskripsi}
                        <Typography display="inline"  variant="body2" color="text.secondary" fontSize={20}>
                            {menu.harga}
                        </Typography>
                        <Grid direction={'column'} spacing={2}>

                        <Button variant="contained" onClick={() => navigate(`/update-menu/${menu.id}`)}>Update</Button>
                        <Button variant="contained" onClick={() => navigate(`/delete-menu/${menu.id}`)}>Delete</Button>
                        <Button variant="contained" onClick={() => navigate(`/menu/${menu.id}`)}>Detail</Button>

                        </Grid>
                    </div>
                   
                </Grid>

            ))
            }




        </Grid>
    </Container>
    </>
}

