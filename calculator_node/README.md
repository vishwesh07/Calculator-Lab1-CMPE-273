# Calculator-Lab1-CMPE-273

How to run calculator back end?
  - Navigate to calculator_node directory in cmd
  - Install required dependencies using - npm install
  - Run calculator back end using - npm start

How can I change port, if 3001 port is occupied?
  - Go to calculator_node/bin/www
  - Change '3001' to currently available port number in " var port = normalizePort(process.env.PORT || '3001'); " line
