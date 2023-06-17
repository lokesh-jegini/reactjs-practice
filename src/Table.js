import React from 'react'

export default function Table(probs) {
    console.log(probs)
    const {data} = probs;
  return (
    <div>
          <center>Table</center>
          <table style={{ border: "1px solid #ccc", }}>
              <thead>
                  <tr>
                      <th>first_name</th>
                      <th>last_name</th>
                      <th>email</th>
                      <th>gender</th>

                  </tr>
              </thead>
              <tbody>
                  {
                      data.map((item, index) => { 
                         return <tr key={item.id}>
                              <td>{item.first_name}</td>
                              <td>{item.last_name}</td>
                             <td>{item.email}</td>
                                <td>{item.gender}</td>

                             
                          </tr>
                      })
                }
                 
              </tbody>
          </table>
    </div>
  )
}
