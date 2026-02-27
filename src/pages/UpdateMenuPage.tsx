import { useEffect, useState } from "react";
import { Button, Container, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useNavigate, useParams } from "react-router";
import type { Menu } from "../types";
export default function UpdateMenuPage() {
    const [thisMenu, setThisMenu] = useState<Menu | null>(null);
    const { id } = useParams();
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [size, setSize] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [label, setLabel] = useState('');
    const [kategori, setKategori] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/menu/${id}`);
            const data = await response.json();
            setThisMenu(data);
        };
        fetchPost();
    }, [id]);

    const handleUpdateMenu = async () => {
        const response = await fetch(`/api/update-menu/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nama: nama || thisMenu?.nama, // buat update default value awal dgn get menu by id
                harga: harga || thisMenu?.harga,
                size: size || thisMenu?.size,
                deskripsi: deskripsi || thisMenu?.deskripsi,
                label: label || thisMenu?.label,
                kategori: kategori || thisMenu?.kategori
            })
        });

        if (!response.ok) {
            alert(" gagal");
            return;
        }
        navigate('/list-menu');
    }

    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={1} direction='column' alignContent='center' justifyContent='center' alignItems='center'>
                    <Grid size={6}>
                        <h1>Update Menu</h1>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="nama">nama</label>
                            <TextField type="nama" id="nama" value={nama || (thisMenu?.nama ?? '')} onChange={(e) => setNama(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="harga">harga</label>
                            <TextField type="harga" id="harga" value={harga || (thisMenu?.harga ?? '')} onChange={(e) => setHarga(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="size">size</label>
                            <Select onChange={(e) => setSize(e.target.value)} value={size || (thisMenu?.size ?? '')}>
                                <MenuItem value="small">small</MenuItem>
                                <MenuItem value="medium">medium</MenuItem>
                                <MenuItem value="large">large</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="deskripsi">deskripsi</label>
                            <TextField type="deskripsi" id="deskripsi" value={deskripsi || (thisMenu?.deskripsi ?? '')} onChange={(e) => setDeskripsi(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="label">label</label>
                            <Select onChange={(e) => setLabel(e.target.value)} value={label || (thisMenu?.label ?? '')}>
                                <MenuItem value="vegan">vegan</MenuItem>
                                <MenuItem value="gluten_free">gluten_free</MenuItem>
                                <MenuItem value="halal">halal</MenuItem>
                                <MenuItem value="low_cal">low_cal</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <FormControl>
                            <label htmlFor="kategori">kategori</label>
                            <Select onChange={(e) => setKategori(e.target.value)} value={kategori || (thisMenu?.kategori ?? '')}>
                                <MenuItem value="makanan">MAKANAN</MenuItem>
                                <MenuItem value="minuman">MINUMAN</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6}>
                        <Button variant="contained" type="button" onClick={handleUpdateMenu}>Update Menu</Button>
                    </Grid>
                </Grid>


            </Container>
        </>
    )
}
