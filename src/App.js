import React, { Component } from 'react'
import Layout from './components/Layout'
import Productos from './components/Productos'

class App extends Component {
	// Estado inicial de productos
	state = {
		productos: [
			{ name: 'Tomate', price: '1500', img: '/productos/tomate.jpg' },
			{ name: 'Arbejas', price: '2500', img: '/productos/arbejas.jpg' },
			{ name: 'Lechuga', price: '500', img: '/productos/lechuga.jpg' },
		],
	}
	render() {
		return (
			<div>
				<Layout>
					{/* Componente Productos */}
					<Productos
						agregarAlCarro={() => console.log('Arrow Function agregarCarrito')}
						productos={this.state.productos}
					/>
				</Layout>
			</div>
		)
	}
}

export default App
