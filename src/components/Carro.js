import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
	carro: {
		backgroundColor: '#359a2c',
		color: '#fff',
		padding: '15px',
		borderRadius: '10px',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
		left: 12,
		top: 20,
	},
}

class Carro extends Component {
	render() {
		const { carro, esCarroVisible, mostrarCarro } = this.props
		const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
		return (
			<div>
				<span style={styles.bubble}>
					{/* Solo mostraremos esta alerta si hay elementos agregados al carro */}
					{cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
				</span>
				<button onClick={mostrarCarro} style={styles.carro}>
					Carrito
				</button>
				{esCarroVisible ? <DetallesCarro carro={carro} /> : null}
			</div>
		)
	}
}

export default Carro
