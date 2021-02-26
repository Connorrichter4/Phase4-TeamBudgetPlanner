import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function ManagerHome(props) {
	return (
		<div>
			<h1>Manager Home Page</h1>
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
						<tr>
							<td>{project.client}</td>
							<td>{project.project_name}</td>
							<td>${project.project_cost}</td>
							<td>{project.approval}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default ManagerHome;
