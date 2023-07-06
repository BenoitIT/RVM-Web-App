import React from 'react';
interface PaginatorProps {
    
}
 
const Paginator: React.FunctionComponent<PaginatorProps> = () => {
    return ( 
        <nav>
        <ul className="inline-flex -space-x-px text-sm py-4">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white border border-gray-300 rounded-l-lg bg-lime-700 py-5"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 bg-lime-700 py-5"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 bg-lime-700 py-5"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3  h-8 leading-tight text-white border border-gray-300 bg-lime-500 py-5"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 bg-lime-700 py-5"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 bg-lime-700 py-5"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 rounded-r-lg bg-lime-700 py-5"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
     );
}
 
export default Paginator;