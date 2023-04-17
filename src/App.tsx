import { useState } from "react";
import style from "./App.module.scss";
import CardContainerV2 from "./componnets/CardContainerV2/CardContainerV2";
import Cards from "./componnets/Cards/Cards";
const data = "1234567890".split("");
function App() {
	return (
		<div className={style.appContainer}>
			<CardContainerV2 limit={5}>
				{data.map((a) => (
					<Cards data={a} />
				))}
			</CardContainerV2>
			<div className={style.highlighter}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default App;
