#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }

  fuelDicrees() {
    this.fuel -= 25;
  }

  fuelincrees() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }

  fuelDicrees() {
    let fuel = (this.fuel -= 25);
  }
}

let player = await inquirer.prompt({
  name: "name",
  type: "input",
  message: chalk.blueBright.bold.italic(
    "Enter player name and continue game...!"
  ),
});
let opponent = await inquirer.prompt({
  name: "selecte",
  type: "list",
  message: chalk.blueBright.bold.italic(
    "Selecte opponent and continue game...!"
  ),
  choices: ["assasin", "skeleton", "zombie"],
});

let P1 = new Player(player.name);
let O1 = new Opponent(opponent.selecte);

console.log(
  chalk.greenBright.bold.italic(P1.name) +
    chalk.yellowBright.bold.italic("----------------- Vs ----------------") +
    chalk.redBright.bold.italic(O1.name)
);

do {
  // assasin vs player
  if (opponent.selecte === "assasin") {
    let ask = await inquirer.prompt({
      name: "choice",
      type: "list",
      message: chalk.yellowBright.bold.italic("please selecte one option...!"),
      choices: ["Attack", "Drink Portion", "Run For Life"],
    });

    if (ask.choice === "Attack") {
      let random = Math.floor(Math.random() * 2);
      if (random > 0) {
        P1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
      }
      if (P1.fuel <= 0) {
        console.log(
          chalk.redBright.bold.italic(
            "You loos better luck next time ! please try again...."
          )
        );
        process.exit();
      }

      if (random <= 0) {
        O1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(chalk.blueBright.bold.italic("you win...."));
        process.exit();
      }
    }

    if (ask.choice === "Drink Portion") {
      P1.fuelincrees();
      console.log(
        chalk.blueBright.bold.italic(
          `you drink health portion your fuel is ${P1.fuel}`
        )
      );
    }

    if (ask.choice === "Run For Life") {
      console.log(
        chalk.redBright.bold(
          "you loos beter luck next time !  so please try again "
        )
      );
      process.exit();
    }
  }

  // skeleton vs player
  if (opponent.selecte === "skeleton") {
    let ask = await inquirer.prompt({
      name: "choice",
      type: "list",
      message: chalk.yellowBright.bold.italic("please selecte one option...!"),
      choices: ["Attack", "Drink Portion", "Run For Life"],
    });

    if (ask.choice === "Attack") {
      let random = Math.floor(Math.random() * 2);
      if (random > 0) {
        P1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
      }
      if (P1.fuel <= 0) {
        console.log(
          chalk.redBright.bold.italic(
            "You loos better luck next time ! please try again...."
          )
        );
        process.exit();
      }

      if (random <= 0) {
        O1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(chalk.blueBright.bold.italic("you win...."));
        process.exit();
      }
    }

    if (ask.choice === "Drink Portion") {
      P1.fuelincrees();
      console.log(
        chalk.blueBright.bold.italic(
          `you drink health portion your fuel is ${P1.fuel}`
        )
      );
    }

    if (ask.choice === "Run For Life") {
      console.log(
        chalk.redBright.bold(
          "you loos beter luck next time !  so please try again "
        )
      );
      process.exit();
    }
  }

  // zombie vs player
  if (opponent.selecte === "zombie") {
    let ask = await inquirer.prompt({
      name: "choice",
      type: "list",
      message: chalk.yellowBright.bold.italic("please selecte one option...!"),
      choices: ["Attack", "Drink Portion", "Run For Life"],
    });

    if (ask.choice === "Attack") {
      let random = Math.floor(Math.random() * 2);
      if (random > 0) {
        P1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
      }
      if (P1.fuel <= 0) {
        console.log(
          chalk.redBright.bold.italic(
            "You loos better luck next time ! please try again...."
          )
        );
        process.exit();
      }

      if (random <= 0) {
        O1.fuelDicrees();
        console.log(
          chalk.redBright.bold.italic(`${O1.name} fuel is ${O1.fuel}`)
        );
        console.log(
          chalk.greenBright.bold.italic(`${P1.name} fuel is ${P1.fuel}`)
        );
        console.log(chalk.blueBright.bold.italic("you win...."));
        process.exit();
      }
    }

    if (ask.choice === "Drink Portion") {
      P1.fuelincrees();
      console.log(
        chalk.blueBright.bold.italic(
          `you drink health portion your fuel is ${P1.fuel}`
        )
      );
    }

    if (ask.choice === "Run For Life") {
      console.log(
        chalk.redBright.bold(
          "you loos beter luck next time !  so please try again "
        )
      );
      process.exit();
    }
  }
} while (true);
