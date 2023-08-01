import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainTemplate = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default MainTemplate;
