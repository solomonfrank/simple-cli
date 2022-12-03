#!/usr/bin/env node

import { Command } from "commander";
import { startServer } from "./server";

const program = new Command()
  .command("serve [filename]")
  .description("Simple serve application")
  .option("-p, --port <number>", "Port to run ther server on", "3000")
  .action((filename, options) => {
    console.log("App running on port ", options.port);
    console.log(" current filename ", filename);
    startServer(options.port);
  });

program.parse(process.argv);
