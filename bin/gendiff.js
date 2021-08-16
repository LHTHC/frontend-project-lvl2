#!/usr/bin/env node

import { Command } from 'commander';
import calculateDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', 'V, --vers', 'output the current version')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((file1, file2) => {
    console.log(calculateDiff(file1, file2));
  });
program.parse(process.argv);
