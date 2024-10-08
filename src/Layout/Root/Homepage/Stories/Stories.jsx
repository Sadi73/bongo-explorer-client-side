import React, { useEffect, useState } from 'react';
import './Stories.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Heading from '../../../../Components/Heading';

const Stories = () => {
    const [allStories, setAllStories] = useState([])

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/stories')
            .then(res => setAllStories(res?.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='space-y-10'>
            <Heading
                title='Traveler Story'
                subTitle='See The Journey Of Our Explorers'
            />

            <div className="container grid grid-cols-2 md:grid-cols-4 gap-2">
                {allStories.slice(0, 8).map((story, index) => (
                    <div className="image-card" key={index}>
                        <img src={story?.tour_image} alt={`Image ${index + 1}`} className='rounded-lg' />
                        <div className="overlay">{story.name}</div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center'>
                <Link className='text-teal-500 text-xl font-semibold' to='/story/all'>See All Stories</Link>
            </div>
        </div>
    );
};

export default Stories;