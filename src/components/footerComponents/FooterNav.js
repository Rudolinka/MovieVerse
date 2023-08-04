import React from "react";
import * as Styled from "./Footer.styles";

const FooterNav = () => {
	return (
		<div>
			<div>
				<Styled.FooterNav>
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
				</Styled.FooterNav>
			</div>
		</div>
	);
};

export default FooterNav;
