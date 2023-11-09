import { ButtonGroup, Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Categories({ value, onChangeCategory }) {
	const categories = ["Все работы", "FLutter", "React", "Верстка"];
	return (
		<ButtonGroup className="mt-16 gap-20 " fullWidth>
			{categories.map((category, index) => (
				<Button
					key={index}
					onClick={() => onChangeCategory(index)}
					className={
						value === index
							? "rounded-lg  bg-blue-gray-100 text-orange-500"
							: "rounded-lg hover:bg-blue-gray-100 hover:text-black"
					}
				>
					{category}
				</Button>
			))}
		</ButtonGroup>
	);
}

export default Categories;
