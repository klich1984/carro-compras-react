import { Component } from 'react'

const styles = {
	button: {
		backgroundColor: '#0a283e',
		color: '#fff',
		padding: '15px 20px',
		borderRadius: '5px',
		borderStyle: 'none',
		cursor: 'pointer',
	}
}

export default class Button extends Component {
	render() {
		// console.log(this.props)
		return (
			<div>
				<button {...this.props} style={styles.button}/>
			</div>
		)
	}
}
