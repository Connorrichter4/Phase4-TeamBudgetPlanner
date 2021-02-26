import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function FinanceHome(props) {
	const [project, setProject] = useState({});
	
	const onApprovalChange = (event) => {
		event.persist();
		console.log(event.target);
		props.projects.forEach((item) => {
			if (item.id === parseInt(event.target.id)){
				setProject({ ...item, [event.target.name]: event.target.value });
			}
		})
	};

	useEffect(() => {
		props.setProjects(
			props.projects.map((item) => (item.id === project.id ? project : item))
		);
		console.log(project);
	}, [project]);

	return (
		<div>
			<h1>Finance Home Page</h1>
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
							<td>
								<select
									name='approval'
									id={project.id}
									value={project.approval}
									onChange={onApprovalChange}>
									<option value='approved'>Approved</option>
									<option value='pending'>Not Approved</option>
								</select>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default FinanceHome;
