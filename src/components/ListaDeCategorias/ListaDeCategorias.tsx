import React, { Component, KeyboardEvent } from 'react'
import Categorias from '../../dados/Categorias'
import './ListaDeCategorias.css'

type ListaDeCategoriasProps = {
    categorias: Categorias
    adicionarCategoria: (valorCategoria: string) => void
}

type ListaDeCategoriasState = {
    categoriasArray: string[]
}

class ListaDeCategorias extends Component<ListaDeCategoriasProps, ListaDeCategoriasState> {

    constructor(props: ListaDeCategoriasProps) {
        super(props)
        this.state = { 
            categoriasArray: []
        }
        this.novasCategorias = this.novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias)
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this.novasCategorias)
    }

    novasCategorias(categorias: string[]) {
        this.setState({...this.state, categoriasArray: categorias})
    }

    private handlerEventoInput(evento: KeyboardEvent<HTMLInputElement>) {
        if (evento.key === "Enter") {
            const valorCategoria = (evento.target as HTMLInputElement).value
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categoriasArray.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this.handlerEventoInput.bind(this)} />
            </section>
        )
    }
}

export default ListaDeCategorias