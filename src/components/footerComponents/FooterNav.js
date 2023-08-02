import React from "react";
import * as Styled from "./Footer.styles";

const FooterNav = () => {
	return (
		<div>
			<div>
				<ul>
					<Styled.ListElement>
						<Styled.NavLink to="/">HomePage</Styled.NavLink>
					</Styled.ListElement>
					<Styled.ListElement>
						<Styled.NavLink to="/movie">Movies</Styled.NavLink>
					</Styled.ListElement>
					<Styled.ListElement>
						<Styled.NavLink to="/actor">Actors</Styled.NavLink>
					</Styled.ListElement>
					<Styled.ListElement>
						<Styled.NavLink to="/faq">FAQ</Styled.NavLink>
					</Styled.ListElement>
					<Styled.ListElement>
						<Styled.NavLink to="/rules">Rules</Styled.NavLink>
					</Styled.ListElement>
				</ul>
			</div>
		</div>
	);
};

export default FooterNav;
