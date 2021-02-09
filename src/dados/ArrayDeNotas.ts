import Nota from "./Nota"

export default class ArrayDeNotas {
    public notas: Nota[]
    private inscritos: any[]

    constructor() {
        this.notas = []
        this.inscritos = []
    }
    
    inscrever(func: (notas: Nota[]) => void) {
        this.inscritos.push(func)
    }

    desinscrever(fun: (notas: Nota[]) => void) {
        this.inscritos = this.inscritos.filter(f => f !== fun)
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas))
    }
    
    adcionarNota(titulo: string, texto: string, categoria: string) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
        this.notificar()
    }

    deletarNota(index: number) {
        this.notas.splice(index, 1)
        this.notificar()
    }

}