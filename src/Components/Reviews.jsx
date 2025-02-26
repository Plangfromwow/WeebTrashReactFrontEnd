import reviews from "../reviewData";
import Card from "./Card";

export default function Reviews() {
  return (
    <>
      <div className="carousel carousel-center max-w-[100%] space-x-4 bg-neutral overflow-x-scroll pt-2">
        {reviews.map((rev) => {
          return (
            <div id={"review" + rev.id} className="carousel-item" key={rev.id}>
              <Card {...rev} key={rev.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}
