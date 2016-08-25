# React fundamentals
Exercises of react fundamentals.

## Getting started

```bash
$ git clone https://github.com/JoanClaret/react-fundamentals.git
$ cd react-fundamentals
$ npm install
$ npm start
$ open http://localhost:3333/
```

## Examples:

#### 01 - Setup
**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/01-Setup.js

#### 02 - Building a simple component
**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/02-Component.js


#### 03 - Component properties
**Description:**<br />
Setting properties in your React components.

**Documentation:**<br />
https://egghead.io/courses/react-introduction-to-properties

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/03-Properties.js


#### 04 - Child properties
**Description:**<br />
When you're building your React components, you'll probably want to access child properties of the markup.

**Documentation:**<br />
https://egghead.io/courses/react-accessing-child-properties

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/04-Child-properties.js


#### 05 - Component state
**Description:**<br />

State is used for properties on a component that will change, versus static properties that are passed in. This lesson will introduce you to taking input within your React components.

**Documentation:**<br />
https://egghead.io/courses/react-state-basics

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/05-State.js

#### 06 - Owner ownee relationship
**Description:**<br />
The owner-ownee relationship is used to designate a parent-child relationship with React components as it differs from the DOM relationship.

**Documentation:**<br />
https://egghead.io/courses/react-owner-ownee-relationship

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/06-Owner-ownee.js

#### 07 - Toggle Class
**Description:**<br />
Using State to toggle class in a component

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/07-Toggle--class.js

#### 08 - Toggle Class between components
**Description:**<br />
Toggle class between componets

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/08-Toggle-between-components.js

#### 09 - Using refs
**Description:**<br />
When you are using React components you need to be able to access specific references to individual components. This is done by defining a ref.

**Documentation:**<br />
https://egghead.io/courses/react-using-refs-to-access-components

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/09-Using-refs.js

#### 10 - Sending values between components
**Description:**<br />
Sending a value from component to component without using refs

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/10-Sending-values-between-components.js

#### 11 - Mounting - unmounting
**Description:**<br />
React components have a lifecycle, and you are able to access specific phases of that lifecycle. This lesson will introduce mounting and unmounting of your React components.

**Documentation:**<br />
https://egghead.io/courses/react-component-lifecycle-mounting-basics

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/11-Mounting-unmounting.js

#### 12 - Higer order components
**Description:**<br />
Higher order components will allow you to apply behaviors to multiple React components.

**Documentation:**<br />
https://egghead.io/courses/react-react-fundamentals-higher-order-components-replaces-mixins

Exercise code:
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/12-Higher-order-components.js

#### 13 - Filter list
**Description:**<br />
In React, application data flows unidirectionally via the state and props objects, as opposed to the two-way binding of libraries like Angular. This means that, in a multi component heirachy, a common parent component should manage the state and pass it down the chain via props.
Your state should be updated using the setState method to ensure that a UI refresh will occur, if necessary. The resulting values should be passed down to child components using attributes that are accessible in said children via this.props. See this example that shows this concept in practice

**Documentation:**<br />
https://scotch.io/tutorials/learning-react-getting-started-and-concepts#unidirectional-data-flow

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/13-Filter-list.js

#### 14 - Routing
**Description:**<br />
React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

**Dev dependencies:**<br />
Install "react-router" npm package as dependency: `npm i react-router --save`

**Documentation:**<br />
https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669

**Code:**<br />
https://github.com/JoanClaret/react-fundamentals/blob/master/examples/14-Routing.js



## Switching between exercises
Once you has executed the "Getting started" commands, edit [main.js](https://github.com/JoanClaret/react-fundamentals/blob/master/main.js) file and uncomment the import line of the exercise you want to preview in the browser:

```javascript
// import App from './exercises/01-Setup';
import App from './exercises/02-Component';
```
## License
MIT
