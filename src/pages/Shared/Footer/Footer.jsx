import React from 'react';
const Footer = () => {
    return (
        <div className='bg-gray-500 text-center py-7 my-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                <div className=''>
                    <a className="btn btn-ghost normal-case font-cinzel text-3xl text-white">Learn<span className='text-pink-600'>lingo</span></a>
                    <p className='text-white text-sm'>LEARN AND SAY</p>
                    <div className='flex gap-2 justify-center mt-4'>
                        <img src="https://img.icons8.com/nolan/48/facebook-new.png" alt="facebook-new" />
                        <img src="https://img.icons8.com/3d-fluency/48/instagram-new.png" alt="instagram-new" />
                        <img src="https://img.icons8.com/nolan/48/whatsapp.png" alt="whatsapp" />
                        <img src="https://img.icons8.com/avantgarde/48/twitter.png" alt="twitter" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-white text-left'>
                        <h1 className='my-2 text-2xl font-semibold'>Address</h1>
                        <p>Bangladesh —</p>
                        <p>785 15h Street, Office 478</p>
                        <p>Dhaka, De 105</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-white text-left mr-6'>
                        <h1 className='my-2 text-2xl font-semibold'>Say Hiii</h1>
                        <p>learnlingo@email.com</p>
                        <p>+88 015 841 254 69</p>
                    </div>
                </div>
            </div>
            <hr className='my-8' />
            <p className='text-white'>LEARNlingo © 2023. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;