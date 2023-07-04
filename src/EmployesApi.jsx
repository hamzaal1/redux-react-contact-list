import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EmployesApi() {
    const [Employers, setEmployers] = useState();
    useEffect(() => {
        async function FetchApi() {
            const Employers = await axios.get('https://jsonplaceholder.typicode.com/todos/')
                .catch(err => console.log(err))
            setEmployers(Employers.data)
        }
        FetchApi();
    }, [])

    console.log(Employers);

    return (
        <div>

        </div>
    )
}

export default EmployesApi;