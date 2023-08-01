import { BrowserRouter, Route, Routes } from "react-router-dom";
// 0ba05d0772c0df63f36bf3843a553887

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie" element={<MoviePage />} />
				<Route path="/actor" element={<ActorPage />} />
				<Route path="/faq" element={<FAQPage />} />
				<Route path="/rules" element={<RulesPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
