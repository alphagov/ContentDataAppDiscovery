const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

//All of these routes are being used as a way to load in data from the data folder.

router.get('/multi-select', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');
  const table = require('./data/table.json');
  res.render('multi-select', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation,
    table: table
  })
})

router.get('/multi-select-results', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');
  const table = require('./data/table.json');

  res.render('multi-select-results', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation,
    table: table
  })
})

router.get('/alternative-view', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');
  const table = require('./data/table.json');
  res.render('alternative-view', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation,
    table: table
  })
})

router.get('/date-range-option-one', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');
  const table = require('./data/table.json');
  res.render('date-range-option-one', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation,
        table: table
  })
})

router.get('/date-range-option-two', function (req, res) {
  // Render the confirm company page
  const documentType = require('./data/document-type.json');
  const organisation = require('./data/organisation.json');
  const table = require('./data/table.json');
  res.render('date-range-option-two', {
    // To use the company data on that page use the following
    documentType: documentType,
    organisation: organisation,
        table: table
  })
})
