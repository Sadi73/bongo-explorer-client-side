import React, { useContext, useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import EmptyPage from '../EmptyPage/EmptyPage';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const [myBookedData, setMyBookedData] = useState([]);

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/booked-packages/all?email=${user?.email}`)
            .then(res => setMyBookedData(res?.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='mt-10'>
            {myBookedData.length > 0 ? myBookedData.map(item => <div key={item?._id}>
                <PackageCard />
            </div>) :
                <EmptyPage />
            }


        </div>
    );
};

export default MyBookings;