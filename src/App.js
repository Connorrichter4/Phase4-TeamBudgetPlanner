import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { initialProjects } from './data/initialData';
import ManagerHome from './components/Manager/ManagerHome';
import FinanceHome from './components/Finance/FinanceHome';
import NavBar from './components/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [projects, setProjects] = useState(
		() => JSON.parse(localStorage.getItem('projects')) || initialProjects
	);
	useEffect(() => {
		localStorage.setItem('projects', JSON.stringify(projects));
		console.log(projects);
	}, [projects]);

	return (
		<div className='main'>
			<Route path='*' component={NavBar} />
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<ManagerHome projects={projects} setProjects={setProjects} />
						);
					}}
				/>
				<Route
					path='/finance'
					render={() => {
						return (
							<FinanceHome projects={projects} setProjects={setProjects} />
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
