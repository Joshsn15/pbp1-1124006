import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Menu } from "../types";
import { List, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";

export default function PostDetail() {
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
        <h1>{menu?.nama}</h1>
        <ListItemAvatar>
            <Avatar alt={menu?.nama} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
            <Avatar alt={menu?.nama} src={'/static/images/avatar/1.jpg'} />
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
                            {menu?.deskripsi}
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
                            {menu?.harga}

                            <Typography variant="body2" color="text.secondary" >
                                {menu?.kategori}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                {menu?.label}
                            </Typography>
                        </Typography>

                    }
                />

            </div>
            <div>

            </div>
            <button onClick={back}>Back</button>

        </List>
    </>
}