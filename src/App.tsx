import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "./firebase";

function App() {

	const [currentLink, setCurrentLink] = useState('')

	const docRef = doc(db, "links", "boor");
	useEffect(() => {
		getDoc(docRef).then(res => {
			console.log(res.data())
		})

	}, [])

	const handleChangeCurrentLink = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentLink(e.currentTarget.value)
	}

	const hanldeAdd = () => {
		setDoc(doc(db, "links", "boor"), {links: [currentLink]}, {merge: false})
			.then(res => {
				console.log(res)
			})
	}

	return (
		<div className="App">
			<input value={currentLink} onChange={handleChangeCurrentLink}/>
			<button onClick={hanldeAdd}>test</button>
		</div>
	);
}

export default App;
