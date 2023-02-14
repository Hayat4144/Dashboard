import React, { Fragment, useState  ,useEffect} from 'react'

export default function WelcomeMessage() {
    const [greeting, setGreeting] = useState('')
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
            <section className='mx-5 my-5 md:mx-10 dark:text-gray-100'>
                <div className='welcome_message flex space-x-2 text-2xl'>
                    <h1 className='welcome_text'>{greeting},</h1>
                    <span className='user_name cursor-pointer'>Hayat ilyas</span>
                </div>
                <p>Here is what happening with your store today.</p>
            </section>

        </Fragment>
    )
}
