const SupliersPage = require('../pageobjects/supliers.page')
const GameListPage = require('../pageobjects/gameList.page')

describe('As a user, I want to find a game', () => {
    it('Game should be returned in the search', async () => {
        await GameListPage.open('OneTouch')

        const gameName = await GameListPage.searchGame('King Dragon Tiger')
        await GameListPage.assertGameSearch(gameName)
    })
    it('Number of games displayed is the same as the number as informed', async () => {
        await SupliersPage.open()

        const gamesQty = await SupliersPage.enterSuplierGames('OneTouch')
        await GameListPage.showAllGames()

        await GameListPage.assertGamesQty(gamesQty)
    })
})


