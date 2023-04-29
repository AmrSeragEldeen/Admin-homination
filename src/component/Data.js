import React from 'react'
import {requests} from "./req"
const Data = () => {
  return (
    <div>
        {
            requests.map((req) => {
                return (
                    <div key={req._id} className="data">
                        <p>{req.__v}</p>
                        <p>CAtegories : {req.categories}</p>
                        <p> created at : {req.createdAt}</p>
                        <p> Description : {req.desc}</p>
                        <p> Provider : {req.provider}</p>
                        <p> Title : {req.title}</p>
                        <p> Updated at :{req.updatedAt}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Data