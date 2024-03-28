#!/bin/node
const fs = require("fs");
const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

require("dotenv").config();

const PORT = 5000;
const { BACKEND_URL } = process.env;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(middlewares[1]);
server.use(
  "../../storage/images",
  express.static(path.join(__dirname, "../../storage/images"))
);
server.use(express.json({ limit: "25kb" }));
server.use(express.static(path.join(__dirname, "../frontend", "out")));

if (process.env.NODE_ENV !== "production")
  server.use(express.static(path.join(__dirname, "../frontend", "out")));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

