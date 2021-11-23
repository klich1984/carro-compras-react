import { Component } from 'react'
import BubbleAlert from './BubbleAlert'

const styles = {
	carro: {
		backgroundColor: '#359a2c',
		color: '#fff',
		padding: '15px',
		borderRadius: '10px',
		cursor: 'pointer'
	},
	bubble: {
		position: 'relative',
		left: 12,
		top: 20
	}
}

class Carro extends Component {
	render() {
		return (
			<div>
				<span style={styles.bubble}>
					<BubbleAlert value={10}/>
				</span>
				<button style={styles.carro}>
					Carrito
				</button>
			</div>
		)
	}
}

export default Carro
