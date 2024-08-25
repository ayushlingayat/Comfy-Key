import React from 'react'
import logo from "/logo/Comfykeys.svg";
import footer from "/images/footer.svg";
import socials from "/icons/socials.svg";

const Footer = () => {
  return (
        <section className='py-20 bg-darkGreen '>
    <div className='max-width'>

<div className='flex max-md:flex-col'>

        <div className='text-white max-md:mb-6 lg:w-1/3'>
                <img src={logo} alt=""  className='h-28 pb-6  '/>
                <p className='lg:w-1/2 pb-6'>1234 Elm Street, Suite 567,Springfield,62704 United Kingdom</p>
                <p className='pb-6'>+1(555)123-4567</p>
                <p>sample.email@example.com</p>
        </div>

        <div className='text-white max-md:mb-6 lg:w-1/3'>
                <p className='font-bold  text-2xl pb-4 '>Quick Links</p>
                <ul className='text-lg'>
                <li className='pb-3' ><a>Home</a></li>
                <li className='pb-3'><a>About</a></li>
                <li className='pb-3'><a>Amentities</a></li>
                <li className='pb-3'><a>Contact</a></li></ul>
        </div>

        <div className='text-white lg:w-1/3 '>
                <img src={footer} alt="" className='w-full'/>
                <p className=' text-xl pt-12 pb-3'>Around the Web</p>
                <img src={socials} alt="" className='' />
        </div>
</div>
    </div>
    </section>
  )
}

export default Footer