import React, { ChangeEvent, Component, FormEvent } from "react";
import Categorias from "../../dados/Categorias";
import "./FormularioCadastro.css";

type FormularioCadastroProps = {
	criarNota: Function,
	categorias: Categorias
}

type FormularioCadastroState = {
	categoriasArray: string[]
}

class FormularioCadastro extends Component<FormularioCadastroProps, FormularioCadastroState> {
	private titulo: string
	private texto: string
	private categoria: string

	constructor(props: FormularioCadastroProps) {
		super(props)
		this.titulo = ''
		this.texto = ''
		this.categoria = ''
		this.categoria = 'Sem Categoria'
		this.state = {
			categoriasArray: []
		}
		this.novasCategorias = this.novasCategorias.bind(this)
	}

	componentDidMount(){
		this.props.categorias.inscrever(this.novasCategorias);
	}

	componentWillUnmount() {
		this.props.categorias.desinscrever(this.novasCategorias)
	}

	private novasCategorias(categorias: string[]) {
		this.setState({...this.state, categoriasArray: categorias})
	}

	private handleMudancaTitulo(evento: ChangeEvent<HTMLInputElement>) {
		evento.stopPropagation()
		this.titulo = evento.target.value
	}

	private handleMudancaTexto(evento: ChangeEvent<HTMLTextAreaElement>) {
		evento.stopPropagation()
		this.texto = evento.target.value
	}

	private handleMudancaCategoria(evento: ChangeEvent<HTMLSelectElement>) {
		evento.stopPropagation()
		this.categoria = evento.target.value
	}

	private criarNota(evento: FormEvent) {
		evento.preventDefault()
		evento.stopPropagation()
		this.props.criarNota(this.titulo, this.texto, this.categoria)
	}

	render() {
		return (
			<form
				className="form-cadastro"
				onSubmit={this.criarNota.bind(this)}
			>
				<select 
					className="form"
					onChange={this.handleMudancaCategoria.bind(this)}>
					<option>Sem Categoria</option>
					{this.props.categorias.categorias.map((categoria, index) => {
						return (
							<option key={index}>{categoria}</option>
						)
					})}
				</select>
				<input
					type="text"
					placeholder="Título"
					className="form-cadastro_input"
					onChange={this.handleMudancaTitulo.bind(this)}
				/>
				<textarea
					rows={15}
					placeholder="Escreva sua nota..."
					className="form-cadastro_input"
					onChange={this.handleMudancaTexto.bind(this)}
				/>
				<button className="form-cadastro_input form-cadastro_submit">
					Criar Nota
		        </button>
			</form>
		);
	}
}

export default FormularioCadastro;