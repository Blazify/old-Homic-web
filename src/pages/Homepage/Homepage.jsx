import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/Header/Category";
// import RecomendedCard from "../../components/Recomended/RecomendedCard";
import RecentlyViewedCard from "../../components/Recently/RecentlyViewedCard";
import Navbar from "../../components/Navbar/Navbar";

import { Box } from "@chakra-ui/react";

const Homepage = () => {
	const [city, setCity] = useState("");
	console.log(city);
	const user = localStorage.getItem("isLogIn");

	return (
		<React.Fragment>
			<Box
				height="100%"
				width="100%"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignContent="center"
				overflowX="hidden"
			>
				<Navbar transparent={true} setCity={setCity} />

				<Header />

				<Category />
				{user === "true" && (
					<>
						{/* <RecomendedCard city={city} /> */}
						<RecentlyViewedCard />
					</>
				)}

				<Footer />
			</Box>
		</React.Fragment>
	);
};

export default Homepage;
