import { useEffect, useState } from "react";
import CardPorfolio from "../components/portfolio";
import axios from "axios";
import { useSelector } from "react-redux";

const Portfolio = () => {
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

	const card = categories.map((element) => (
		<CardPorfolio key={element.id} {...element} />
	));

	return <>{card}</>;
};

export default Portfolio;
