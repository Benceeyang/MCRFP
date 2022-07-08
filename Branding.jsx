import React from "react"



function Branding() {
  const data = [
    {
      
      heading: "Industry & Innovation",
      desc: "Milwaukee is still one of the nation's centers of manufacturing. We're a city that knows how to make and create, so it's no surprise that today the city is a hub for makers, entrepreneurs, inventors, chefs, dreamers, and creatives of all kinds.",
    },
    {
      
      heading: "Ecology Initiatives",
      desc: "Milwaukee has a storied history of eco-friendly initiatives and appreciation for natural beauty. Whether its Milwaukee’s water technology, LEED Gold certified hotel, or 1400 acres of beachfront access, we go for the gold in being green!",
    },
    {
    
      heading: "History & Heritage",
      desc: "While we look forward with a progressive vision of what Milwaukee can become, we also remain committed to respecting our past and the role it has played in shaping who we are as a city today.",
    },
  ]
  return (
    <>
      <section className='branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding