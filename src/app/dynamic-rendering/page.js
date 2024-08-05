import React from 'react'
import { cookies } from 'next/headers'

function Page() {

    const cookieStore = cookies()
    const theme = cookieStore.get('theme')

    return (
        <div>
            <h2>Dynamic component</h2>
            <h6>{"In Next.js, these dynamic functions are: cookies(), headers(), and searchParams"}</h6>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
}

export default Page