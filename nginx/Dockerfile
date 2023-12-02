# use the lighweight Nignx image from the previus state to the nginx container
FROM node:16.10.0-alpine3.13 as production-stage

# Copy the build application from the previos state to the Nginx container
# her we can see the path of the build application and the path where we want to copy it
COPY ./app/dist /user/share/niginx/html

# Copy the nginx configuration file
# here should be the same name as the nginx configuration file in the project
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose the port 80
EXPOSE 80

# start nginx to server the application
CMD ["nginx", "-g", "daemon off;"]
