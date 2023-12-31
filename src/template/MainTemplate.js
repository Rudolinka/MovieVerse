import React from "react";
import Header from "../components/headerComponents/Header";
import Footer from "../components/footerComponents/Footer";

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
