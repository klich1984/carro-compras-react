import { Component } from 'react'

const styles = {
	layouts: {
		backgroundColor: '#fff',
		color: '#0a283e',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	container: {
		width: '1200px'
	}
}

export default class Layout extends Component {
	render() {
		return (
			<div style={styles.layouts}>
				<div style={styles.container}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
