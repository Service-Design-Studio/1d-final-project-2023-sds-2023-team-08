# Use the official Python image as the base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the code files into the container
COPY main.py /app
COPY profanity_checker.py /app
COPY config.json /app
COPY requirements.txt /app

# Install the required dependencies listed in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port on which the Flask app will run
EXPOSE 8080

# Run the Flask app
CMD ["python", "main.py"]
