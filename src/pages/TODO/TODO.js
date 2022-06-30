import React from 'react';
import img1 from '../../../src/images/download.png'
import './TODO.css'

const TODO = () => {
 return (
<div  >
<div class="card bg-secondary content-center sm:ml-2 w-96 glass bdr">
  <figure><img src={img1} alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">Write your task!</h2>
   
    <div class="form-control">
  <label class="label">
   
  </label>
  <label class="input-group">
    <input type="text" placeholder="Task Name" class="input input-bordered " />
    <span className='bg-primary text-white'>Enter</span>
  </label>
</div>
  </div>
</div>                                                    
</div>
);
};

export default TODO;