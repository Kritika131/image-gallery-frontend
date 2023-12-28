import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";



export default function CardSection() {
  
  const [dataItem,setDataItem]= useState([])

  const fetchData = async()=>{
    try{
      // let data = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
      let data = await fetch('http://localhost:8080/api/getimages');
      data = await data.json();
      if(data.status==="success"){

        setDataItem(data.res);
        console.log(data);
      }

   } catch(err){
     console.log(err);
   }
  }
  useEffect(()=>{
    fetchData()
  },[]);

  
  const handleDelete=async(id)=>{
      let response = await axios.delete(`http://localhost:8080/api/deleteimage/${id}`);
      response = response.data;
      if(response.status==="success"){
        fetchData()
        alert("Item Deleted Successfully!!!")
          
      }
      // console.log(response)

  }


  return (
    <div className="bg-white w-4/5 px-14">
      <div className="mx-auto  max-w-4/5   py-6  px-8 sm:px-6 sm:py-8 lg:max-w-4/5  ">

      <h2 className="text-4xl py-10 mb-3 flex justify-center font-bold capitalize text-orange-700">Image Card</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {dataItem && dataItem.map((item) => (
            <div key={item.id} className="  relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-7 xl:aspect-w-7 relative">
                <img
                  src={item.download_url}
                  // width={item.width}
                  // height={item.height}
                  className="h-full w-full  object-cover object-center group-hover:opacity-75 "
                />
              
                
                <Link to={item.url} target="_blank" className=' '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute top-2 right-2 text-gray-400 hover:text-orange-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </Link>
              </div>
              <div className="    flex justify-between">

              <h3 className="mt-4 text-md text-gray-700"><b>Credit to</b> {item.author}</h3>

              <div className="mt-3 text-lg font-medium flex gap-2 text-gray-900">


              
              
              
              <Link to={`/editcard/${item._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-500 hover:text-blue-300 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleDelete(item._id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-700 hover:text-red-400 cursor-pointer">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                



              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}