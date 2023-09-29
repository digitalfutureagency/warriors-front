export interface VimeoResponse {
    total: number;
    page: number;
    per_page: number;
    paging: any; // Puedes definir el tipo específico si lo necesitas
    data: any[]; // Puedes definir el tipo específico si lo necesitas
    // Agrega otras propiedades si las necesitas
}