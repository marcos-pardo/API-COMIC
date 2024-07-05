export type Autor = {
    id: string;
    nombreApellido: string;
    lengua: string;
};

export type Libro = {
    titulo: string,
    autor: Autor,
    anio: number
};