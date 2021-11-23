import { Component } from 'react'
import Carro from './Carro'
import Logo from './Logo'

const styles = {
	navbar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100px',
		justifyContent: 'space-between',
		padding: '0 50px',
		position: 'relative',
		boxShadow: '0 2px 3px rgb(0, 0, 0, 0.4'
	}
}

class Navbar extends Component {
	render() {
		const { carro, esCarroVisible, mostrarCarro } = this.props
		return (
			<nav style={styles.navbar}>
				<Logo />
				<Carro
					carro={carro}
					esCarroVisible={esCarroVisible}
					mostrarCarro={mostrarCarro}
				/>
			</nav>
		)
	}
}

export default Navbar