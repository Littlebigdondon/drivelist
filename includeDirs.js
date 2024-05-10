return process.platform === `darwin` ? require(`node-addon-api`).include.replaceAll(` `, `\\\ `) : require(`node-addon-api`).include
