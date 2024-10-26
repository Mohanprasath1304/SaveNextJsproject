"use client";  
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section>
      <footer className="bg-zinc-950 py-10 text-red-50 pb-40 ">
      <Image
            src="/tcp.png" 
             alt="The Clover School Logo"
             width={64}    
             height={64}   
              className="w-40 h-40"  
              />
        <div className="container ml-24 -mt-32 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
           
 

            <p className="mb-2 text-lg font-bold ml-40 -mt-32">Join Our Newsletter</p>
            <div className="text-sm -ml-96">
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  className="w-full p-2 text-black rounded bg-gray-600"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded">
                  SIGN UP
                </button>
              </div>
              <div className="mt-2 mb-20">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent">
                  I consent to receive news, updates and special offers from<br/>
                  The Clover School.
                </label>
              </div>
            </div>

            
            <div className="flex">
              <a href="#"><img src="/facebook.png" alt="Facebook" className="w-6 h-6 -mt-12" /></a>
              <a href="#"><img src="/insta.png" alt="Instagram" className="w-6 h-6 -mt-12" /></a>
              <a href="#"><img src="/youtu.png" alt="YouTube" className="w-6 h-6 -mt-12" /></a>
              <a href="#"><img src="/linked.png" alt="LinkedIn" className="w-6 h-6 -mt-12" /></a>
            </div>
          </div>

          <hr className='ml-20 pl-10' />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-10 text-sm ml-40 -mr-20 leading-relaxed">
            <div>
              <h3 className="font-bold mb-2 text-lg ">OUR PHILOSOPHY</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="text-gray-400">Our School</a></li>
                <li><a href="#" className="hover:text-gray-400">Our Values</a></li>
                <li><a href="#" className="hover:text-gray-400">Why ❤️ Montessori</a></li>
                <li><a href="#" className="hover:text-gray-400">Montessori FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg">OUR PEOPLE</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="hover:text-gray-400">Teachers & Staff</a></li>
                <li><a href="#" className="hover:text-gray-400">Community at Clover</a></li>
                <li><a href="#" className="hover:text-gray-400">Partners</a></li>
                <li><a href="#" className="hover:text-gray-400">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg ">OUR CAMPUSES</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="hover:text-gray-400">Midtown</a></li>
                <li><a href="#" className="hover:text-gray-400">High Park</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg ">PROGRAMS</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="hover:text-gray-400">Toddler</a></li>
                <li><a href="#" className="hover:text-gray-400">Pre-Primary</a></li>
                <li><a href="#" className="hover:text-gray-400">Primary</a></li>
                <li><a href="#" className="hover:text-gray-400">Elementary</a></li>
                <li><a href="#" className="hover:text-gray-400">Summer Camps</a></li>
                <li><a href="#" className="hover:text-gray-400">Additional Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg ">ADMISSIONS</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="hover:text-gray-400">How To Apply</a></li>
                <li><a href="#" className="hover:text-gray-400">Fees</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg ">CONTACT</h3>
              <ul className='leading-loose font-bold text-gray-400'>
                <li><a href="#" className="hover:text-gray-400">Locations</a></li>
                <li><a href="#" className="hover:text-gray-400">Book A Tour</a></li>
                <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              </ul>
            </div>
          </div>

        
          <div className="mt-8 flex justify-between items-center">
            <div className="flex space-x-6 ml-36">
              <img src="/leef.png" alt="CCMA Logo" className="w-24" />
              <img src="/of.jpg" alt="OFIS Logo" className="w-24" />
            </div>
            
            <a href="#" className="text-sm hover:text-gray-400 font-bold">BACK TO TOP</a>
          </div>
          <p className='text-gray-400 ml-36 pt-20'>© The Clover School 2023. All rights reserved.</p>
          <p className='text-gray-400 ml-[1180px] -mt-6'>Privacy Policy</p>
        </div>
       
      </footer>
    </section>
  );
}
