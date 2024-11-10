import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubComp from './SubComp';

const MyComponent = ({ count }) => {
    // State management 
    const [SName, setSName] = useState('');
    const [LastName, setLastName] = useState('');
    const [MobileNo, setMobileNo] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [list, setList] = useState([]);
    const [Id, setId] = useState(0);


    const handleRowClick = (item) => {
        if (item.sName !== SName || item.lastName !== LastName || item.mobileNo !== MobileNo) {
            setSName(item.sName);
            setLastName(item.lastName);
            setMobileNo(item.mobileNo);
            setId(item.id);
            
        } else {
            // If the same row is clicked, clear the fields
            setSName('');
            setLastName('');
            setMobileNo('');
        }
    };
    // Call API to load list of values on component load
    useEffect(() => {
        fetchList();
    }, []); 

    

    const fetchList = async () => {
        setLoading(true);
        setError(null); // Reset error state before the call

        try {
            const response = await fetch('http://localhost:5204/api/Student'); // Change to your endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setList(data.data); // Assuming the API returns an array of items
            console.log(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const SearchByTexbox = async (name) => {
        setLoading(true);
        setError(null); // Reset error state before the call
 
        try {
            const response = await fetch('http://localhost:5204/api/Student/search?nm='+SName); // Change to your endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setList(data.data); // Assuming the API returns an array of items
            console.log(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    
    const handleButtonClick = async () => {
        setLoading(true);
        setError(null); // Reset error state before the call

        if (!SName.trim() || !LastName.trim() || !MobileNo.trim()) {
            setError('All fields are required.');
            setLoading(false); // Stop loading
            return;
        }

        const formData = { SName, LastName, MobileNo,Id};

        try {
            const response = await fetch('http://localhost:5204/api/Student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setResponse(result);
            fetchList(); // Refresh the list after saving
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>

{/* <SubComp/> */}

            <label>
                First Name:
                <input
                    type='text'
                    id="SName"
                    name="SName"
                    value={SName}
                    onChange={(e) => setSName(e.target.value)} // Update state on input change
                />
            </label>
            <br /><br />
            <label>
                Last Name:
                <input
                    type='text'
                    id="LastName"
                    name="LastName"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)} // Update state on input change
                />
            </label>
            <br /><br />
            <label>
                Mobile No:
                <input
                    type='text'
                    id="MobileNo"
                    name="MobileNo"
                    value={MobileNo}
                    onChange={(e) => setMobileNo(e.target.value)} // Update state on input change
                />
                 <input
                    type='hidden'
                    id="Id"
                    name="Id"
                    value={Id}
                    onChange={(e) => setId(e.target.value)} // Update state on input change
                />
                 
            </label>

            <br /><br></br>
           
            &nbsp; &nbsp;
            &nbsp; &nbsp;
            &nbsp; &nbsp;
            &nbsp; &nbsp;
            &nbsp; &nbsp;
            &nbsp; &nbsp;

            <button onClick={handleButtonClick} disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            
<br></br><br></br>
<label>Enter Name</label>
<input type='text' id="Id"
                    name="Id"
                    onChange={(e) => setSName(e.target.value)}
                />    <button onClick={SearchByTexbox}  value={'Search'} id='Search'>
                    {'Search'}
                 
            </button>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.id}> 
                                <td>{item.sName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.mobileNo}</td>
                                <td>
                                    <a href="#!" onClick={() => handleRowClick(item)}>GetId</a>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


           
        </div>
    );
};

export default MyComponent;
