import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import shoes from './shoes'
import banner from './banner'
import accessories from './accessories'
import shippingPageContent from './shippingPageContent'
import faq from './faq'
import privacy from './privacy'
import clothes from './clothes'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, shoes, banner, accessories, shippingPageContent, faq, privacy, clothes,
  ]),
})
