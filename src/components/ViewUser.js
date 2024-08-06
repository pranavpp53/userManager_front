import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/allapi'
import './viewUser.css'

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
        {user ? user.map(i => (

          <div class="card mb-3 cardStyle" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://i.postimg.cc/02csCQZW/360-F-553796090-XHr-E6-R9jwm-BJUMo9-HKl41hy-HJ5gqt9oz.jpg" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title ">{i.userName}</h5>
                  <p class="card-text">Address : {i.address}</p>
                  <p class="card-text"><small class="text-body-secondary">Email : {i.email}</small></p>
                </div>
              </div>
            </div>
          </div>

        )) : <p>hai</p>}
      </div>
    </>
  )
}

export default ViewUser