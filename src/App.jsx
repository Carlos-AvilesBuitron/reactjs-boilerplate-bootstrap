import React from 'react'
import Button from 'react-bootstrap/Button'

function App() {
	return (
		<div className='App'>
			<h1>Welcome to the app</h1>
			<Button
				type='button'
				onClick={() => {
					console.log('React Click')
				}}
			>
				Log
			</Button>
		</div>
	)
}

export default App
