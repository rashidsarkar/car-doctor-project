import { Link } from "react-router-dom";

function ServicesCard({ service }) {
  const { title, img, price, _id } = service;
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price : ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
