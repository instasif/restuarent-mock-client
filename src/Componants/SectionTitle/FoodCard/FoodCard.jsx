export default function FoodCard({item}) {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure >
        <img
          src={image}
          alt="Shoes"
        //   className="rounded-xl"
        />
      </figure>
      <p  className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-300 text-orange-300">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
