import React, { useState } from "react"
import { makeStyles, Typography, Card, TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core"
import { Link } from "gatsby";
import { useSnackbar } from "notistack"



const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    // height: 250,
    textAlign: 'center',
    margin: '0 auto',
    padding: '1rem',
    borderRadius: '10px',
  },
  cardContent: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    // display: 'flex',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  termsAndConditionsText: {
    // display: 'flex',
    textAlign: 'center',
    fontSize: '0.8rem'
  },
  media: {
    margin: 0,
    objectFit: "contain"
  },
  link: {
    color: '#222222'
  },
  loading: {
    height: '5rem',
    width: '100%',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto'
  },
  input: {},
  textField: {
    width: '100%'
  },
  button: {
    width: '100%',
    marginBottom: '2rem',
    backgroundColor: '#747474'
  },
}));


export function EmailSubmission() {
  // Email state
  const [email, setEmail] = useState('');
  const { enqueueSnackbar } = useSnackbar();


  function handleSubmit(event) {
    event.preventDefault();
    console.log( 'Email:', email); 
   // Post a toast saying submitted
    enqueueSnackbar("See you soon", {
      variant: 'success',
      autoHideDuration: 3000,
    });
    setEmail("")
}

  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography gutterBottom variant={'subtitle1'} className={classes.cardText}>
        Sign up to be a part of the beta
      </Typography>
      <FormControlLabel className={classes.termsAndConditionsText} disabled control={<Checkbox checked name="checkedE" />} label={<Typography>I consent to Obol Networks <Link to="/tos" className={classes.link}>terms of service</Link></Typography>} />
        <TextField
          id="email"
          label="Email Address"
          className={classes.textField}
          InputProps={{
            className: classes.input
          }}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email}
          onInput={ (e: { target: { value: React.SetStateAction<string>; }; })=>setEmail(e.target.value)}
        />
        
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
      >
          Submit
      </Button>
      </form>
    </Card>
  )
}
