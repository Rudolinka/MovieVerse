import React from "react";
import * as Styled from "./Footer.styles";

const FooterNav = () => {
	return (
		<div>
			<div>
				<Styled.FooterNav>
					<Styled.NavElement>
						<Styled.NavLink to="/">HomePage</Styled.NavLink>
					</Styled.NavElement>
					<Styled.NavElement>
						<Styled.NavLink to="/movie">Movies</Styled.NavLink>
					</Styled.NavElement>
					<Styled.NavElement>
						<Styled.NavLink to="/actor">Actors</Styled.NavLink>
					</Styled.NavElement>
					<Styled.NavElement>
						<Styled.NavLink to="/faq">FAQ</Styled.NavLink>
					</Styled.NavElement>
					<Styled.NavElement>
						<Styled.NavLink to="/rules">Rules</Styled.NavLink>
					</Styled.NavElement>
				</Styled.FooterNav>
			</div>
		</div>
	);
};

export default FooterNav;
