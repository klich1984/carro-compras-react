import { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
	render() {
		// Extraer las propiedades
		const { productos, agregarAlCarro } = this.props
		return (
			<div>
				{/* Iterar todos los productos  */}
				{productos.map( producto => 
						<Producto
							agregarAlCarro={agregarAlCarro}
							key={producto.name}
							producto={producto}
						/>)}
			</div>
		);
	}
}

export default Productos;