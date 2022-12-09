module.exports = class Page {
    open(path) {
        return browser.url(`${browser.options.baseUrl}/${path}`)
    }
}