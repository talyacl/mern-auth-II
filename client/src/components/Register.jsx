import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
        });
    if (response.ok) {
        alert('User registered successfully');
    } else {
        const errorText = await response.text();
        alert(`Error: ${errorText}`);
    }
}   catch (error) {
        console.error('Error:', error);
        alert('Error registering user');
}
};


return (
    <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleRegister}>
        <h2 className="mt-10 mb-8 text-center text-4xl font-bold leading-9 tracking-tight text-gray-800">Register</h2>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 pl-4"
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 mt-2 mb-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 pl-4"
        />
        <button type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Register</button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a></p>
    </div>
);
};

export default Register;
