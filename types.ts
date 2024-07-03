export type Usuario = {
    id: string;
    name: string;
    email: string;
    colecciones: Coleccion[];
};

export type Coleccion = {
    id: string;
    name: string;
    comics: Comic[];
};

export type Comic = {
    id: string;
    titulo: string;
    descripcion: string;
    formato: string;
}