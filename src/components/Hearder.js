import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
	return (
		<div className='Header'>
			<Link className='Links' to='/'>
				<h1>Instagram</h1>
			</Link>
		</div>
	);
}
