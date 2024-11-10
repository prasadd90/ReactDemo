import React from 'react';
 

function SubComp() {
  // Button click handler
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
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
            </label>
            <br /><br />
            <button onClick={handleButtonClick} disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
             

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
}

export default SubComp;
