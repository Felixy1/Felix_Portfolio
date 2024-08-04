import React, { useEffect, useState } from 'react';

const Resume = () => {
    const [resume, setResume] = useState('');

    useEffect(() => {
        fetch('/api/resume')
            .then(response => response.json())
            .then(data => setResume(data.resume));
    }, []);

    return (
        <div>
            <h1>Resume</h1>
            <p>{resume}</p>
        </div>
    );
};

export default Resume;