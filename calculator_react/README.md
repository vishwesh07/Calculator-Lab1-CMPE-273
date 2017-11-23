# Calculator-Lab1-CMPE-273

How to run calculator front end?
  - Navigate to calculator_react directory in cmd
  - Install required dependencies using - npm install
  - Run calculator front end using - npm start

How can I change port, if port '3000' is already occupied?
  - Go to node_modules/react-scripts/scripts/start.js
  - Change 3000 to currently available port in " const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000; " line
