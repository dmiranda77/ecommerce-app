import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    TextField,
  } from "@mui/material";
  import Joi from "joi";
  import React, { useState } from "react";
  
  const ProductsForm = ({ onSubmit, initialValue }) => {
    const [form, setForm] = useState(
      initialValue || {
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
      }
    );
  
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(form);
      onSubmit(form);
    };
  
    const schema = Joi.object({
      title: Joi.string().min(20).max(100).required(),
      price: Joi.number().min(1).max(15).required(),
      description: Joi.string().min(50).max(300).required(),
      category: Joi.string().min(3).max(500).allow("").optional(),
      image: Joi.string().min(6).max(15).allow("").optional(),
    });
  
    const isFormInvalid = () => {
      const result = schema.validate(form);
  
      return !!result.error;
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the error when the field is changed
        }));
      };
      
  
    return (
      <Grid
        container
        component="form"
        justifyContent="center"
        onSubmit={handleSubmit}>
        <Grid item xs={6}>
          <Card>
            <CardHeader title={`Add a Product`} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="title"
                    error={!!errors.title}
                    helperText={errors.title}
                    onChange={handleChange}
                    value={form.title}
                    label="Product Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
 
                <Grid item xs={12}>
                  <TextField
                    name="price"
                    error={!!errors.price}
                    helperText={errors.price}
                    onChange={handleChange}
                    value={form.price}
                    label="Price per unit"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="description"
                    error={!!errors.description}
                    helperText={errors.description}
                    onChange={handleChange}
                    value={form.description}
                    label="Description"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="category"
                    error={!!errors.category}
                    helperText={errors.category}
                    onChange={handleChange}
                    value={form.category}
                    label="Category"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="image"
                    error={!!errors.image}
                    helperText={errors.image}
                    onChange={handleChange}
                    value={form.image}
                    label="Image Link/Url"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button type="submit" >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  };
  
  export default ProductsForm;
  