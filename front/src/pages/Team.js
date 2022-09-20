import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Team = ({ user }) => {
  const navigate = useNavigate();
  const [name,setName] = React.useState('');
  


  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        nameTeam: name,
        
    };

    try {
      const request = await fetch('http://localhost:8080/Api/v1/Team/Register', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
        
      });

      const data = await request.json();

      alert(data.message);
      }
     catch (e) {
      alert('Server error');
      console.log(e);
    }
  };



  return (
    <div className='container'>
      <h1 className='text-center'>Team Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label htmlFor='Input' className='form-label'>
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-control'
            id='InputName'
          />
        
          
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Team;
