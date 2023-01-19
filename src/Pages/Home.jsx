import {getDocs, collection} from "firebase/firestore/lite"
import {FirebaseBD} from "../firebase/config";
import {useEffect, useState} from "react";
import {Product} from "../components/Product/Product";
export const Home = () => {
	const [tools, setTools] = useState([]);

	const getTools = async () => {
		await getDocs(collection(FirebaseBD, "herramientas"))
			.then(querySnapshot => {
				const newData = querySnapshot.docs
					.map(doc => ({...doc.data(), id:doc.id }))

				setTools(newData);
			})
	}

	useEffect(() => {
		getTools()
	}, []);

	return (
		<main>
			<div className="container">
				<h1>Herramientas</h1>

				<ul style={{marginBottom: 0}}>
					{tools.map(({id, nombre, imagen}) => (
						<Product key={id} id={id} nombre={nombre} imagen={imagen}/>
					))}
				</ul>
			</div>
		</main>
	)
}