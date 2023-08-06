import React from "react";
import * as Styled from "./Header.styles";

const HeaderNav = () => {
	return (
		<div>
			<ul>
				<Styled.NavElement>
					<Styled.NavLink to="/">HomePage</Styled.NavLink>
				</Styled.NavElement>
				<Styled.NavElement>
					<Styled.NavLink to="/movie">Movie</Styled.NavLink>
				</Styled.NavElement>
				<Styled.NavElement>
					<Styled.NavLink to="/actor">Actor</Styled.NavLink>
				</Styled.NavElement>
				<Styled.NavElement>
					<Styled.NavLink to="/faq">FAQ</Styled.NavLink>
				</Styled.NavElement>
				<Styled.NavElement>
					<Styled.NavLink to="/rules">Rules</Styled.NavLink>
				</Styled.NavElement>
			</ul>
		</div>
	);
};
export default HeaderNav;
