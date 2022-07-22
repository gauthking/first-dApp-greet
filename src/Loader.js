import React from 'react'
import Load from "./loading.gif"

function Loader() {
    return (
        <div className='flex items-center justify-center w-10'>
            <img src={Load} alt="loading" />
        </div>
    )
}

export default Loader