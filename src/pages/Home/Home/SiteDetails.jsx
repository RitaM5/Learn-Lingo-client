import React from 'react';
import cat from '../../../assets/cat.jpg';

const SiteDetails = () => {
    return (
        <div className='px-5 my-10'>
            <h1 className='font-poppins text-3xl text-pink-500 font-semibold my-14'>What is Learnlingo ?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-8 dark:text-white mt-6 font-poppins text-lg'>
                    <p>
                        Learnlingo is the best language learning app & website for kids. It is available in 50 languages with over 30,000 online activities.
                    </p>
                    <p>
                        Learnlingo's online portal is 100% safe and secure. No ads, no pop-ups, no chat rooms. Our new dashboard allows real-time parental controls to monitor the child's participation and progress.
                    </p>
                    <p>
                        Get unlimited access to  Learnlingo premium on your desktop, laptop, smartphone, tablet, all for one fixed monthly fee: $14.95 a month. Cancel anytime. No obligations, no contracts, no extra costs.
                    </p>
                    <button className='px-5 py-3 text-white  font-poppins bg-pink-500 rounded-3xl'>Start Free Trial</button>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="3000" className='md:flex md:justify-end items-center'>
                    <img src={cat} className='w-full rounded' />
                </div>
            </div>
            <div className='my-20 mt-20'>
                <h1 className='font-poppins text-3xl text-pink-500 font-semibold my-10 mt-8'>How do students learn languages with Learnlingo ?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div data-aos-duration="3000" data-aos="zoom-out-right" className='flex items-center gap-6'>
                        <img src="https://img.icons8.com/color-glass/69/language-skill.png" alt="language-skill" />
                        <div className='font-poppins space-y-4 mt-8'>
                            <h2 className='text-2xl font-semibold text-blue-400 mt-6'>Language lessons</h2>
                            <p className='text-lg dark:text-white'>
                                Language lessons for students inspire children to speak a second language while watching fun videos and cartoons.
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-left" data-aos-duration="3000" className='flex items-center gap-6'>
                        <img src="https://img.icons8.com/color/69/ability-to-use-positive-language.png" alt="ability-to-use-positive-language" />
                        <div className='font-poppins space-y-4 mt-8'>
                            <h2 className='text-2xl font-semibold text-blue-400'>Language games</h2>
                            <p className='text-lg dark:text-white'>
                                Language games for kids encourage children to repeat words and phrases while earning surprise awards.
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="3000" className='flex items-center gap-6'>
                        <img src="https://img.icons8.com/emoji/69/books-emoji.png" alt="books-emoji" />
                        <div className='font-poppins space-y-4 mt-8'>
                            <h2 className='text-2xl font-semibold text-blue-400'>Language books</h2>
                            <p className='text-lg dark:text-white'>
                                Language books for students motivate student to read the beginner and advanced level stories.
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-left" data-aos-duration="3000" className='flex items-center gap-6'>
                        <img src="https://img.icons8.com/3d-plastilina/69/bookmark--v1.png" alt="bookmark--v1" />
                        <div className='font-poppins space-y-4 mt-8'>
                            <h2 className='text-2xl font-semibold text-blue-400'>Language worksheets</h2>
                            <p className='text-lg dark:text-white'>
                                Language worksheets and flashcards help students to learn the basics for writing and reading.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteDetails;
//https://dinolingo.com/