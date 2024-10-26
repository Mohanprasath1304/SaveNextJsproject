"use client";

import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-gray-50 font-sans">
        <h1 className='text-4xl font-bold mt-10 mb-10 ml-12'>Our Programs</h1>
      <nav className="border-b">
        <div className="max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-black font-bold bg-lime-300 px-7 py-5">TODDLER</div>
              <div className="flex items-baseline">
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">PRE-PRIMARY</a>
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">PRIMARY</a>
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">ELEMENTARY</a>
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">MIDDLE SCHOOL</a>
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">SUMMER CAMPS</a>
                <a href="#" className="bg-gray-100 text-gray-800 font-extrabold hover:text-black px-7 py-5 rounded-md text-sm font-medium">ADDITIONAL SERVICES</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-lime-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold text-7xl">Toddler</h1>
            <p className="text-2xl font-extrabold text-gray-900 mt-2 pb-20">18 Months - 2.5 Years</p>
            <blockquote className="mt-8">
              <p className="text-2xl font-semibold text-gray-800">
                <span className="flex font-bold text-3xl">
                  <span className="text-7xl text-black font-extrabold">“</span>
                  The education of even a very small child does not aim at preparing them for school, but for life.”
                </span>
              </p>
              <p className="block mt-4 text-2xl ml-9 text-black">Maria Montessori</p>
            </blockquote>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="flex justify-center items-center relative">
              <Image src="/baby.jpg" alt="Toddler" width={500} height={450} className="w-[500px] h-[450px]" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-300 rounded-full p-4"></div>
          </div>
        </div>
      </section>
     
  <section className='flex mt-28'>
      <div className='ml-40 mr-20 '>

      <div className="w-96 bg-white rounded-sm  shadow-md mb-10 border-10 border-lime-400">
    <div className="bg-lime-400 text-center p-4 rounded-t-lg">
      <h2 className="text-2xl font-bold bg-lime-400 text-white">Toddler Program Schedule</h2>
    </div>
    <div className="p-6 border-t border-b ">
      <div className="flex items-center space-x-4 py-8 mb-4 border-b ">
        <div className="text-green-500">
         <Image src='/sun.jpg' alt='sunimg'  width={500} height={450} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Full-Day</h3>
          <p className='text-xl'> 8:45 am to 3:45 pm</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 py-8 mb-4 border-full">
        <div className="text-green-500">
        <Image src='/upsun.jpg' alt='sunimg'  width={500} height={450} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Morning Extended Care</h3>
          <p className='text-xl'>7:45 am to 8:45 am</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 py-8">
        <div className="text-green-500">
        <Image src='/downsun.jpg' alt='sunimg'  width={500} height={450} className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Afternoon Extended Care</h3>
          <p className='text-xl'>3:45 pm to 6:00 pm</p>
        </div>
      </div>
    </div>
  </div>



  <div className="w-96 bg-white rounded-lg shadow-md ">
    <div className="bg-lime-400 text-center p-4 rounded-t-lg">
      <h2 className="text-2xl font-bold text-white">Program Available At</h2>
    </div>
    <div className="p-6 border-t border-b border-green-200">
      <div className="flex text-center space-x-4 pb-4 mb-4 pl-20 py-5 border-b border-green-200">
       
        <div>
          <h3 className="font-bold text-center text-lg">Midtown Campus
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-4 py-5">
        
        <div>
          <h3 className="font-bold text-center  pl-20 text-lg">High Park Campus</h3>
         
        </div>
      </div>
    </div>
  </div>
  <div className="text-center space-y-6 shadow-md mb-10 border-10 mt-10 pt-10 pb-40 bg-gray-100 ">
    <h2 className="text-lg font-semibold text-gray-900">Experience Clover School</h2>
    <button className="px-6 py-3 text-sm font-bold text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500">
      BOOK A TOUR
    </button>

    <h2 className="text-lg font-semibold text-gray-900">Give Us A Call</h2>
    <button className="px-6 py-3 text-sm font-bold text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500">
      (416) 781-4449 EXT. 9525
    </button>
  </div>
  </div><div className='text-xl px-16 ml-5 leading-relaxed'>
  <p className='mb-7'>Early childhood is a critical period of development, which is why choosing the right school for your young child is such an important decision. Educational experiences early in life have the power to prime even very young children for academic success later in life. The Clover School’s Montessori Toddler Program is often a young child’s first experience of life outside of the family. Our loving and joyful classNamerooms focus on helping to encourage and facilitate skills of functional independence, language development, self expression, socialization and sensory exploration. We support our youngest children in cultivating a healthy sense of confidence and self regulation.</p>

<p className='mb-7'>At The Clover School, we understand the importance of social-emotional development and pre-academic learning required for an optimized early childhood education. Our unique toddler Montessori program is designed to meet the developmental needs of young children between the ages of 18 months and 2.5 years and prepare them for the path ahead.</p>

<p className='mb-7'> toddler classNamerooms are equipped with developmentally appropriate materials and learning activities that support the child through each stage of toddler growth. The toddler classNameroom is a place where we “follow the child,” and provide a variety of learning opportunities so toddlers can explore based upon their curiosity and their mobility, not just their age.</p>

<p className='mb-7'>Our experienced, highly skilled, loving and supportive toddler teachers warmly welcome children into the classNameroom community, working in partnership with parents to ease young children into daily life at school. They understand that learning happens not only at school, but at home as well, and are happy to provide tips on how to incorporate Montessori principles and practices into life at home, which will support your young child’s healthy development in the areas of language, independence and self confidence.</p>
  </div>
  </section>
  <div className='w-[1405px] h-[1200px] bg-amber-400'>
    <h1  className='text-center text-4xl font-bold pt-20'>Have a sneak peek at one of our</h1>
    <h1 className='text-center text-4xl font-bold mt-1'>beautiful Primary classNamerooms.</h1>
    <button className=' bg-gray-900 px-3 py-2 text-white ml-[600px] rounded-md mt-10 mb-10'>BOOK A FULL TOUR</button>
  <div className="relative overflow-hidden ml-12 w-[1300px] h-[500px] md:h-[700px] lg:h-[800px] perspective-1000">
      <iframe
        src="https://my.matterport.com/show/?m=hZfCCuhWrGa"
        frameBorder="0"
        allow="fullscreen"
        className="w-full h-full transform transition-transform duration-300 hover:scale-105 hover:rotate-x-2 hover:rotate-y-2"
      ></iframe>
    </div>
    </div>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
  <div className="max-w-6xl f-full bg-gray p-8 shadow-md rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 ">
      
      
      <div>
        <h2 className="text-xl font-bold mb-4 px-10">Areas of Growth:</h2>
        <ul className="space-y-6 text-gray-700 text-lg">
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Cognitive development</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Speech and language development</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Active, concrete learning using all senses to explore the world</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Confidence, kindness, grace and courtesy</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-7 h-7 mt-1" /></span> Physical mobility and greater coordination, fierce drive towards independence</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-7 h-6 mt-1" /></span> Self-care, practical life skills and independence (e.g., dressing oneself, toilet learning)</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-7 h-6 mt-1" /></span> Social skills and cooperation, responsibility, collaboration, manners, compassion</li>
        </ul>
      </div>
      
     
      <div>
        <h2 className="text-xl font-bold mb-4">Learning Highlights:</h2>
        <ul className="space-y-6 text-gray-700 text-lg">
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Fine and gross motor skills, control and coordination of movement, body awareness</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-7 h-6 mt-1" /></span> Language development and vocabulary enrichment, self-expression, early literacy skills</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-7 h-6 mt-1" /></span> Sensorial activities, sorting, classNameifying, grading, development of early math skills</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Science, Gardening, Food and Nutrition, Cooking</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Practical Life, Yoga, Music, Sensorial, Dance, Art</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Nature-based learning and programming</li>
          <li className="flex items-start"><span className="mr-2"><Image src='/dot.png' alt='sunimg'  width={500} height={450} className="w-6 h-6 mt-1" /></span> Physical Education</li>
        </ul>
      </div>

    </div>
  </div>
</div>

      </div>
  );
}
