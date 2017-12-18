require("babel-register")();

var jsdom = require("jsdom");
const {JSDOM} = jsdom;

const exposedProperties = ["window", "navigator", "document"];

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

const {document} = new JSDOM("").window;
global.document = document;
global.window = document.defaultView;
Object
  .keys(document.defaultView)
  .forEach(property => {
    if (typeof global[property] === "undefined") {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

global.navigator = {
  userAgent: "node.js"
};

const documenRef = document;
