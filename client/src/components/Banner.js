import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";

const Banner = (props) => {
  console.log(props);
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{props.heading}</Typography>
        {props.content}
      </CardContent>
    </Card>
  );
};

export default Banner;
