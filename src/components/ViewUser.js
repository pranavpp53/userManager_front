import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/allapi'
import './viewUser.css'
import BASE_URL from '../service/baseurl';

function ViewUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUser(response.data);


    };

    fetchUsers();
  }, []);
  return (
    <>

      <div className='allCardDes'>
        <h1>Users list</h1>
        {user ? user.map(i => (
          <div className="card cardStyle" key={i.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <div className='image-container'>
                  <img src={`${BASE_URL}/${i.image}`} className="card-image" alt={i.userName} />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{i.userName}</h2>
                  <h5 className="card-text">Address: {i.address}</h5>
                  <p className="card-text"><small className="text-body-secondary">Email: {i.email}</small></p>
                </div>
              </div>
            </div>
          </div>
        )) : <p>Loading...</p>}
      </div>
    </>
  )
}

export default ViewUser