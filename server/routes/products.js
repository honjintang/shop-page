const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

const request = ({ url, options = {} }) => {
  
    const opts = {
      ...options,
      headers: {
        ...options.headers,
        Accept: 'application/json'
      },
    }
  
    return fetch(url, opts).then(res => res.json())
  }

router.get('/', async (req, res, next) => {
  const url = 'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products'

  try {
    const data = await request({ url })
    res.send(data)
  } catch(err) {
    next(err)
  }
})




module.exports = router