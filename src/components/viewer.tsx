import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import {data,Data, HostspotsInt, hotspots} from '../data'
import { speak } from '../functions/tts';
const PanoramaViewer = () => {
    const id=window.location.pathname.replace("/image/", "");
    const myObj:Data[]=data.filter(item=>item.id===Number(id));

  const [currentImage, setCurrentImage] = useState(myObj[0].image);
console.log(currentImage)
  const handleHotspotClick = (image) => {
    // Update the image URL based on the clicked hotspot
    speak('Changing the image')
setCurrentImage(image)
  };




  return (
    <div className='w-full h-screen'>
        <div className='lg:w-[10%] xl:w-[10%] md:w-[10%]   absolute z-50  flex md:flex-col lg:flex-col xl:flex-col gap-5 h-max xl:top-[20%] bottom-10 overflow-hidden lg:top-[20%] lg:right-10 md:right-10 xl:right-10 '>
           {data.map((item:Data)=>{
            return (
               
                <img  onClick={()=>{
                    window.location.href="/image/"+item.id
                }} key={item.id} src={item.image} className=' w-full h-[100px]  rounded-xl object-cover  hover:rounded-xl cursor-pointer  hover:scale-90  transition-all'/>
            )
           })}
            </div> 
              <Pannellum
        width="100%"
        height="100%"
        image={currentImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showControls
        title={myObj[0].name}
        orientationOnByDefault
        autoRotate={1}
        compass
      >
   
      {
        hotspots.map((item:HostspotsInt)=>{
            return(
                <Pannellum.Hotspot
                type="custom"
                pitch={item.pitch}
                text="Info Hotspot Text 4"
                yaw={item.yaw}
                handleClick={(evt, name) => handleHotspotClick(item.image)}
                name={item.id}
              />
            )
        })
      }
      </Pannellum>
    </div>
  );
};

export default PanoramaViewer;
