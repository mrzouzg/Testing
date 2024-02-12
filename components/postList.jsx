import * as React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TimeAgo from "./timeNow";

export default function PostList({ posts }) {
  return (
    <Grid container spacing={3}>
      {posts.map((data) => (
        <Grid item lg={3} sm={6} xs={12} >
          <Card
            sx={{
              width: "350px",
              mx:"20px"  ,
              my:"10px"  ,

              ":hover": {
                boxShadow: 20,
                cursor: "pointer",
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.product}
              </Typography>
              <Typography variant="h5" component="div">
                {data.category}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.quantity}
              </Typography>
              <Typography variant="body2">
               $ {data.price}
                <br />
              </Typography>
              <Typography variant="body2">
               <img src={data.image} />
                <br />
              </Typography>
              <Typography>
                <TimeAgo timestamp={data.date} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
