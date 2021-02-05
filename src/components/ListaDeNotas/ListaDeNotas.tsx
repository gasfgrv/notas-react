import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";

type NotasModel = {
	titulo: string
	texto: string
}

type notasProps = {
	notas: NotasModel[]
}

class ListaDeNotas extends Component<notasProps> {
	render() {
		return (
			<ul className="lista-notas">
				{this.props.notas.map((nota, index) => {
					return (
						<li className="lista-notas_item" key={index}>
							<CardNota titulo={nota.titulo} texto={nota.texto}/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;