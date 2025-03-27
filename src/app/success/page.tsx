import React from 'react'

export default function page() {
    return (
        <>
            <div className='bg-white dark:bg-black/40 p-7 rounded-md flex flex-col justify-center'>
                <h2 className="text-transparent mb-2 bg-clip-text font-semibold text-xl bg-gradient-to-r from-primary to-secondary">You submitted your info successfully. Thanks.</h2>
                <a className='underline text-center' href="/">Go To Home</a>
            </div>

        </>

    )
}
