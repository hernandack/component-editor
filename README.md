# Component Editor - Select Dropdown

This is a technical test from Makyo.

A modular Select Dropdown module with reusable components and completed with React, Vite, Typescript, Storybook and Jotai. This projects showcase the code splitting, code management, types and interfaces, separation of reusable components (inside components folder) with the actual module / feature (inside modules folder). 

## Setup and Install

- Clone this git repo
- `git clone https://github.com/hernandack/component-editor`
- After cloned successfully, open the component-editor folder
- Run the React frontend locally (default port 5173)
  - ```npm run dev```
- Run the Storybook locally (it should run on port 6006
  - ```npm run storybook```
- Open ```http://localhost:5173/``` (if using default port, or just check the terminal message from Vite)
- Open the storybook ```http://localhost:6006/?path=/story/modules-select-dropdown```

## React Frontend

It consists of the component showscase with state editor sidebar on the left. It's interactive. Currently I excluded all the styling options for dropdown, option item and select input due to timing limitation (still buggy).
You can play around and use it on other React app simple using the module.

## Storybook

It shows all the story that I made for the module, it consists of:
- default
  - This is the default value with no styling "Control", but it works as intended per requirement and support the switch-features toggles (on/off) via storyboard panel
- styles
  - This is the story that has styling option added (although it's not yet added to the frontend, it's working on storybook). Scroll down to the Control panel from storybook to see the data of styles that can be edited and reflecting automatically to the component
- fulltesting
  - This is the testing using storybook-testing with Full passed condition
 
## Demo links

- To access the React Frontend, please open (https://makyo-test.hernandack.com)
- To access the Storybook live please open (https://makyo-test.hernandack.com/storybook/)

