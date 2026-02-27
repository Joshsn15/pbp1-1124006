import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { Menu } from "../types";
import { Typography, Button, Grid } from "@mui/material";

export default function MenuDetails() {
    const { id } = useParams();
    const [menu, setMenu] = useState<Menu>();
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/menu/${id}`);
            const data = await response.json();
            setMenu(data);
        };
        fetchPost();
    }, [id]);
    return <>
        <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
            <h1>List Menu</h1>
            <Button variant="contained" onClick={() => navigate('/create-menu')}>Tambah Menu</Button>
            <Button variant="outlined" onClick={() => navigate('/list-menu')}>List Menu</Button>
            <Button variant="outlined" onClick={back}>Back</Button>
        </Grid>

        <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
            {menu && (
                <Grid key={menu.id} size={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
                        <Typography
                            sx={{ display: 'block', maxWidth: '400px', fontWeight: 'bold' }}
                            component="span"
                            variant="h6"
                            color="text.primary"
                        >
                            {menu.nama}
                        </Typography>
                        <Typography display="inline" component="span" variant="body2" color="text.primary" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap"></Typography>
                        {menu.deskripsi}
                        <Typography variant="body2" color="text.secondary" >
                            {menu.harga}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            {menu.size}
                        </Typography>
                    </div>
                </Grid>

            )
            }




        </Grid>

    </>
}