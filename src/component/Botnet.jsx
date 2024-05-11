import React from 'react'
import { Link } from 'react-router-dom';

function Botnet() {
  return (
//     <div>
      
//       <>
//       {/*<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>*/}
// <df-messenger
//   intent="WELCOME"
//   chat-title="helloworld"
//   agent-id="eff46fcc-63d4-40c4-8d8d-f0dfef94c73a"
//   language-code="en"
// ></df-messenger>
//     </>

//     </div>
<div>
      
{/* <Link href='https://wa.me/+92430405254' target="blank" >
<img className="relative m-96 " alt="whatsapp" width={60} height={60} src='./whatsapp.png' />
</Link> */}
<Link href='https://wa.me/+92430405254' target="_blank" rel="noreferrer">
  <img className="fixed bottom-20 right-10 z-50" alt="whatsapp" width={60} height={60} src='./whatsapp.png' />
</Link>

  </div>
  )
}

export default Botnet;