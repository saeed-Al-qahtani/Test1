import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const League = ({ user }) => {
  const navigate = useNavigate();
  const [game,setGame] = React.useState('');
  const [details,setDetails] = React.useState('');
  const [register,setRegister] = React.useState('');

  
  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        game: game,
        details: details,
        RegisterLink: register,

    };

    try {
      const request = await fetch('localhost:8080/Api/v1/league', {
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
      <h1 className='text-center'>League Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label htmlFor='Input' className='form-label'>
            Name of League
          </label>
          <input
            value={game}
            onChange={(e) => setGame(e.target.value)}
            type='text'
            className='form-control'
            id='InputGame'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Inputdetails' className='form-label'>
            details
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className='form-control'
            id='InputDetails'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='Input' className='form-label'>
            Register Link
          </label>
          <input
            value={register}
            onChange={(e) => setRegister(e.target.value)}
            type='text'
            className='form-control'
            id='InputRegister'
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default League;
