
import Image from 'next/image';

export default function Header() {
    return <body className='bg-gray-50'>
    
    <nav className="flex items-center justify-between py-4  border-b px-20 bg-gray-50">
       
        <div  className="flex items-center">
            <Image src="/logol.png" alt="The Clover School Logo" 
             width={64}    
             height={64}   
              className="w-24 h-24"  />
           
        </div>

       
        <ul  className="flex space-x-8 text-black font-medium text-sm font-bold ">
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">OUR PHILOSOPHY</a><svg className="w-4 h-4 ml-36 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
               
                <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg">
                    <ul className="py-2">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a></li>
                    </ul>
                </div>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">OUR PEOPLE</a><svg className="w-4 h-4 ml-28 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">OUR CAMPUSES</a><svg className="w-4 h-4 ml-32 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">OUR PROGRAMS</a><svg className="w-4 h-4 ml-32 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">ADMISSIONS</a><svg className="w-4 h-4 ml-24 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">NEWS</a><svg className="w-4 h-4 ml-14 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
            <li className="group relative">
                <a href="#" className="hover:text-gray-700">CONTACT</a><svg className="w-4 h-4 ml-20 -mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
            </li>
        </ul>
    </nav>
</body>
}