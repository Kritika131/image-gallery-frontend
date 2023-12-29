import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import axois from "axios"
import { Link } from 'react-router-dom'

export default function AddCard() {

  const [data,setData] = useState({
    author:"",
    download_url:"",
    url:"",
    width:undefined,
    height:undefined
  })

  const handleData = (e)=>{
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    
    // console.log(data);
      
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("data-",data);
    console.log("clicked---");

    let response = await axois.post(`${process.env.REACT_APP_BASE_URL}/api/addimagedata`,data)
    response=response.data
      
      console.log("post response ",response);
      if(response.status==="success"){
        alert(response.msg)
        setData({
          author:"",
          download_url:"",
          url:"",
          width:undefined,
          height:undefined
        })
      }
      
  }
  return (
    <div className='pt-16 px-16 ml-20 flex flex-col items-center     w-4/6'>

          <h2 className="text-4xl  text-orange-700 lg:text-4xl font-bold leading-7 pt-5 pb-4 ">Add New Image Detail</h2>
    
    <form className='w-4/5 mt-20 ml-4  '  onSubmit={handleSubmit}  autoComplete='off'>
      <div className="w-full ">
        
        <div className=" pb-12">
         
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
          <div className="col-span-full">
              <label htmlFor="download_url" className="block text-xl font-medium leading-6 text-gray-900">
                Past image url link
              </label>
              <div className="mt-2 ">
              
                <input
                  type="text"
                  name="download_url"
                  id="download_url"
                  autoComplete="off"
                  onChange={(e)=>handleData(e)}
                  value={data.download_url}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6   "
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="author" className="block text-xl font-medium leading-6 text-gray-900">
                Credit to
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="author"
                  id="author"
                  autoComplete="off"
                  value={data.author}
                  onChange={(e)=>handleData(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="url" className="block text-xl font-medium leading-6 text-gray-900">
                Image Details Url Link
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="url"
                  id="url"
                  autoComplete="off"
                  value={data.url}
                  onChange={(e)=>handleData(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="width" className="block text-xl font-medium leading-6 text-gray-900">
               Image Width
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="width"
                  id="width"
                  autoComplete="off"
                  value={data.width}
                  onChange={(e)=>handleData(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="height" className="block text-xl font-medium leading-6 text-gray-900">
               Image Height
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="height"
                  id="height"
                  autoComplete="off"
                  value={data.height}
                  onChange={(e)=>handleData(e)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>

           
            
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/"  className="text-xl font-semibold leading-6 text-gray-900 hover:text-gray-700">
          Cancel
        </Link>
        <button 
          type="submit"
          // onSubmit={(e)=>handleSubmit(e)}
      
          className="rounded-md bg-indigo-600 px-4 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}