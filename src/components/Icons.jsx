import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

function Icons() {
  /* 
    https://heroicons.com/
    https://github.com/tailwindlabs/heroicons
    */
  return (
    <div className="flex items-center gap-2 container">
      <EnvelopeIcon className="w-10 h-10" />
      <MagnifyingGlassIcon className="w-5 h-5" />
      <InformationCircleIcon className="w-5 h-5" />
    </div>
  );
}

export default Icons;
