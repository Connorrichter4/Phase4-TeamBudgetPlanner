import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ManagerHome(props) {
	const initialProject = {
		id: props.projects.length + 1,
		client: '',
		project_name: '',
		project_cost: 0,
		approval: 'pending',
	};
	const [project, setProject] = useState(initialProject);

	const handleSubmit = (event) => {
		props.setProjects([...props.projects, project]);
		setProject(initialProject);
	};

	const handleChange = (event) => {
		event.persist();
		if (event.target.name === 'project_cost') {
			console.log('changing to string ' + typeof Number(event.target.value));
			setProject({
				...project,
				[event.target.name]: Number(event.target.value),
			});
		} else {
			setProject({ ...project, [event.target.name]: event.target.value });
		}
	};

	return (
		<div>
			<h1>Manager Home Page</h1>
			<div className='manager-home'>
				<Table striped bordered variant='dark'>
					<thead>
						<tr>
							<th>Client Name</th>
							<th>Project Name</th>
							<th>Budget</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input
									type='text'
									placeholder='Client Name'
									name='client'
									value={project.client}
									onChange={handleChange}
								/>
							</td>
							<td>
								<input
									type='text'
									placeholder='Project Name'
									value={project.project_name}
									name='project_name'
									onChange={handleChange}
								/>
							</td>
							<td>
								<input
									type='number'
									placeholder='Project Cost'
									name='project_cost'
									onChange={handleChange}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
				<div className='add-button'>
					<Button variant='secondary' size='lg' block onClick={handleSubmit}>
						Add new budget
					</Button>
				</div>
				<Table striped bordered variant='dark'>
					<thead>
						<tr>
							<th>Client Name</th>
							<th>Project Name</th>
							<th>Budget</th>
							<th>Approval</th>
						</tr>
					</thead>
					<tbody>
						{props.projects.map((project) => (
							<tr key={project.id}>
								<td>{project.client}</td>
								<td>{project.project_name}</td>
								<td>${project.project_cost}</td>
								<td>{project.approval}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default ManagerHome;
