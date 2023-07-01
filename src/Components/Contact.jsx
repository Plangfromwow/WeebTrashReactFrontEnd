/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <>
      <div className="hero bg-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../Public/TrashCanNoBackground.png"
            className="max-w-sm rounded-full shadow-2xl ml-4"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">Let us know whats up</h1>
            <a href="mailto: ">
              <button className="btn btn-primary">Email Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
