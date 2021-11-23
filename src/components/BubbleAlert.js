import { Component } from 'react'

const styles = {
	bubbleAlert: {
		backgroundColor: '#e9725a',
		borderRadius: '15px',
		color: '#fff',
		padding: '2px 10px',
		fontSize: '0.9rem',
		width: '20px'
	}
}

class BubbleAlert extends Component {
	// Metodo que mostrara el numero de elementos agregados al carrito
	getNumber(n) {
		if (!n)
			return ''
		return n > 9 ? '9+' : n
	}

	render() {
		// Capturo las propiedades
		const { value } = this.props

		return (
			<span style={styles.bubbleAlert}>
				{this.getNumber(value)}
			</span>
		)
	}
}

export default BubbleAlert
