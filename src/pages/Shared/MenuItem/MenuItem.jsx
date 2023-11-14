const MenuItem = ({menuItem}) => {
    const {name, recipe, image, price} = menuItem;
    return (
        <div className="flex gap-5">
            <img className="w-20 rounded-e-full rounded-b-full" src={image} alt="menu item" />
            <div>
                <h3 className="text-xl font-semibold">{name} ------------------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-amber-500">${price}</p>
        </div>
    );
};

export default MenuItem;