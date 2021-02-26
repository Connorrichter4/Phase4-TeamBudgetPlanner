import React from 'react';
import FinanceProjectTable from './FinanceProjectTable';
import Table from 'react-bootstrap/Table';

function FinanceHome(props) {
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
						<FinanceProjectTable
							project={project}
							projects={props.projects}
							setProjects={props.setProjects}
						/>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default FinanceHome;
