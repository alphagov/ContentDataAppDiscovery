const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/multi-select', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');

  res.render('multi-select', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation
  })
})

router.get('/multi-select-results', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');

  res.render('multi-select-results', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation
  })
})
