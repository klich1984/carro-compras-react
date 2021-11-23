import React, { Component } from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Title from './components/Title'

class App extends Component {
	state = {
		// Estado inicial de productos
		productos: [
			{ name: 'Tomate', price: '1500', img: '/productos/tomate.jpg' },
			{ name: 'Arbejas', price: '2500', img: '/productos/arbejas.jpg' },
			{ name: 'Lechuga', price: '500', img: '/productos/lechuga.jpg' },
		],
		// Estado inicial del carrito de compras
		carro: [
			// { name: 'Tomate', price: '1500', img: '/productos/tomate.jpg', cantidad: 1 },
		],
		// Estado para saber si se muestra o no los productos del carro
		esCarroVisible: false,
	}


	// metodo que manejara la logica de agregar al carro
	agregarAlCarro = (producto) => {
		// console.log(producto)
		// Crear el producto en el arreglo de carro
		// Buscar si ya existe el nombre dentro del estado de carro de compras
		const { carro } = this.state
		if (carro.find( x => x.name === producto.name)) {
			// Codigo si ya existe el producto dentro del array carro
			const newCarro = carro.map(el => el.name === producto.name
				? ({
					...el,
					cantidad: el.cantidad + 1
				})
				: el)
				return this.setState({ carro: newCarro })
		}
		// si no se encuentra se ejecuta esto
		return this.setState({
			carro: this.state.carro.concat({
				...producto,
				cantidad: 1
			})
		})
	}

	mostrarCarro = () => {
		// Si no hay productos en el carro no cambie el estado
		if (!this.state.carro.length)
			return

		this.setState({ esCarroVisible: !this.state.esCarroVisible })
	}

	render() {
		// console.log(this.state.carro)
		const { esCarroVisible } = this.state
		return (
			<div>
				<Navbar
					carro={this.state.carro}
					esCarroVisible={esCarroVisible}
					mostrarCarro={this.mostrarCarro}
				/>
				<Layout>
					{/* Componente Productos */}
          <Title />
					<Productos
						agregarAlCarro={this.agregarAlCarro}
						productos={this.state.productos}
					/>
				</Layout>
			</div>
		)
	}
}

export default App
