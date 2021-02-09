export default class Categorias {
    public categorias: string[]
    private inscritos: any[]

    constructor() {
        this.categorias = []
        this.inscritos = []

    }

    inscrever(func: (categorias: string[]) => void) {
        this.inscritos.push(func)
    }

    desinscrever(fun: (categorias: string[]) => void) {
        this.inscritos = this.inscritos.filter(f => f !== fun)
        this.notificar()
    }

    notificar() {
        this.inscritos.forEach(func => func(this.categorias))
    }

    adicionarCategoria(novaCategoria: string) {
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}