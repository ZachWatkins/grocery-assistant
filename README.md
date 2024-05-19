# Grocery Shopper

This is my (Zachary Watkins) application for automating grocery shopping to an extent. For now, I am building it as a command line tool. The app will use APIs, Google Chrome, Puppeteer, and prompts to take a list of groceries and add them to a shopping cart automatically. The user will be able to edit the shopping cart items before checking out.

Eventually I will either move this to a Google Chrome extension or schedule it to execute daily somehow. It would be too inconvenient for my family and too time consuming to fully secure if deployed to the cloud.

## Issues with Google Keep API Integration

I attempted to follow this tutorial for the Google Keep API integration: https://developers.google.com/keep/api/guides/java.

It will be a lengthy process so for now I'm skipping it. For reference, this is the process:

1. Create a Google Cloud Identity Free subscription.
2. Create a Google Cloud project under the organization created in step 1.
3. Create a service account for the project.
4. Download the service account key as a JSON file.
5. Grant the service account domain-wide delegation using the admin console.
6. Enable the Google Keep API for the project.
