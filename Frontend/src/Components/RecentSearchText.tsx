import axios from 'axios'
import { useEffect, useState } from 'react'

const RecentText = ()=>{

    const [prompt,setPrompt] = useState([])
    const username = localStorage.getItem('username')

    useEffect(()=>{
        const recent =async()=>{
           const response = await axios.get("http://localhost:3000/userTexts",{
          params:{  user: username}
           })

            setPrompt(response.data)
            console.log(response)
        }
        recent()
    },[])

    const handleData = async()=>{
     
    }

    return(
        <div className='w-[90%]'>
           <p className='text-[25px]'>Recent</p>
           {
              prompt.map((item)=>{
                return(
                    <>
                       <p className=" h-[35px] mt-2 mb-2 text-[16px] flex items-center p-3 w-max hover:bg-slate-300 rounded-md  cursor-pointer" onClick={handleData}>{item.promptText}</p>
                    </>
                )
              })
           }
        </div>
    )
}

export default RecentText