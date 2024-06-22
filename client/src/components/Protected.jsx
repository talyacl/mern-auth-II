import React, { useEffect, useState } from 'react';

const Protected = () => {
    const [message, setMessage] = useState('');

useEffect(() => {
    const fetchProtected = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3000/protected', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.text();
            setMessage(data);
        } else {
            setMessage('Access denied');
        }
        } catch (error) {
        console.error('Error:', error);
        }
    };

    fetchProtected();
}, []);

return (
    <div className="mt-10 text-center text-4xl font-bold">
        <h2 className="text-gray-600 mb-6 pt-10 text-8xl">Protected Page</h2>
        <p className="text-red-500 pt-6 text-5xl">{message}</p>
    </div>
);
};

export default Protected;



