# NL-Design-System

The NL Design Skeleton application is designed for rapid application testing and prototype development on the NL Design System. It provides a basic skeleton application with full NL Design system functionality that any developer can easily extend, view locally and deploy to an online environment for demonstration purposes. The main benefits are:

- Development and (online) demonstration of prototypes without the need of a server.

- An out-of-the-box basic application that doesn't require configuration or setup and can be extended immediately.

This NL-Design-system repository is a customizable and straightforward component library to help make Progressive Web Applications faster, attractive, and more accessible with React.

## Installation

NL-Design-System is available as an NPM package.

``// with npm
npm install @conductionnl/nl-design-system

// with yarn
yarn @conductionnl/nl-design-system
``

# Usage

Here's a quick example to get you started, _it's all you need_

```JS
import  *  as  React  from  "react";
import Alert from "@conductionnl/nl-design-system";

export  function  Alert(props) {

return (

	<>

		<div style={{ position:  "fixed", left:  "50%", top:  "90px", transform:  "translateX(-50%)" }} id={props.id ? props.id + "Alert" : "Alert"} className={`alert alert-${props.alertClass} utrecht-alert utrecht-alert-${props.alertClass}`}
role="alert">

			{props.body()}

			</div>

		</>

	);

}
```

## Examples

Take a look at our [NL Design Skeleton App](https://conductionnl.github.io/nl-design-skeleton-gatsby/) and the [Skeleton App](https://github.com/ConductionNL/nl-design-skeleton-gatsby) repo. Additional components can be implemented like the code snippet above.

## Roadmap

A more advanced documentation is to be released in the near future. More examples and Tutorials are coming up!
