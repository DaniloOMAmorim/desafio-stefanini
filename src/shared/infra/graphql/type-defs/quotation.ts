import { gql } from 'apollo-server-express'

export default gql`
  type Quotation {
    id: String!
    purchaseQuotation: Float!
    salesQuotation: Float!
    currencyQuoteDate: Float!
    timestamp: Float!
  }

  type Query {
    quotation: Quotation
  }
  
`