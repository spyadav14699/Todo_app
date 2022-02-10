


import { useEffect, useState } from 'react'
import './App.css'


function App() {


  return (
    <div className="App">
      
     <Boxes/>
      
    </div>
  )
}

function Boxes() {

  const [todose, setTodose] = useState([])
  const [text, setText] = useState("")
  const [kg, setKg] = useState("")
const [loading, setLoading] = useState(false)



  useEffect(() => {
 
    getdata()

  },[])

 
  

  const getdata = () => {
    setLoading(true)
 fetch("http://localhost:3001/posts")
 .then((d) => d.json())
 .then((res) => {
setTodose(res)
setLoading(false)
 })
  }
 

  return loading ? (
    "Loading..."
  )  : <div>
      <input type="text" placeholder='Enter Item Name' onChange={

        (e) => setText(e.target.value)
      }/>
<br />
          <br />
      <input type="number" placeholder='Enter Item Name' onChange={

(e) => setKg(e.target.value)
}/>
<br />
          <br />

      <button onClick={() => {
        const data = {Name : text, Quantity : kg}


        const blank = () => {
        
          if(text.length === 0 || kg.length === 0) {

            id == null
          }
        
          else {
           return data
          }
        }
        fetch("http://localhost:3001/posts", {
          method : "POST",
          body : JSON.stringify(blank()),
          headers:{
            "content-type" : "application/json"
          }

        }).then(getdata())
      }}>Submit</button>

    
      
         <div className='data'>
           
           <table>
           <tr>
          <th>Grosery Name</th>
          
        <th>Quantity in (kg)</th>
           
            
               </tr>
               {todose.map((e) =>(
                <tr>
           <td>{e.Name}</td>
           <td>{e.Quantity}</td>
           
            
              </tr>
              ))}
                     </table>
  </div>

      
     

  </div>
}

export default App
