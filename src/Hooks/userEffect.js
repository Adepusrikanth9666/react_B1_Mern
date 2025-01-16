import {Card,CardActions,CardMedia,CardContent,Typography,Button} from "@mui/material";
import React, { useEffect, useState } from 'react';

const DataEffect =()=>{
    const[infoData,setInfoData]=useState([]);



    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setInfoData(data));
    },[]);

    return(
        <div style={{display:"flex",gap:10,justifyContent:"space-evenly",flexWrap:"wrap",padding:"40px"}}>
            {infoData.map(value=>(
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                
                  src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?ga=GA1.1.1491670711.1735317060&semt=ais_hybrid"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     USER  DATA
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      id:{value.id}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    name:{value.name}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    username:{value.username}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    email:{value.email}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                     address:{value.address.street},{value.address.city},{value.address.suite},{value.address.zipcode},
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                   Geo:lat{value.address.geo.lat},lng{value.address.geo.lng}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    phone:{value.phone}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    website:{value.website}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    company:name{value.company.name} ,catchphrase{value.company.catchphrase},bs{value.company.bs}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
        </div>
    )
}


export default DataEffect;