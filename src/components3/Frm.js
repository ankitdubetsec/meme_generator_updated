
import React from 'react'
import ReactDom from 'react-dom'
function Frm() {
    let [form, setform] = React.useState({
        // firstname:"",
        // lastname:"",
        // email:"",
        // comments:""

        email:"",
        password:"",
        confirmpassword:"",
        check:false
    })
    console.log(form)

    function sub(event){
        event.preventDefault()
        let res=form.password===form.confirmpassword?"logged in sucessfully":"passwords do not match"
        console.log(res)
    }
    function change(event) {
        // console.log(event.target.value)
        // setlastname(event.target.value)
        const {name,value,type,checked}=event.target
        setform(prevstate=>{
            return(
                {
                    ...prevstate,
                    [name]:type==="checkbox"?checked:value
                }
            )
        })
    }

    let checkmsg=form.check?"Thanks for subscribing":"Subscribe to our newsletter"
    return (
       <div>
        
            <form onSubmit={sub}>
                <input type="text" placeholder="email" onChange={change} name="email">
                </input>           
            
            <input type="text" placeholder="password" onChange={change} name="password" value={form.password}>
            </input>  
            <input type="text" placeholder="confirm password" onChange={change} name="confirmpassword" value={form.confirmpassword}>
            </input>          
            <input type="checkbox" checked={form.check} onChange={change} name="check" htmlFor="boxx"></input>
            <label id="boxx">{checkmsg}</label>
        <button>submit</button>
    </form>
    </div>
    )
}

export default Frm