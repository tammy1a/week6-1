import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Alert } from '@mui/material';
import * as Yup from 'yup';

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: '',
    dob: '',
    address: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address')
      .max(100, 'Email must be at most 100 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be at most 100 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^.&*_=+-]).*$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        'Invalid phone number'
      ),
    age: Yup.number()
      .required('Age is required')
      .min(18, 'Age must be at least 18')
      .max(80, 'Age must be at most 80'),
    dob: Yup.date()
      .required('Date of birth is required')
      .max(new Date(), 'Date of birth must be in the past'),
    address: Yup.string()
      .required('Address is required')
      .min(10, 'Address must be at least 10 characters')
      .max(200, 'Address must be at most 200 characters'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div style={{width:400}}>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            type="text"
            as={TextField}
            label="Name"
            fullWidth
            margin="normal"
            />
          <ErrorMessage name="name" component={Alert} severity="error"/>
          <Field
            name="email"
            type="email"
            as={TextField}
            label="Email"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="email" component={Alert} severity="error" />
          <Field
            name="password"
            type="password"
            as={TextField}
            label="Password"
            fullWidth
            margin="normal"
            />
          <ErrorMessage name="password" component={Alert} severity="error" />
          <Field
            name="phoneNumber"
            type="tel"
            as={TextField}
            label="Phone Number"
            fullWidth
            margin="normal"
            />
          <ErrorMessage name="phoneNumber" component={Alert} severity="error" />
          <Field
            name="age"
            type="number"
            as={TextField}
            label="Age"
            fullWidth
            margin="normal"
            />
          <ErrorMessage name="age" component={Alert} severity="error" />
          <Field
            name="dob"
            type="date"
            as={TextField}
            label="Date of Birth"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            />
          <ErrorMessage name="dob" component={Alert} severity="error" />
          <Field
            name="address"
            type="text"
            as={TextField}
            label="Address"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            />
          <ErrorMessage name="address" component={Alert} severity="error" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
      </div>
  );
};

export default MyForm;