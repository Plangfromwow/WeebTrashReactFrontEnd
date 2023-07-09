import TrashCan from "../assets/TrashCanNoBackground.png";

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { name, review } = props;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar m-2">
        <div className="w-24 rounded-full ring ring-accent ring-offset-primary ring-offset-2 ">
          <img src={TrashCan} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent"
            defaultChecked
          />
        </div>
        <p>{review}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
