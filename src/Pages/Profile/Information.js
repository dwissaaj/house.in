import { Button,TextField,Grid } from "@mui/material";
import { useFormik } from 'formik';
import getCookie from "../../config/getCookie";
import { config } from "../../config/Constants";
const Information = () => {
  const cookies = getCookie('jwt')
  const url = config.url.STRAPI_URL
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return ( 
  <>
    <form onSubmit={formik.handleSubmit}>
       <Grid  container
                direction="column"
                alignItems="center"
                justifyContent="space-between">
       <TextField
        sx={{margin:'10px'}}
         id="name"
         name="name"
         type="text"
         label='Name'
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <TextField
          sx={{margin:'10px'}}
         id="address"
         name="address"
         type="text"
         label='Address'
         onChange={formik.handleChange}
         value={formik.values.address}
       />
       <TextField
        sx={{margin:'10px'}}
         id="phone"
         name="phone"
         type="tel"
         label='Phone'
         onChange={formik.handleChange}
         value={formik.values.phone}
       />
       <Button color='grey' variant='contained' type="submit">Edit</Button>
       </Grid>
       
     </form>
  </>
   );
}
 
export default Information;