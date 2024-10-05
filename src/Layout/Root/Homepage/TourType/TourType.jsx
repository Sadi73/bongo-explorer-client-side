import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './TourType.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { GiHiking } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../../Components/Heading';

const types = [
    { name: 'hiking' },
    { name: 'sports' },
    { name: 'walking' },
    { name: 'wildings' },
    { name: 'cycling' },
    { name: 'rafting' },
    { name: 'camping' },
    { name: 'museum' },
    { name: 'architecture' },
    { name: 'historical' },
    { name: 'fishing' },
];

const TourType = () => {

    const navigate = useNavigate();

    return (
        <div className='space-y-10'>

            <Heading
                title='Tour Type'
                subTitle='Find Your Tour By'
            />

            <Swiper
                slidesPerView={6}
                spaceBetween={100}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ padding: '0 5.5rem 0 2.5rem ' }}
            >
                {
                    types.map((type, index) =>
                        <SwiperSlide key={index}>
                            <div
                                style={{ width: '150px', height: '150px', border: '1px solid', borderRadius: '50%', }}
                                className='flex flex-col items-center justify-center space-y-3 cursor-pointer'
                                onClick={() => navigate(`/package/all?type=${type?.name}`)}
                            >
                                <GiHiking className='text-5xl' />
                                <p className='uppercase font-bold'>{type?.name}</p>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>

        </div>
    );
};

export default TourType;