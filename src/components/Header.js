import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
	return (
		<header>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>HomePage</Link>
						</li>
						<li>
							<Link to='/movie'>Movie</Link>
						</li>
						<li>
							<Link to='/actor'>Actor</Link>
						</li>
						<li>
							<Link to='/faq'>FAQ</Link>
						</li>
						<li>
							<Link to='/rules'>Rules</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default header;
