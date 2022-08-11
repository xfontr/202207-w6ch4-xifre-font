import "./localEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";

const debug = Debug("my-docs:index");

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(chalk.bgBlue(`Server on at port ${port}`));
});

app.use((req, res, next) => {
  debug(chalk.yellow(`Request received at ${req.url}`));
  next();
});

app.use((req, res, next) => {
  debug(chalk.magenta(`With a method ${req.method}`));
  next();
});

app.use((req, res) => {
  Debug(chalk.green("This is the response"));
  res.send("Response");
});
