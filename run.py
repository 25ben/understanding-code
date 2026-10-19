import http.server  # Imports Python's built-in HTTP server module to serve our HTML, CSS, and JS files
import socketserver  # Imports the socket server framework to handle network connections on a local port
import webbrowser  # Imports the webbrowser module to automatically launch the prototype in the user's browser
import os  # Imports the operating system module to locate the folder where this script is saved
import sys  # Imports the system module so we can exit the program cleanly when stopped

# ==================== 1. SERVER CONFIGURATION ==================== # Section comment for server settings
DEFAULT_PORT = 8000  # Sets the starting port number (8000 is standard for local web development)
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))  # Finds the exact folder path containing run.py and index.html


# ==================== 2. LAUNCH LOCAL WEB SERVER ==================== # Section comment for starting the server
def start_server():  # Defines the main function that starts the Bean & Brew local web server
    os.chdir(PROJECT_DIR)  # Changes the working directory to the project folder so index.html is found automatically
    handler = http.server.SimpleHTTPRequestHandler  # Uses Python's standard handler to serve static files (HTML, CSS, JS)

    port = DEFAULT_PORT  # Starts by trying port 8000
    while port < DEFAULT_PORT + 20:  # Loops through up to 20 ports in case port 8000 is already in use
        try:  # Attempts to bind the server to the current port number
            with socketserver.TCPServer(("", port), handler) as httpd:  # Creates the TCP web server on the chosen port
                url = f"http://localhost:{port}/index.html"  # Builds the local web address for the Bean & Brew prototype
                print("=" * 65)  # Prints a decorative divider line in the terminal
                print("  BEAN & BREW PROTOTYPE - LOCAL WEB SERVER")  # Prints the application title
                print("=" * 65)  # Prints a decorative divider line in the terminal
                print(f"  Serving files from: {PROJECT_DIR}")  # Shows which folder is being hosted
                print(f"  Opening in browser: {url}")  # Shows the clickable localhost link
                print("  Press Ctrl+C in this terminal at any time to stop the server.")  # Instructions to stop the server
                print("=" * 65)  # Prints a closing divider line

                webbrowser.open(url)  # Automatically opens the Bean & Brew website in the default web browser
                httpd.serve_forever()  # Keeps the server running and listening for browser requests until stopped
                break  # Breaks out of the loop once the server finishes
        except OSError:  # Catches the error if the current port is already busy
            port += 1  # Increments the port number (e.g. 8001) and tries again
        except KeyboardInterrupt:  # Catches when the user presses Ctrl+C to stop the server
            print("\nShutting down Bean & Brew local server. Goodbye!")  # Prints a friendly exit message
            sys.exit(0)  # Exits the Python script cleanly with status code 0


if __name__ == "__main__":  # Checks that this script is being run directly (not imported by another file)
    start_server()  # Calls start_server() to launch the prototype

