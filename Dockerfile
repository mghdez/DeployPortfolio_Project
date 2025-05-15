FROM nginx:alpine

# Copy all files to nginx's default public folder
COPY ./Personal_Portfolio/ /usr/share/nginx/html

EXPOSE 80