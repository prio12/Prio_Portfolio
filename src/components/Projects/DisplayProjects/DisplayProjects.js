import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const DisplayProjects = ({project}) => {
  

    const {title,img,para1,para2,para3,live} = project;
    return (
        <section className='container'>
            <div className="card shadow-xl">
  <figure><img style={{height:"200px"}} className='rounded-xl' src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 style={{color:"orange"}} className="text-center text-2xl">
      {title}
    </h2>
    
    <p style={{fontSize:"13px"}}>* {para1}</p>
    <p style={{fontSize:"13px"}}>* {para2}</p>
    <p style={{fontSize:"13px"}}>* {para3}</p>
    {/* <span>{para1}</span> */}
    <div className="card-actions justify-end">
   <a className='btn btn-outline btn-info' href={live}>Live Site</a>
   {/* <Link to='/projects'><button></button></Link> */}
   <a className='btn btn-outline btn-info' href='#projectsDetails'>Live Site</a>
    </div>
  </div>
</div>
        </section>
    );
};

export default DisplayProjects;