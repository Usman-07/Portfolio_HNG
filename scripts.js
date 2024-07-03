// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const slackNameElement = document.querySelector("[data-testid='slackDisplayName']");
    const slackEmailElement = document.querySelector("[data-testid='slackEmail']");
    const slackProfilePictureElement = document.querySelector("[data-testid='slackProfilePicture']");
    const currentTimeUTCElement = document.querySelector("[data-testid='currentTimeUTC']");
    const currentDayElement = document.querySelector("[data-testid='currentDay']");

    // Update Slack name and email with actual data
    slackNameElement.textContent = "Stack_Dev";
    slackEmailElement.textContent = "lekanusmancodes@gmail.com";
    slackProfilePictureElement.src = "./profile.jpg";

    // Function to update current time in UTC+1 and current day
    function updateTime() {
        const now = new Date();
        const nowUTCPlusOne = new Date(now.getTime() + 60 * 60 * 1000); // Add 1 hour (3600 seconds * 1000 milliseconds)
        currentTimeUTCElement.textContent = nowUTCPlusOne.toUTCString().split(' ')[4];
        currentDayElement.textContent = nowUTCPlusOne.toLocaleDateString('en-US', { weekday: 'long' });
    }

    // Initial call to updateTime
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
});
