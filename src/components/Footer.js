import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">HomePage</Link>
					</li>
					<li>
						<Link to="/movie">Movie</Link>
					</li>
					<li>
						<Link to="/actor">Actor</Link>
					</li>
					<li>
						<Link to="/faq">FAQ</Link>
					</li>
					<li>
						<Link to="/rules">Rules</Link>
					</li>
				</ul>
			</nav>
			<h3>Created by: Rudolinka, DomanOne, Krzysiek742</h3>
		</div>
	);
};

export default Footer;
