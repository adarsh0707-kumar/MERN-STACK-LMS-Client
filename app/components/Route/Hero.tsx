import Image from 'next/image'
import React, { FC } from 'react'
import bannerImg1 from '../../../public/assests/banner-img-1.png';
import client1 from '../../../public/assests/client-1.jpg';
import client2 from '../../../public/assests/client-2.jpg';
import client3 from '../../../public/assests/client-3.jpg'

import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';




type Props = {}

const Hero:FC<Props> = (props) => {
return (
  <div
    className="w-full lg:flex items-center">
   <div
    className="absolute top-[100px] lg:top-[unset] 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px]  xl:w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full 2xl:left-15 xl:left-10 lg:left-7" >
    </div>   {/*something missing */}
    <div
    className="lg:w-[40%] flex lg:min-h-screen items-center justify-end pt-[70px]  lg:pt-[0] z-10">
      <Image
        src={bannerImg1}
        alt=''
      className='object-contain lg:max-w-[90%] w-[90%] 2xl:max-w-[85%] h-[auto] z-[10]'/>
    </div>

    <div
      className="lg:w-[60%] flex flex-col items-center lg:mt-[0px] text-center lg:text-left mt-[150px]">
      
      <h2
      className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full lg:text-[70px] font-[600] font-Josefin py-2 lg:leading-[75px] 2xl:w-[600px]">
        Improve Your Online Learning Experience Better Instantly
      </h2>
      <br />
      <p
      className="dark:text-[#edfff4] text-[#000000c7] font-Josefin font-[600] text-[18px] 2xl:!w-[55%] xl:!w-[78%]">
        We have 40k+ Online courses & 500K+ Online registered student. 
        Find your desired Courses from them.
      </p>
      <br />
      <br />
      <div
        className="2xl:w-[55%] xl:w-[78%] w-[90%] h-[50px] bg-transparent relative">
        
        <input
          type="search"
          placeholder='Search Courses...'
          className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd]
          rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
        />
        <div
          className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[50px]">
          
          <BiSearch
            className="text-white"
            size={30}
          />

        </div>

      </div>

      <br />
      <br />
      <div
        className="2xl:w-[55%] xl:w-[78%] w-[90%] flex items-center">
        <Image
          src={ client1}
          alt=''
          className='rounded-full'
        />
        <Image
          src={client2}
          alt='' className='rounded-full'
        />

        <Image
          src={client3}
          alt='' className='rounded-full'
        />
        
        <p
        className="font-Josefin dark:text-[#edfff4] text-[0000000b3] lg:pl-3 text-[18px] font-600]">
          500K+ People already trusted us.{" "}
          <Link
            href='/courses'
            className="dark:text-[#46e256] text-[crimson]"
          >
          View Courses 
          </Link>{ " "}
        </p>


      </div>
      <br />

    </div>
    
  </div>

)

}

export default Hero