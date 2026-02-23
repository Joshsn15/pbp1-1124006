import { useState } from "react";
import { Box, Button, FormControl, Select } from '@mui/material'
export default function FormAddMenuPages() {
    const [id, setId] = useState('')
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [size, setSize] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [label, setLabel] = useState('')
    const [kategori, setKategori] = useState('')

    const handleAddMenu = async () => {

        const response = await fetch('api/create-menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                nama,
                harga,
                size,
                deskripsi,
                label,
                kategori
            })
        });

        if (!response.ok) {
            alert("Login gagal");
            return;
        }
    }

    return (
        <>
            <Box>
                <FormControl component="form" sx={{ maxWidth: 'sm' }}>

                    <input type="hidden" id="id" value={crypto.randomUUID()} onChange={(e) => setId(e.target.value)} />
                    <label htmlFor="nama">nama</label>
                    <input type="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />

                    <label htmlFor="harga">harga</label>
                    <input type="harga" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                    <label htmlFor="size">size</label>
\                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select" onChange={(e) => setSize(e.target.value)} value={size}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </Select>
                    <label htmlFor="deskripsi">deskripsi</label>
                    <input type="deskripsi" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />

                    <label htmlFor="label">label</label>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select" onChange={(e) => setLabel(e.target.value)} value={size}>
                        <option value="vegan">vegan</option>
                        <option value="gluten_free">gluten_free</option>
                        <option value="halal">halal</option>
                        <option value="low_cal">low_cal</option>
                    </Select>
                    <label htmlFor="kategori">kategori</label>
                    <input type="kategori" id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} />
                    <br />
                    <Button variant="contained" type="button" onClick={handleAddMenu}>Login</Button>

                </FormControl>
            </Box>



        </>
    )


}