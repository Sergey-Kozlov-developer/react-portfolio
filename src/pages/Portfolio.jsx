import { useEffect, useState } from "react";
import CardPorfolio from "../components/portfolio";
import axios from "axios";
// import { useSelector } from "react-redux";
import AnimatePage from "../components/animatePage";

const Portfolio = () => {
	// получение данных из mockapi
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// hook redux вытаскиваем определенное из state фильтра
	// const categoryId = useSelector((state) => state.filter.categoryId);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://654b5e825b38a59f28eef213.mockapi.io/categories`)
			.then(
				(res) => {
					setCategories(res.data);
					setIsLoading(false);
				}
				// [categoryId]
			);
	}, []);

	return (
		<AnimatePage>
			<section className="mx-auto mt-16 grid w-full grid-cols-3 gap-20 ">
				{isLoading ? (
					<h1 className="text-3xl text-white">Загрузка данных...</h1>
				) : (
					categories.map((element) => (
						<div
							key={element.id}
							className="w-96 justify-items-center rounded-lg bg-blue-gray-100"
						>
							<CardPorfolio {...element} />
						</div>
					))
				)}
			</section>
		</AnimatePage>
	);
};

export default Portfolio;
