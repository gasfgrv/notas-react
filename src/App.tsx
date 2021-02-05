import React, { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

type Nota = {
	titulo: string
	texto: string
}

type NotasState = {
	notasState: Nota[]
}

class App extends Component<{}, NotasState> {
	constructor(props = {}, private notas: Nota[]) {
		super(props)
		this.state = {
			notasState: []
		}
	}

	criarNota(titulo: string, texto: string) {
		const novaNota = { titulo, texto }
		this.notas = [...this.state.notasState, novaNota]
		const novoEstado = {
			notasState: this.notas
		}
		this.setState(novoEstado)
	}

	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro criarNota={this.criarNota.bind(this)} />
				<ListaDeNotas notas={this.state.notasState} />
			</section>
		);
	}
}

export default App;