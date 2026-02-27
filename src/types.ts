
export enum Size {
    large,
    medium,
    small
}

export enum Label {
    halal,
    vegan,
    gluten_free,
    low_cal
}

export enum Kategori {
    minuman,
    makanan
}


export type Menu = {
    id : string,
    nama : string,
    harga : number,
    deskripsi : string,
    size : string,
    label : string,
    kategori : string
}
