import React from 'react';
import * as Styled from './Footer.styles';

const FooterNav = () => {
	return (
		<div>
			<div>
				<ul>
					<Styled.litElement>
						<Styled.NavLink to='/'>HomePage</Styled.NavLink>
					</Styled.litElement>
					<Styled.litElement>
						<Styled.NavLink to='/movie'>Movies</Styled.NavLink>
					</Styled.litElement>
					<Styled.litElement>
						<Styled.NavLink to='/actor'>Actors</Styled.NavLink>
					</Styled.litElement>
					<Styled.litElement>
						<Styled.NavLink to='/faq'>FAQ</Styled.NavLink>
					</Styled.litElement>
					<Styled.litElement>
						<Styled.NavLink to='/rules'>Rules</Styled.NavLink>
					</Styled.litElement>
				</ul>
			</div>
		</div>
	);
};

export default FooterNav;
