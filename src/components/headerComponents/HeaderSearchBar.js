import React, { useState } from "react";
import * as Styled from "./Header.styles";

const HeaderSearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	return (
		<div>
			<form>
				<Styled.SearchInput
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleInputChange}
				/>
			</form>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default HeaderSearchBar;
