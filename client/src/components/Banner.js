import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'

const Banner = (props) => {
  console.log(props)
  return (
    <Card>
      <CardHeader><Typography variant="h4">{props.heading}</Typography></CardHeader>
      <CardContent>{props.content}</CardContent>
    </Card>
  )
}

export default Banner
