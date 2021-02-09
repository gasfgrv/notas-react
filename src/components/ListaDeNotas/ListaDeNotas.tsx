import React, { Component } from "react";
import ArrayDeNotas from "../../dados/ArrayDeNotas";
import Nota from "../../dados/Nota";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";

type ListaDeNotasProps = {
	notas: ArrayDeNotas
	apagarNota: (index: number) => void
}

type ListaDeNotasState = {
	notasArray: Nota[]
}

class ListaDeNotas extends Component<ListaDeNotasProps, ListaDeNotasState> {
	constructor(props: ListaDeNotasProps) {
		super(props)
		this.state = {
			notasArray: []
		}
		this.novasNotas = this.novasNotas.bind(this)
	}

	componentDidMount() {
		this.props.notas.inscrever(this.novasNotas)
	}

	componentWillUnmount() {
		this.props.notas.desinscrever(this.novasNotas)
	}

	private novasNotas(notas: Nota[]) {
		this.setState({ ...this.state, notasArray: notas })
	}

	render() {
		return (
			<ul className="lista-notas">
				{this.state.notasArray.map((nota, index) => {
					return (
						<li className="lista-notas_item" key={index}>
							<CardNota
								indice={index}
								titulo={nota.titulo}
								texto={nota.texto}
								apagarNota={this.props.apagarNota}
								categoriaNota={nota.categoria} />
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;