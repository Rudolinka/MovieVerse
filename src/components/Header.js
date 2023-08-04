import React from "react";
// import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import { BsSearch } from "react-icons/bs";
import logo from "../img/klaps.png";

const header = () => {
	return (
		<header>
			<Styled.Wrapper>
				<div>
					<Styled.Clapper src={logo} alt="movie clapper board" />
					<Styled.ComebackHp to="/">MovieVerse</Styled.ComebackHp>
				</div>

				<Styled.Search>
					<BsSearch />
				</Styled.Search>
				<Styled.NavElement>
					<ul>
						<Styled.ListElement>
							<Styled.NavLink to="/">HomePage</Styled.NavLink>
						</Styled.ListElement>
						<Styled.ListElement>
							<Styled.NavLink to="/movie">Movie</Styled.NavLink>
						</Styled.ListElement>
						<Styled.ListElement>
							<Styled.NavLink to="/actor">Actor</Styled.NavLink>
						</Styled.ListElement>
						<Styled.ListElement>
							<Styled.NavLink to="/faq">FAQ</Styled.NavLink>
						</Styled.ListElement>
						<Styled.ListElement>
							<Styled.NavLink to="/rules">Rules</Styled.NavLink>
						</Styled.ListElement>
					</ul>
				</Styled.NavElement>
			</Styled.Wrapper>
		</header>
	);
};

export default header;
