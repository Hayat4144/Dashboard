import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function WelcomeMessage() {
    const [greeting, setGreeting] = useState('')
    const { data } = useSelector(state => state.User)
    useEffect(() => {
        let current_time = new Date();
        if (current_time.getHours() < 12) {
            setGreeting('Good morning');
        }
        else if (current_time.getHours() < 18) {
            setGreeting('Good afternoon')
        }
        else {
            setGreeting('Good evening')
        }
    }, [])


    return (
        <Fragment>
            <section className='md:mx-5 mx-2 my-5 lg:mx-10 dark:text-gray-100'>
                <div className='welcome_message flex space-x-2 text-2xl'>
                    <h1 className='welcome_text'>{greeting},</h1>
                    <span className='user_name cursor-pointer'>{data.name}</span>
                </div>
                <p>Here is what happening with your store today.</p>
            </section>

        </Fragment>
    )
}
