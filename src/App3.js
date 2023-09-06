import React from 'react'
import ReactDom from 'react-dom'
import Header from './components3/Header'
import Meme from './components3/Meme'
import Boxesdata from './components3/Boxesdata'
// import Options from './components2/Options'
// import Cards from './components2/Cards'
import './App3.css'
import Extra from './components3/Extra'
import Box from './components3/Box'
import Frm from './components3/Frm'


// import './App.css';
// import Cardsdata2 from './components2/Cardsdata2'
// import Img from './components2/Img'
// import Sunglasses from './components2/Sunglasses'
// import Eyeglasses from './components2/Eyeglasses'
// import Footer from './components2/Footer'
function App3(){
   
    let [boxval,setbox]=React.useState(Boxesdata)
     console.log(Boxesdata.on)
   
    let boxes=boxval.map(thing=>{
        return(
            <Box  
            on={thing.on}
            id={thing.id}
            />
        )
    })
   
    return(
        <div >

            <Header/>
            <Meme/>
            {/* <Extra/>
            {boxes}
            <Frm /> */}
        </div>
    )
}

export default App3


// import React from 'react';
// import TimeDisplay from './components3/TimeDisplay';

// function App3() {
//   return (
//     <div className="App">
//       <h1>Display Current Time</h1>
//       <TimeDisplay />
//     </div>
//   );
// }

// export default App3;
