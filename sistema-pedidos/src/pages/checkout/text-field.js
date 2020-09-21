import React from 'react'
import t from 'prop-types'
import { Grid, TextField as MaterialTextField } from '@material-ui/core'

TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
}

function TextField (xs, autoFocus, ...props) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        FullWidth {...props} />
    </Grid>
  )
}

export default TextField
