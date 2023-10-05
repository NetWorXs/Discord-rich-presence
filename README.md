# Custom Discord Rich Presence
Set your discord presence status

## Discord Rich Presence with Node.js

This Node.js script allows you to set up Discord Rich Presence to display custom details and buttons on your Discord profile when running a specific application or game. Make sure to follow these steps to set up and use this script:

## Prerequisites

Before running this script, you need to have the following installed:

   • [Node.js](https://nodejs.org/en): Make sure you have Node.js installed on your computer. You can download it from the official website.

## Setup

Clone this repository or create a new Node.js project.

Install the required dependencies by running the following command:

    npm install discord-rpc

Replace `'Client-Id'` in the `clientId` variable with your Discord application's Client ID. If you don't have one, you can create a new application on the [Discord Developer Portal](https://discord.com/developers/applications).

Customize the Rich Presence information by modifying the `activity` object. You can change the details, large image, large image text, and add buttons with labels and URLs.
 
    activity: {
    details: "'Details'",
    assets: {
        large_image: "'Image name'",
        large_text: "'Image text'"
    },
    buttons: [
        {
            label: "'Name'",
            url: "'URL'"
        },
        {
            label: "'Name'",
            url: "'URL'"
        }
    ]
  }

## Usage

Run the script using the following command:


    node your-script-name.js

Replace `your-script-name.js` with the name of your JavaScript file containing the provided code.

You will see the message `[RPC] Hooked!` in your terminal, indicating that the Rich Presence has been successfully set up.

Discord should now display your custom Rich Presence status on your profile.

## Troubleshooting

If you encounter any issues or the Rich Presence doesn't work as expected, make sure to:

Ensure that `Node.js` is installed on your computer.

Double-check that you have replaced `'Client-Id'` with your actual Discord application's Client ID.

Make sure you have enabled "Rich Presence" in your Discord settings. 

You can find this setting under `User Settings` > `Game Activity` > `Display currently running game as a status message`.

Enjoy!
