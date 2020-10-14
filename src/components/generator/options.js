import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'

export default function Options() {
  return (
    <React.Fragment>
      <Title>Generator Options</Title>
      <FormControl component="fieldset">
        <FormLabel component="legend">Stylesheets format</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={'male'}
          onChange={() => {}}
        >
          <FormControlLabel value="female" control={<Radio />} label="CSS" />
          <FormControlLabel value="male" control={<Radio />} label="SASS" />
          <FormControlLabel value="other" control={<Radio />} label="SCSS" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Pregenerate MarkDown</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={'female'}
          onChange={() => {}}
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="other" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  )
}
