import {Ae, Ru, Us, Uz} from "react-flags-select";

export default function Lang() {
  return (
      <div className="relative inline-block float-right mr-16 text-3x1">
        <div>
          <Us/>
        </div>
        <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-3x1"
               role="menuitem"><Uz/></a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-3x1"
               role="menuitem"><Ae/></a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-3x1"
               role="menuitem"><Ru/></a>
          </div>
        </div>
      </div>
  )
}