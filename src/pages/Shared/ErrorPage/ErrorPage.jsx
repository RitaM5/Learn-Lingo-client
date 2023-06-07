import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='w-60' src="https://assets.materialup.com/uploads/41d26cb2-81d9-42c8-8364-fb6b6e399da7/animated_teaser.gif" />
                <div>
                    <p className='text-2xl font-semibold md:text-3xl my-6'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 my-4 w-44 mx-auto flex justify-center py-3 rounded-md font-semibold text-lg bg-red-400 text-white'
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;