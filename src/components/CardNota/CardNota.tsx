import React, { Component } from "react"
import "./CardNota.css"
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"

type CardProps = {
    indice: number
    titulo: string
    texto: string
    apagarNota: (index: number) => void
    categoriaNota: string
}

class CardNota extends Component<CardProps> {
    apagar = () => {
        const indice = this.props.indice
        this.props.apagarNota(indice)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar} />
                    <h4>{this.props.categoriaNota}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;