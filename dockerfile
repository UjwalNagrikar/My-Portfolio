FROM node:latest 
COPY index.html .
RUN npm install -g http-server
EXPOSE 8080
CMD [ "http-server" , "-p", "8081" ]