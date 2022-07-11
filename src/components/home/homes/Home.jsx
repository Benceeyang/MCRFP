import React from 'react'

function Home() {
  return (
    <>
    <section className="home">
        <div className="container flex">
       

            <div className="left">
            
                <div className="img">
                    <img src="./assets/home.jpg" alt="" />
                </div>
                
            </div>
            <div className="right topMarign">
                <h1>About Milwaukee <br />
                    
                    </h1>
                    {/* <div className="scoialIcon">
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-instagram instagram'></i>
                        <i className='fab fa-twitter twitter'></i>
                        <i className='fab fa-youtube youtube'></i>
                        <i className='fab fa-pinterest pinterest'></i>
                        <i className='fab fa-dribbble dribbble'></i>
                    </div> */}
                    <p>Milwaukee is a city that cherishes its roots; you'll see revitalized architecture throughout downtown, and a parade of summer festivals celebrate the diverse cultures that made the city what it is today. But Milwaukee is also a city that's growing and changing. From major construction projects like a brand new arena and streetcar to the revival of streets and neighborhoods around the city, there's a new energy in the air.</p>
                    {/* <button className='primary-btn'>Contact Us</button> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Home