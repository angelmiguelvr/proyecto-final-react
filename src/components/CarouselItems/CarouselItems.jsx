import { Splide, SplideSlide } from '@splidejs/react-splide';
import {collection, getDocs, limit, query} from "firebase/firestore/lite";
import {FirebaseBD} from "../../firebase/config";
import {useEffect, useState} from "react";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import './CarouselItems.scss';

export const CarouselItems = () => {
	const [tools, setTools] = useState([]);

	const getTools = async () => {
		await getDocs(
			query(
				collection(FirebaseBD, "herramientas"),
				limit(6)
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
		<Splide aria-label="My Favorite Tools" className="carousel-items" options={{
			type: 'loop',
			perPage: 1,
			mediaQuery: 'min',
			gap: 40,
			autoplay: true,
			speed: 1000,
			breakpoints: {
				640: {
					perPage: 3,
				},
			}
		}}>
			{
				tools.map(({nombre, imagen, id}) => (
					<SplideSlide key={id} className="carousel-items__item">
						<img className="carousel-items__image" src={imagen} alt={nombre}/>
						<h2 className="carousel-items__title">{nombre}</h2>
					</SplideSlide>
				))
			}
		</Splide>
	)
};
