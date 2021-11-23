import { Component } from 'react'
import Producto from './Producto'

/* line Styles */
const styles = {
	productos: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
}


class Productos extends Component {
	render() {
		// Extraer las propiedades
		const { productos, agregarAlCarro } = this.props
		return (
			<div style={styles.productos}>
				{/* Iterar todos los productos  */}
				{productos.map((producto) => (
					<Producto
						agregarAlCarro={agregarAlCarro}
						key={producto.name}
						producto={producto}
					/>
				))}
			</div>
		)
	}
}

export default Productos
