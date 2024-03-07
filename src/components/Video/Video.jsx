import React from 'react'
import bcvideo from '../../assets/background-video/bcVideo.mp4'
import { VideoBx } from './video.styles'

const Video = () => {
    return (
        <VideoBx>
            <video autoPlay loop muted>
                <source src={bcvideo} type='video/mp4' />
            </video>
        </VideoBx>
    )
}

export default Video