import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column3">
                        {
                          console.log(user)
                        }
                        <div className="atl">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;