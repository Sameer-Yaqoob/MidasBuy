import React from "react";
import Layout from "./components/layout";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
const News = () => {
	return (
		<div>
			<Head>
				<title>Midasbuy</title>
				<meta
					name="Midasbuy"
					content="Field Service & Workdforce Management System"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Container maxW="container.xl">
					<div>Home content</div>
				</Container>
			</Layout>
		</div>
	);
};
export default News;
