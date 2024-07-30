import React from 'react';
import { Container, Grid, TextField, Button, MenuItem, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import './RegistrationForm.css'

// Custom validation schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().test(
    'name-validation',
    'Enter your full name or your first and last names',
    function (value) {
      const { firstName, lastName } = this.parent;
      if (!value && (!firstName || !lastName)) {
        return false;
      }
      return true;
    }
  ),
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  mobileNumber: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Mobile Number is not valid'),
  dateOfBirth: Yup.date()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
  gender: Yup.string().required('Gender is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

const RegistrationForm = () => (
  <Container maxWidth="sm">
      <Formik
      initialValues={{
        fullName: '',
        streetAddress: '',
        city: '',
        state: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
            <div className='addbgcolor'>
            <Grid container spacing={2}>
            {[
              { name: 'fullName', label: 'Full Name' },
              { name: 'streetAddress', label: 'Street Address' },
              { name: 'city', label: 'City' },
              { name: 'state', label: 'State' },
              { name: 'mobileNumber', label: 'Mobile Number' },
              { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
            ].map((field) => (
              <Grid item xs={field.name === 'city' || field.name === 'state' ? 6 : 12} key={field.name}>
                <Field
                  className='formcontainer'
                  name={field.name}
                  as={TextField}
                  type={field.type || 'text'}
                  label={field.label}
                  fullWidth
                  InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                  error={touched[field.name] && Boolean(errors[field.name])}
                  helperText={touched[field.name] && errors[field.name]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {touched[field.name] && !errors[field.name] ? (
                          <CheckCircleIcon style={{ color: 'green' }} />
                        ) : (
                          <EditIcon style={{ color: touched[field.name] && errors[field.name] ? 'red' : 'black' }} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Field
               className='formcontainer'
                name="gender"
                as={TextField}
                label="Gender"
                select
                fullWidth
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.gender && !errors.gender ? (
                        <CheckCircleIcon style={{ color: 'green' }} />
                      ) : (
                        <EditIcon style={{ color: touched.gender && errors.gender ? 'red' : 'black' }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Field>
            </Grid>
          
          </Grid>
          </div>
          <Grid item xs={12}>
              <Field
              className="emailbox"
                name="email"
                as={TextField}
                type="email"
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.email && !errors.email ? (
                        <CheckCircleIcon style={{ color: 'green' }} />
                      ) : (
                        <EditIcon style={{ color: touched.email && errors.email ? 'red' : 'black' }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} className='customeButton'>
              <Button type="submit" variant="contained" color="primary" fullWidth>
              <EmailIcon style={{fontSize:'18px', marginRight:'10px'}} />  Continue with Email
              </Button>
            </Grid>
        </Form>
      )}
    </Formik>
  </Container>
);

export default RegistrationForm;
