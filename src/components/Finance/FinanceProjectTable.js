import React, { useEffect, useState } from 'react';

function FinanceProjectTable(props) {
	const [project, setProject] = useState(props.project);

	const onApprovalChange = (event) => {
		event.persist();
		setProject({ ...project, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		props.setProjects(
			props.projects.map((item) => (item.id === project.id ? project : item))
		);
		console.log(project);
	}, [props, project]);

	return (
		<tr key={project.id}>
			<td>{project.client}</td>
			<td>{project.project_name}</td>
			<td>${project.project_cost}</td>
			<td>
				<select
					name='approval'
					value={project.approval}
					onChange={onApprovalChange}>
					<option value='approved'>Approved</option>
					<option value='pending'>Not Approved</option>
				</select>
			</td>
		</tr>
	);
}

export default FinanceProjectTable;
