const fs = require('fs');
const { DOMParser } = require('xmldom');

const xmlPath = "test.xml";

const xml = fs.readFileSync(xmlPath, 'utf8');
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');

// Accessing attributes
let homeworkElement = xmlDoc.getElementsByTagName("homework")[0];
let homeworkTitle = homeworkElement.getAttribute("title");

console.log("Homework title: " + homeworkTitle);