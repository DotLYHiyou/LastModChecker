# LastModChecker

LastModChecker is a lightweight and practical tool designed to retrieve the `Last-Modified` timestamp of web pages for research purposes. It simplifies the process of understanding when a particular web page was last updated, providing precise details in the **Eastern Standard Time (EST)** timezone.

## Features

- **Retrieve Last-Modified Timestamps**: Enter a URL to get the last modification date of a webpage.
- **Proxy Support**: A proxy is used to bypass restrictions on certain websites.
- **Error Handling**: Informative responses for cases where:
  - The `Last-Modified` header is missing.
  - Errors occur during the request.
- **Timezone Conversion**: Converts timestamps from GMT to **EST** for easier comprehension.

## How It Works

1. Input a URL in the provided text field.
2. The application uses a proxy server to send a `HEAD` request to the URL.
3. The server fetches the `Last-Modified` header from the response.
4. The timestamp is converted to **EST** and displayed on the screen.

### Example Outputs
1. **Success**: Displays the last modification date in EST.
   - Example: `Last Modified (EST): Thursday, May 1, 2025, 7:00 PM`
2. **No Header Found**: "No Last-Modified header found."
3. **Error**: "Error fetching the URL."

## Visit the Live Website

[Visit the live website](#) to access LastModChecker directly in your browser.

## Usage

1. Open the live website.
2. Enter the URL of the web page you want to check.
3. Click the "Check" button.
4. The result will be displayed below the input field.

## Contributing
Contributions are welcome! However, each pull request will be checked for malicous code.

## Acknowledgments
- Proxy Service: Thanks to [CORS Anywhere]("https://github.com/Rob--W/cors-anywhere") for enabling cross-origin requests.
- Microsoft and GitHub Copilot: For programming most of the project.
