
import React from 'react';
import './menustyle.css';

import { Link } from 'react-router-dom';

const Menu = () => {

		return (
			<div class="navstyle">
				<ul>
				<li> <Link to="">  Home </Link> </li>
		       <li> <Link to="About"> About </Link> </li>
		       <li> <Link to="Contact"> Contact  </Link> </li>
				</ul>
			</div>
			)
}

export default Menu;

