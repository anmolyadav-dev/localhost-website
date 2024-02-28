import { createClient } from 'redis';
import {ITeam} from '../models/teamModel';

let client:ReturnType<typeof createClient>;
const config = {

    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: 19484
    }
};
(async()=> {
   client = await createClient(config)
.on('error', err => console.log('Redis Client Error', err))
.connect();
if(client) console.log('Client Connected');
})
();


export const  refreshData = async(data:any)=>{
    if(client.isReady){
    client.json.set("teams","$",data);

    }    
}

export const fetchData = async()=>{
    if(client.isReady){
        let data = await client.json.get("teams");
        return data as unknown as ITeam[];

    }
    else{
        return null;
    }
}