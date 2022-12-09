const Page = require('./page');

class SupliersPage extends Page {
    suplierCard(suplierName) { return $('[href*=' + suplierName + ']') }
    suplierGameQty(suplierName) { return $('[href*=' + suplierName + '] span[class*=game_count]') }
    get suppliersContainer() { return $('[class*=supplier-card-container]') }

    async enterSuplierGames(suplierName) {
        await this.suppliersContainer.waitForDisplayed()
        let suplierGameQty = await this.suplierGameQty(suplierName).getText()
        await this.suplierCard(suplierName).click()
        return suplierGameQty
    }

    open() {
        return super.open('suppliers')
    }
}

module.exports = new SupliersPage();
