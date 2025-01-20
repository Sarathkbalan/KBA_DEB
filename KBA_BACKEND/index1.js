import { createServer } from 'http'; // Import 'createServer' from the 'http' module

const PORT = 8000;

// Create the server
const server = createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response to the client
    res.end('Hello, World! Server running without dependencies.\n');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
