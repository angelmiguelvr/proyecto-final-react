import { Splide, SplideSlide } from '@splidejs/react-splide';
import {collection, getDocs, limit, query} from "firebase/firestore/lite";
import {FirebaseBD} from "../../firebase/config";
import {useEffect, useState} from "react";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import './Carousel.scss';

export const Carousel = () => {
	const [tools, setTools] = useState([]);

	const getTools = async () => {
		await getDocs(
			query(
				collection(FirebaseBD, "herramientas"),
				limit(3)
			)
		)
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
		<Splide aria-label="My Favorite Tools" className="carousel">
			{
				tools.map(({nombre, imagen, id}) => (
					<SplideSlide key={id} className="carousel__item">
						<img className="carousel__image" src={imagen} alt={nombre}/>
						<h2 className="carousel__title">{nombre}</h2>
					</SplideSlide>
				))
			}
		</Splide>
	)
};
