import { useState } from "react";
import { Box, Button, FormControl } from '@mui/material'
import { useNavigate } from "react-router";
export default function FormAddMenuPages() {
    const [id, setId] = useState('')
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [size, setSize] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [label, setLabel] = useState('')
    const [kategori, setKategori] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')
    const navigate = useNavigate();
    const handleAddMenu = async () => {
        const response = await fetch('api/update-menu', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                nama,
                harga,
                size,
                deskripsi,
                label,
                kategori,
                createdAt,
                updatedAt
            })
        });

        if (!response.ok) {
            alert("Login gagal");
            return;
        }
        navigate('/list-menu');

    }

    return (
        <>
            <Box>
                <FormControl component="form" sx={{ maxWidth: 'sm' }}>

                    <input type="hidden" id="id" value={id} onChange={(e) => setId(e.target.value)} />
                    <label htmlFor="nama">nama</label>
                    <input type="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />

                    <label htmlFor="harga">harga</label>
                    <input type="harga" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                    <label htmlFor="size">size</label>
                    <input type="size" id="size" value={size} onChange={(e) => setSize(e.target.value)} />
                    <select onChange={(e) => setSize(e.target.value)} value={size}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                    <label htmlFor="deskripsi">deskripsi</label>
                    <input type="deskripsi" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />

                    <label htmlFor="label">label</label>
                    <input type="label" id="label" value={label} onChange={(e) => setLabel(e.target.value)} />
                    <select onChange={(e) => setLabel(e.target.value)} value={size}>
                        <option value="vegan">vegan</option>
                        <option value="gluten_free">gluten_free</option>
                        <option value="halal">halal</option>
                        <option value="low_cal">low_cal</option>
                    </select>
                    <label htmlFor="kategori">kategori</label>
                    <select onChange={(e) => setKategori(e.target.value)} value={kategori}>
                        <option value="makanan">MAKANAN</option>
                        <option value="minuman">MINUMAN</option>
                    </select>
                    <input type="hidden" id="createdAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                    <input type="hidden" id="updatedAt" value={new Date().toString()} onChange={(e) => setUpdatedAt(e.target.value)} />

                    <br />
                    <Button variant="contained" type="button" onClick={handleAddMenu}>Update</Button>

                </FormControl>
            </Box>



        </>
    )


}