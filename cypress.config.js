const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', {
                readFileMaybe(filename) {
                    if (fs.existsSync(filename)) {
                        return fs.readFileSync(filename, 'utf8')
                    }

                    return null
                },
            })
        },
        reporter: 'mochawesome',
        reporterOptions: {
            charts: true,
            json: true,
        },
        testIsolation: false,
        defaultCommandTimeout: 15000,
        chromeWebSecurity: false,
        env: {
            baseUrl: 'task.html',
        },
    },
})
