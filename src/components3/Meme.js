import React from 'react';
import ReactDOM from 'react-dom';
import Memesdata from './Memesdata'
import Counter from './Counter'
// import Meme from './components3/Meme'
function Meme() {

    // const arr=["Thing1","Thing2"]
    // let [image, setImage] = React.useState("")
    // let num=Math.floor(Math.random()*(Memesdata.data.memes.length))
    // console.log(num)
    //    let [answer,setanswer]=React.useState(true)
    // const [thingarray,setthingarray]=React.useState(["Thing1","Thing2"])



    let [image, setImage] = React.useState({})
    

    React.useEffect(function(){
        console.log("effect rendered")
    
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res =>res.json())
        .then(data=>setImage(data))
      },[])

      console.log(image)

     const [meme,setmeme]=React.useState(
        {
            toptext:"",
            bottomtext:"",
            img:"images/meme21.jpg"
        }
     )
      console.log(meme)
     

    // let [starwars,setstarwars]=React.useState({})
    // let [num,setnum]=React.useState(1)
    


    
    function btnevent1() {
        // let newtext=`Thing ${arr.length+1}`
        //   arr.push(newtext)
        //   console.log(arr)
        //let x = document.getElementById("counter-value")

        // cntfunc(Number(x.innerHTML)+1)
        // setImage(Memesdata.data.memes[num].url)
        // setanswer(prevstate=>!prevstate)
        // setthingarray(prevState=>{
        //     return(
        //         [...prevState,`Thing${prevState.length+1}`]
        //     )
        // })


        let num=Math.floor(Math.random()*(image.data.memes.length))
        let url=image.data.memes[num].url
        setmeme(prevstate=>
            (
                {
                    ...prevstate,
                    img:url
                }
            ))
        


        // setnum(prevstate=>prevstate+1)
    }
    // const thingelement=thingarray.map(thing=>{
    //     return(
    //         <p id={thing}>{thing}</p>
    //     )
    //   })
    function btnevent2() {
        // let newtext=`Thing ${arr.length+1}`
        //   arr.push(newtext)
        //   console.log(arr)
        // let x = document.getElementById("counter-value")
        // if (Number(x.innerHTML) != 0) {
        //     cntfunc(val => val - 1)
        // }

        // setnum(prevstate=>prevstate-1)
    }

  function change(event){
    const {type,name,value}=event.target

    setmeme(
        prevstate=>{
            return(
                {
                    ...prevstate,
                    [name]:value
                }
            )
        }
    )


  }

  

    return (
        <div>

            <input type="text" placeholder="Top text" className="texts1" name="toptext" value={meme.toptext} onChange={change}></input>
            <input type="text" placeholder="Bottom text" className="texts2" name="bottomtext" value={meme.bottomtext} onChange={change}></input>
            <button type="button" class="btn btn-primary" onClick={btnevent1}>Generate meme</button>
            {/* <div className="container">
                <div className="counter">
                    <button id="increment-btn" onClick={btnevent1}>Generate next</button>
                    <Counter
                         number={num}
                    />
                    <button id="decrement-btn" onClick={btnevent2}>-</button>
                </div>

            </div> */}
          <div className='container'>
    <img src={meme.img} className='memeimg'></img>
    <h2 className='memetext1' id='text1'>{meme.toptext}</h2>
    <h2 className='memetext2' id='text2'>{meme.bottomtext}</h2>
</div>
     {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
        </div>
    )
}

export default Meme


