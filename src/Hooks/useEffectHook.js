import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/posts

const UseEffectHook = () => {
  const [value, setValue] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [userInfoData, setUserInfoData] = useState([]);

  // mounting phase - render
  // updaing phase -update
  // unMounting phase -m exit from the useEffect

  //  __________________________________________________________
  useEffect(() => {
    setDisplayText(`Hey u have clicked the Increment button ${value} times`);
  }, [value]);

  const arrray = [1, 2, 3, 54, 5, 7];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUserInfoData(data));
    // promises
  }, []);
  //   _____________________________________________________________

  // id: 3;
  // title: "ea molestias quasi exercitationem repellat qui ipsa sit aut";
  // userId;

  const handleInc = () => {
    setValue(value + 1);
  };

  // width: 100vw;
  // display: flex;
  // flex-wrap: wrap;
  // margin: 10px;
  // padding: 10px;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {userInfoData.map((value, index) => (
        <Card sx={{ maxWidth: 250 }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="80"
              src="https://img.uxcel.com/tags/cards-1691390944299-2x.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                User Info
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                User Id: {value.userId}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Title: {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Id:{value.id}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      {displayText}
      <button onClick={handleInc}>Increment</button>
    </div>
  );
};

export default UseEffectHook;
