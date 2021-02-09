export default class Nota {
    constructor(
        public titulo: string,
        public texto: string,
        public categoria: string
    ) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}