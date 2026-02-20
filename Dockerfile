# Use nginx as the web server
FROM nginx:alpine

# Copy our HTML file to the nginx folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80