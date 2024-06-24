## Features

The is a cell growth simulation project. The main features are when you click on a cell you have the ability to add a bacteria icon to each cell. If you click on the same cell again the bacteira icon will be removed. Once you have placed the inital bacteria you can click on the start button and this will start the simulation based on the timing provided in the input box(default is 1 second). While the simulation is running you have the ability to pause or restart it. You have the ability to update the interval time between cell growth in the input box but only while the simulation is not running. 

## How to set up

To run the project check into the cell-growth-simulation folder then run "npm install" and then "npm run start"

## Key components

In the application I have a board component. This is used to create the grid. I also have a Cell component which is used to create the specific cells in the grid and I used memoization to ensure that cells aren't constantly regenerated when the state is changed. I have a compnent for the input box which is used to set the interval time between bacterial growth. 

## Assumtions

I did not make any other assumptions besides what was required and completed the asked functionality in the docmuent. 

## Performance

The first image shows the metrics for the page to initally to load

![image](https://github.com/ahmadmujeeb33/Cell-Growth-Simulation/assets/60004924/39bb2796-7265-4bc4-afc8-9ddb4379172b)

The second image shows the metrics to add a bacteria icon to a cell

![image](https://github.com/ahmadmujeeb33/Cell-Growth-Simulation/assets/60004924/9e2fe842-a24b-413f-9b61-98454ea47197)

The third image shows the metrics for running the simulation on a 20 x 20 grid with 1 second intervals

![image](https://github.com/ahmadmujeeb33/Cell-Growth-Simulation/assets/60004924/4656b79d-6d39-4082-bbfe-2b8b923afc3a)

## Deployment

https://ahmadmujeeb33.github.io/Cell-Growth-Simulation/


