import React from 'react'
import '../styles/style.css'

export default function Content() {
    return(
        <div className="Main-Content">
                <form className='Form'>
                    <input placeholder='Top Text' className='form-input' type="text" />
                    <input placeholder='Bottom Text' className='form-input' type="text" />
                    <input className='form-submit' type="submit" />
                </form>
        </div>
    )
}