import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import './App.css'
function App() {
	return (
		<>
			<Header />
			<main className="container content">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</main>
			<Footer />
		</>
	)
}

export default App
