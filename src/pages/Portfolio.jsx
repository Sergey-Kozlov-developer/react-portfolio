import { useEffect, useState } from "react";
import CardPorfolio from "../components/portfolio";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlices";
import AnimatePage from "../components/animatePage";
import Categories from "../components/categories";

const Portfolio = () => {
	// получение данных из mockapi
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// hook redux вытаскиваем определенное из state фильтра
	const categoryId = useSelector((state) => state.filter.categoryId);
	// dispatch(redux) передает действие(например передает id выбора категории)
	const dispatch = useDispatch();
	// функция выбора категории
	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	useEffect(() => {
		setIsLoading(true);
		const category = categoryId > 0 ? `category=${categoryId}` : "";
		axios
			.get(
				`https://654b5e825b38a59f28eef213.mockapi.io/categories?${category}`
			)
			.then(
				(res) => {
					setCategories(res.data);
					setIsLoading(false);
				},
				[categoryId]
			);
	}, [categoryId]);

	return (
		<AnimatePage>
			<Categories
				value={categoryId}
				onChangeCategory={onChangeCategory}
			/>
			<section className="mt-16 grid w-full gap-20 sm:mx-auto sm:mb-40 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{isLoading ? (
					<h1 className="text-3xl text-white">Загрузка данных...</h1>
				) : (
					categories.map((element) => (
						<div
							key={element.id}
							className=" justify-items-center rounded-lg bg-blue-gray-100 sm:w-auto"
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
