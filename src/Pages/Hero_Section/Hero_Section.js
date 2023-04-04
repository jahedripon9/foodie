import React from 'react';
import Banner from '../../Assets/Home Page Banner .png';
import './Hero_Section.css';

const Hero_Section = () => {
    return (
        <div className='container mx-auto px-8 '>
            <section class="text-gray-600 body-font  ">
                <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center bg">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Your Favourite Food Delivered Hot & Fresh
                        </h1>
                        <p class="mb-8 leading-relaxed">Healthy switcher chefs do all the prep work, like
                            peeding, chopping & marinating, so you can cook a fresh food.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-full text-lg font-bold">Order Now <span className='px-2 pt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg></span>
                            </button>

                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={Banner}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero_Section;