# NL-Design-System

This [NL-Design-system](https://designsystem.gebruikercentraal.nl/) repository is a customizable and straightforward component library to help make Progressive Web Applications faster, attractive, and more accessible with React.

The main benefits of working with a standardised, component library is being able to develop faster with pre-built components and compliance with the NL Design System as a whole.

## Installation

NL-Design-System is available as an NPM package.

``// with npm
\$ npm install @conductionnl/nl-design-system

// with yarn
\$ yarn add @conductionnl/nl-design-system
``

# Usage

Here's a quick example to get you started, _it's all you need_

```JS
import  *  as  React  from  "react";
// Import the InfoTooltip Component
Import { InfoTooltip } from "@conductionnl/nl-design-system"

// Render the component in your app
const App = () => {
	render (
		<>
			InfoTooltip  content={<>Pass any JSX.Element here</>} placement={"bottom"} />
		</>
	)
}

```

## Examples

Take a look at our [NL Design Skeleton App](https://conductionnl.github.io/nl-design-skeleton-gatsby/) and the [Skeleton App](https://github.com/ConductionNL/nl-design-skeleton-gatsby) repo. Additional components can be implemented like the code snippet above.

## Roadmap

A more advanced documentation is to be released in the near future. More examples and Tutorials are coming up!
