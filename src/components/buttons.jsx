import { PlusIcon } from "@heroicons/react/20/solid";

function Buttons() {
  return (
    <div className="flex items-center justify-center gap-10 mx-3 container ">
      <button
        type="button"
        className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>

      <button
        type="button"
        className="rounded-md bg-red-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Delete
      </button>

      <button
        type="button"
        className="rounded-md bg-teal-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      >
        Update
      </button>

      <button className="btn-teal">Botão criado com classe customizada</button>

      <button
        type="button"
        className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="h-10 w-10" />
      </button>
    </div>
  );
}

export default Buttons;
