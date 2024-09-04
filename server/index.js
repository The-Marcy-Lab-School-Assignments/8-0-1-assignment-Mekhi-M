/** @format */

const express = require("express");
const app = express();

const path = require("path");
const pathToDistFolder = path.join(__dirname, "../language-app-frontend/dist");

const logRoutes = (req, res, next) => {
	const time = new Date().toLocaleString();
	console.log(`${req.method}: ${req.originalUrl} - ${time}`);
	next();
};

const serveStatic = express.static(pathToDistFolder);

app.use(logRoutes);
app.use(serveStatic);

const port = 8080;
app.listen(port, () => {
	console.log(`Server is now running on http://localhost:${port}`);
});
