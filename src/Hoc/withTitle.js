import React from 'react'

const withTitle = (Component,title="Umair") => {
    document.title=title +"Umair"
  return (
    <Component {...props} />
  )
}

export default withTitle