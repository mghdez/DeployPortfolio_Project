FROM nginx:alpine

# Install git
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/mghdez/DeployPortfolio_Project.git .

# Set working directory
WORKDIR /DeployPortfolio_Project

# Copy all files to nginx's default public folder
COPY ./Personal_Portfolio/ /usr/share/nginx/html

EXPOSE 80