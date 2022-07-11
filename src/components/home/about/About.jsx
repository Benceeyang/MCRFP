import React from 'react'

function About() {

      const data = [
        {
          title: "CITY GROWTH & DEVELOPMENT",
          desc1: "A $5 billion surge in investment in construction projects, continued improvements to award-winning civic projects like the Milwaukee RiverWalk, and dedication to turning beloved pieces of the past into the best of the future: explore how Milwaukee is growing and changing.",
          desc3: "New construction, urban revitalization, and advances in public transit are all coming together to make Milwaukee a city on the rise.",
          cover: "./assets/about.jpg",
          
        },
      ]
      return (
        <>
          <section className='abouttopMarign'>
            <div className='container flex'>
           
              {data.map((value) => {
                return (
                  <>


                    <div className='left mtop'>
                    
                      <div className='heading'>
                    
                        {/* <h3>About Milwaukee</h3> */}
                        <h1>{value.title}</h1>
                      </div>
    
                      <p>{value.desc1}</p>
                      <p>{value.desc2}</p>
                      <p>{value.desc3}</p>
                      {/* <button className='primary-btn'>Download CV</button> */}
                    </div>
                    <div className='right'>
                      <div className='img'>
                        <img src={value.cover} alt='' />
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </section>
        </>
      )
    }
    
    export default About