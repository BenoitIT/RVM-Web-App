import React from 'react';
interface PaginatorProps {
    
}
 
const Paginator: React.FunctionComponent<PaginatorProps> = () => {
    return ( 
        <nav>
        <ul className="inline-flex text-sm desktop:py-4 xs:py-2">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 ml-0 leading-tight text-white border border-gray-300 rounded-l-lg bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3  desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 bg-lime-500 desktop:py-5 xs:py-3 md:py-4"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 desktop:h-8 xs:h-2 leading-tight text-white border border-gray-300 rounded-r-lg bg-lime-700 desktop:py-5 xs:py-3 md:py-4"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
     );
}
 
export default Paginator;