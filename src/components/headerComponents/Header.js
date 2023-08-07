import React, { useState } from "react";
import * as Styled from "./Header.styles";
import HeaderNav from "./HeaderNav";
import Logo from "../../img/kamera.png";
import { ImSearch } from "react-icons/im";
import HeaderSearchBar from "./HeaderSearchBar";

const NewHeader = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	function toggle() {
		setIsExpanded((isExpanded) => !isExpanded);
	}

	const searchMovies = async (query) => {
		const apiKey = "0ba05d0772c0df63f36bf3843a553887";
		const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setSearchResults(data.results);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

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
				{isExpanded && (
					<HeaderSearchBar onSearch={searchMovies} isExpanded={isExpanded} />
				)}

				{searchResults.map((movie) => (
					<p key={movie.id}>{movie.title}</p>
				))}

				<Styled.SearchIconPar>
					<ImSearch onClick={toggle} />
				</Styled.SearchIconPar>
			</Styled.SearchBox>

			<Styled.NavBox>
				<HeaderNav />
			</Styled.NavBox>
		</Styled.Wrapper>
	);
};

export default NewHeader;
