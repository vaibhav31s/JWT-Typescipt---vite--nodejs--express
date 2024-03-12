import React from 'react'

export default function Home() {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  
  return (
      <div>
        <button onClick = {()=>{document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; document.cookie = ' token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; window.location.href = '/login';}

        }>Logout</button>

        <h1>Home</h1>
        <div >
  
        <h1> Name : {JSON.parse(user).name}</h1>
        <h1> Email : {JSON.parse(user).email}</h1>

   
        </div>
       
    </div>
  )
}
