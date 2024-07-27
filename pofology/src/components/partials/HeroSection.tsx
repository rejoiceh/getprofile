import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiFileText, FiGithub } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/profile.png" width={180} height={180} alt="avatar" />
          {/* <Image src="/images/avatar/profile_pic.png" width={180} height={250} alt="avatar" /> */}
        </div>
        <h1 className="mt-4 text-6xl font-bold ">Rejoice Hu</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['Machine Learning Engineer', 'Data Scientist', 'Lifelong Learner']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://linkedin.com/in/rejoice-hu">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiLinkedin size={25} />
            </a>
          </Link>

          <Link href="https://drive.google.com/file/d/186dzx3x3P2li9JsoyU477m6kz0_Nt5XB/view?usp=sharing">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiFileText size={25} />
            </a>
          </Link>

          <Link href="https://github.com/rejoiceh">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        {/* <Button className="mt-5 px-8">Hire Me</Button> */}
        <Link href="https://drive.google.com/file/d/186dzx3x3P2li9JsoyU477m6kz0_Nt5XB/view?usp=sharing">
          <a className="btn mt-5 px-8">Hire Me</a>
        </Link>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
