import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Firehouse Pizza Shop',
  keywords: 'we sell best pizzas, burger online',
  description: 'we sell best best pizzas, burger online',
}
export default Meta
