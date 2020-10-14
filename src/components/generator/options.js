import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Title from '../title'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'

export default function Options({ options, setOptions }) {
  const handleOptionsChange = (prop) => (event) => {
    setOptions({ ...options, [prop]: event.target.value })
  }

  return (
    <React.Fragment>
      <Title>Generator Options</Title>
      <FormControl component="fieldset">
        <FormLabel component="legend">Stylesheets format</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={options.stylesFormat}
          onChange={handleOptionsChange('stylesFormat')}
        >
          <FormControlLabel value="css" control={<Radio />} label="CSS" />
          <FormControlLabel value="sass" control={<Radio />} label="SASS" />
          <FormControlLabel value="scss" control={<Radio />} label="SCSS" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Pregenerate MarkDown</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={options.pregenerateMD}
          onChange={handleOptionsChange('pregenerateMD')}
        >
          <FormControlLabel value={'yes'} control={<Radio />} label="Yes" />
          <FormControlLabel value={'no'} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  )
}
