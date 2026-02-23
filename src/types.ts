
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

type CommonDatabaseProperties = {
    createdAt : string,
    updatedAt : string
}
export type Menu = & CommonDatabaseProperties &{
    id : string,
    nama : string,
    harga : number,
    deskripsi : string,
    size : string,
    label : string,
    kategori : string
}
