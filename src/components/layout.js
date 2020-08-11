import React from "react"

export default function Layout(props) {
  let banner;
  if (process.env.GATSBY_STAGE && process.env.GATSBY_STAGE !== 'prod') {
    banner =  (
      <div 
        style={{
          color: "#fff", 
          textAlign:"center",
          padding:"4px 4px",
          background:"red",
          position:"fixed",
          top:"0px",
          right:"0px",
          opacity: "0.7"
        }}
      >
        {process.env.GATSBY_STAGE} version
      </div>
    );
  }

  return (
    <>
      {banner}
      <main>
        {props.children}
      </main>
      

    </>
    
  )
}
