const Page = require('./page');

class GameList extends Page {
    get gameSearchInput() { return $('[placeholder=Search]') }
    get gameListDiv() { return $('[class*=product-container]') }
    get gameItem() { return $$('[class*=item]') }
    get gameItemName() { return $('[class*=information] h2') }
    get loadMoreButton() { return $('[class*=loadmore] button') }
    get gamesQtyLabel() { return $('[class*=product-container] span') }

    async searchGame(gameName) {
        await this.gameListDiv.waitForDisplayed()
        await this.gameSearchInput.addValue(gameName)
        return gameName
    }

    async assertGameSearch(gameName) {
        await browser.waitUntil(
            async () => (await this.gameItem.length === 1)
        )
        expect(await this.gameItemName.getText()).toEqual(gameName)
    }

    async showAllGames() {
        await this.gameListDiv.waitForDisplayed()
        try {
            if (this.loadMoreButton.isDisplayed()) {
                await browser.waitUntil(
                    async () => {
                        do {
                            await this.loadMoreButton.click()
                        } while (await this.loadMoreButton.isDisplayed())
                    }
                )
            }
        } catch (error) { }
    }
    async assertGamesQty(gamesQty) {
        await this.gamesQtyLabel.waitForDisplayed()
        expect(await this.gamesQtyLabel.getText()).toEqual(gamesQty)
    }

    open(provider) {
        return super.open('games?provider=' + provider)
    }
}

module.exports = new GameList();