import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import {Category} from './pages/Category'
import Recipe from './pages/Recipe'
import './App.css'
function App() {
	return (
		<>
			<Header />
			<main className="container content">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route  path="/category/:name" component={Category} />
						<Route path ="/meal/:id" component={Recipe}/>
						<Route component={NotFound} />
					
					</Switch>
				</Router>
			</main>
			<Footer />
		</>
	)
}

export default App
