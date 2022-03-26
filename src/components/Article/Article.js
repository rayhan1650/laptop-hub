import React from "react";

const Article = () => {
  return (
    <div className="container text-start my-4">
      <h1 className="text-center">Question and Answer</h1>
      <div className="my-5">
        <h2>Q: How react works?</h2>
        <h4>Answer:</h4>
        <p className="fs-4">
          React is a JavaScript library that creates user interfaces. We can use
          it to help build single page applications and mobile apps. React use
          "components" that are reusable UIs which allow us to split the app
          into separate blocks that act independently of each other. We can pass
          data through components via "props". "JSX" or JavaScript XML used to
          create the structure of a component where we can get a flavor of HTML.
          But under the hood all is pure JavaSCript. React use "BableJs" to
          convert JSX to Javascript. When any data change occurs, react use a
          method called "virtual dom" to detect the change. Then it compare
          virtual dom to real dom and make change. For storing changed data
          react use "state".
        </p>
      </div>
      <div>
        <h2>Q: What is the difference between props and state?</h2>
        <h4>Answer:</h4>
        <table className="table table-bordered border-dark fs-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Props</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Props is read-only.</td>
              <td>State is both read and write.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Props is immutable. It can not be modified.</td>
              <td>State is mutable. It can be modified.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                Props allow us to pass data from one component to other
                components as an argument.
              </td>
              <td>State holds information about the components.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Stateless component can have Props.</td>
              <td>Stateless components cannot have State.</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                Props are external and controlled by whatever renders the
                component.
              </td>
              <td>
                The State is internal and controlled by the React Component
                itself.
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Props are used to communicate between components.</td>
              <td>
                States can be used for rendering dynamic changes with the
                component.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Article;
