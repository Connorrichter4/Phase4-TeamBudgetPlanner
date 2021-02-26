import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='/'>Team Budget App</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='/'>Manager</Nav.Link>
				<Nav.Link href='/finance'>Finance</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
