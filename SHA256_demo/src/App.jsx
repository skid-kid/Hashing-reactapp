import { useState } from 'react'
import SHA256 from 'crypto-js/sha256'


function App() {
  const [input, setInput] = useState('')
  const [ans,setAns]=useState('');
  const handleChange=(event)=>{
    setInput((event.target.value));
    setAns(SHA256(event.target.value).toString());
  }

  return (
    <div>
      <h1 className='font-bold text-5xl m-3 p-3'>SHA256 HASHING</h1>
      <div className='flex m-5 p-5  bg-gray-200 box-content'>
        <h3 className='text-3xl'>Enter Data:-</h3>
        <input className='bg-slate-400 box-border flex-grow p-2 block' type="text" value={input} onChange={handleChange}></input>
      </div>
      <div className='flex m-5 p-5  bg-gray-200 box-content'>
      <h3 className='text-3xl'>Hash:-</h3>
      <GenerateHash></GenerateHash>
      </div>
      </div>
  )
  function GenerateHash(){
      return <div className='bg-slate-400 flex-grow p-2'>
         <h3>
          {ans}
         </h3>
      </div>
  }
}

export default App
