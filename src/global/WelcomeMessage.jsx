import React, { Fragment } from 'react'

export default function WelcomeMessage() {
    return (
        <Fragment>
            <section className='mx-5 my-5 md:mx-10 dark:text-gray-100'>
                <div className='welcome_message flex space-x-2 text-2xl'>
                    <h1 className='welcome_text'>Welcome Back,</h1>
                    <span className='user_name cursor-pointer'>Hayat ilyas</span>
                </div>
                <p>we are glad to see your here again.</p>
            </section>

        </Fragment>
    )
}
