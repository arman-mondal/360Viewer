export const data=[
    { id:1,
        name:'Lake',
        image:'/9.jpg'
    },
    {
        id:2,
        name:'Tunnel',
        image:'/tunnel.jpg'

    },
    {
        id:3,
        name:'Sunset',
        image:'/sunset.jpg',

    },
]
export interface Data{
    id:number;
    name:string;
    image:string;

}
export interface HostspotsInt{
    id:number;
    image:string;
    yaw:number;
    pitch:number;



}
export const hotspots:HostspotsInt[]=[
    {
        id:1,
        image:'/8.jpg',
        yaw:-136,
        pitch:27,
            
    },
    {
        id:2,
        image:'/9.jpg',
        yaw:31,
        pitch:150,
            

    }
]