import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/Ahtasham-ul-haq" target='_blank' >
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/ahtasham1802">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/ahtasham-ul-haq-9b0a41246/">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia