import React from 'react';
import Hero_Section from '../Hero_Section/Hero_Section';
import Stepper from '../Stepper/Stepper';

const Home = () => {
    return (
        <div>
            <Hero_Section />
            <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
                <Stepper />
            </div>
        </div>
    );
};

export default Home;