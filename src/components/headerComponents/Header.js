import React from "react";
import * as Styled from "../headerComponents/NewHeader.styles";
import HeaderNav from "./HeaderNav";
import Logo from "../../img/kamera.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const NewHeader = () => {
	return (
		<Styled.Wrapper>
			<Styled.MainBox>
				<Styled.TitleLink to="/">
					<Styled.TitleBox>
						<Styled.TitleIcon src={Logo} />
						<Styled.TitleName>MovieVerse</Styled.TitleName>
					</Styled.TitleBox>
				</Styled.TitleLink>
				<div>
					<p>Log In</p>
				</div>
			</Styled.MainBox>
			<Styled.SearchBox>
				<ImSearch />
			</Styled.SearchBox>
			<Styled.NavBox>
				<HeaderNav />
			</Styled.NavBox>
		</Styled.Wrapper>
	);
};

export default NewHeader;
