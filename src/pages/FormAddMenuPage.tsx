import { useState } from "react";
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useNavigate } from "react-router";
export default function FormAddMenuPages() {
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [size, setSize] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [label, setLabel] = useState('')
    const [kategori, setKategori] = useState('')
 
    const navigate = useNavigate();
    const handleAddMenu = async () => {

        const response = await fetch('api/create-menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nama,
                harga,
                size,
                deskripsi,
                label,
                kategori
            })
        });

        if (!response.ok) {
            alert(" gagal");
            return;
        }
        navigate('/list-menu');
    }

    function back(){
        navigate(-1);
    }
    return (
        <>  
            <Grid container spacing={1} direction='column' alignContent='center' justifyContent='center' alignItems='center'>
                <Grid size={2}>
                    <h1>Create Menu</h1>
                </Grid>
                <Grid size={2}>
                    <FormControl>
                        <label htmlFor="nama">nama</label>
                        <TextField type="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid size={2}>
                    <FormControl>
                        <label htmlFor="harga">harga</label>
                        <TextField type="harga" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid size={2}>
                    <FormControl>
                        <label htmlFor="size">size</label>
                        <Select onChange={(e) => setSize(e.target.value)} value={size}>
                            <MenuItem value="small">small</MenuItem>
                            <MenuItem value="medium">medium</MenuItem>
                            <MenuItem value="large">large</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={2}>
                    <FormControl>
                        <label htmlFor="deskripsi">deskripsi</label>
                        <TextField type="deskripsi" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid size={2} >
                    <FormControl>
                        <label htmlFor="label">label</label>
                        <Select onChange={(e) => setLabel(e.target.value)} value={label}>
                            <MenuItem value="vegan">vegan</MenuItem>
                            <MenuItem value="gluten_free">gluten_free</MenuItem>
                            <MenuItem value="halal">halal</MenuItem>
                            <MenuItem value="low_cal">low_cal</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={2}>
                    <FormControl>
                        <label htmlFor="kategori">kategori</label>
                        <Select onChange={(e) => setKategori(e.target.value)} value={kategori}>
                            <MenuItem value="makanan">MAKANAN</MenuItem>
                            <MenuItem value="minuman">MINUMAN</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={2} spacing={3}>
                    <Button variant="contained" type="button" onClick={handleAddMenu}>Add Menu</Button>
                <Button variant="outlined" onClick={back}>Back</Button>
                </Grid>
            </Grid>


    
        </>
    )
}