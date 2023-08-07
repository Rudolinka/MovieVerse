import React, { useState } from "react";
import * as Styled from "./Header.styles";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const HeaderSearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	const handleSubmit = (e) => e.preventDefault();

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<motion.div
					className="box"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<Styled.SearchInput
						type="text"
						placeholder="Search for movie..."
						id="search"
						value={searchTerm}
						onChange={handleInputChange}
					/>
				</motion.div>
				<button onClick={handleSearch}>
					<FaSearch />
				</button>
			</form>
		</div>
	);
};

export default HeaderSearchBar;
