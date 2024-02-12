import * as React from "react";

import {
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import { PostAdd } from "../redux/postSlice";
import { useDispatch } from "react-redux";

export default function FormPropsTextFields() {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  // dispatch to excute the function from redux-toolkit
  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   setUserId(event.target.value);
  // };

  const onSavePostClicked = (e) => {
    e.preventDefault();

    const data = {
      product: product,
      category: category,
      image: image,
      price: price,
      quantity: quantity,
      date: new Date().toISOString(),
    };

    console.log(data, "this is my data");
    dispatch(PostAdd(data));
    // PostAdd(data)--> action payload
  };

  const canSave =
    Boolean(product) &&
    Boolean(category) &&
    Boolean(image) &&
    Boolean(price) &&
    Boolean(quantity);
  return (
    <Box
      bgcolor={"primary"}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue=""
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Category"
          defaultValue=""
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="imageurl"
          defaultValue=""
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          defaultValue=""
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div>
        <FormControl sx={{ width: "300px" }}>

        </FormControl>
        <div>
          <Button
            disabled={!canSave}
            onClick={onSavePostClicked}
            sx={{ marginTop: "10px" }}
            variant="outlined"
          >
            Add Post
          </Button>
        </div>
      </div>
    </Box>
  );
}
