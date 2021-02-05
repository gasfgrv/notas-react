import React, { ChangeEvent, Component, FormEvent } from "react";
import "./FormularioCadastro.css";

type NotasProps = {
	criarNota: Function
}

class FormularioCadastro extends Component<NotasProps> {
	private titulo: string
	private texto: string
	
	constructor(props: NotasProps) {
		super(props)
		this.titulo = ''
		this.texto = ''
	}

	private handleMudancaTitulo(evento: ChangeEvent<HTMLInputElement>) {
		evento.stopPropagation()
		this.titulo = evento.target.value
	}

	private handleMudancaTexto(evento: ChangeEvent<HTMLTextAreaElement>) {
		evento.stopPropagation()
		this.texto = evento.target.value
	}

	private criarNota(evento: FormEvent) {
		evento.preventDefault()
		evento.stopPropagation()
		this.props.criarNota(this.titulo, this.texto)
	}

	render() {
		return (
			<form
				className="form-cadastro "
				onSubmit={this.criarNota.bind(this)}
			>
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