import React from "react";
import styles from "./Cards.module.scss";
const Cards = ({ data }: any) => {
	return (
		<div className={styles.card}>
			<h1>{data}</h1>
		</div>
	);
};

export default Cards;
