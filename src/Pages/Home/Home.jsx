import {Carousel} from "../../components/Carousel/Carousel";
import {CarouselItems} from "../../components/CarouselItems/CarouselItems";
import './Home.scss'
import {Link} from "react-router-dom";


export const Home = () => {
	return (
		<main className="home">
			<div className="container">
				<h2 className="home__title">Destacados</h2>
				<Carousel/>

				<h2 className="home__title">Novedades</h2>
				<CarouselItems/>
				<Link to={'productos'}>Ver más</Link>
			</div>
		</main>
	)
}