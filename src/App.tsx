import React, { Component } from "react"
import FormularioCadastro from "./components/FormularioCadastro"
import ListaDeNotas from "./components/ListaDeNotas"
import ListaDeCategorias from "./components/ListaDeCategorias"
import "./assets/App.css"
import './assets/index.css'
import Categorias from "./dados/Categorias"
import ArrayDeNotas from "./dados/ArrayDeNotas"

class App extends Component {
	private categorias: Categorias
	private notas: ArrayDeNotas
	
	constructor(props = {}) {
		super(props)
		this.categorias = new Categorias()
		this.notas = new ArrayDeNotas()
	}

	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro
					criarNota={this.notas.adcionarNota.bind(this.notas)}
					categorias={this.categorias} />
				<main className="conteudo-principal">
					<ListaDeCategorias
						categorias={this.categorias}
						adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
					/>
					<ListaDeNotas
						apagarNota={this.notas.deletarNota.bind(this.notas)}
						notas={this.notas} />
				</main>
			</section>
		);
	}
}

export default App;