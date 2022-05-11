import React, { Suspense } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const Home = React.lazy(() => import('./pages/Home'))

function Loading() {
	return <p>Loading...</p>
}

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<h1>Welcome to the app</h1>
				<Link to='/'>Home</Link>
				<br />
				<Button
					type='button'
					onClick={() => {
						console.log('React Click')
					}}
				>
					Log
				</Button>
				<Routes>
					<Route
						path='/'
						element={
							<Suspense fallback={Loading}>
								<Home />
							</Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
