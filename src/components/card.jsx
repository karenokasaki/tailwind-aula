import svg from "../assets/react.svg";

function Card() {
  return (
    <div className="bg-white p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 md:bg-red-500 md:text-white">
      <div className="shrink-0">
        <img className="h-12 w-12" src={svg} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default Card;
