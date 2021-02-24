/*--tile-size: 48px;
--helmet-offset: 12px;
--game-size: calc(var(--tile-size) * 20);*/

const TILE_SIZE = 48
const HELMET_OFFSET = 12
const GAME_SIZE = TILE_SIZE * 20

const root = document.documentElement

root.style.setProperty('--tile-size', `${TILE_SIZE}px`)//48px
root.style.setProperty('--helmet-offset', `${HELMET_OFFSET}px`)//12px
root.style.setProperty('--game-size', `${GAME_SIZE}px`)//960px

//.......

function createBoard(){

    const boardElement = document.getElementById('board')
    
    function createElement(options){
        const {item, top, left} = options

        const htmlElement = document.createElement('div')
        htmlElement.className = item
        htmlElement.style.top = `${top}px`
        htmlElement.style.left = `${left}px`

        boardElement.appendChild(htmlElement)

        console.log('createElement')

    }

    function createItem(option)
    return{
        
    }
}

const board = createBoard()
/*
* item -> mini-demon | chest | hero | trap
* top  -> number
* left -> number
 */
board.createElement({ item: 'mini-demon', top: TILE_SIZE * 5, left: TILE_SIZE * 5});
board.createElement({ item: 'trap', top: TILE_SIZE * 10, left: TILE_SIZE * 10});
board.createElement({ item: 'chest', top: TILE_SIZE * 15, left: TILE_SIZE * 15});
board.createElement({ item: 'hero', top: TILE_SIZE * 16, left: TILE_SIZE * 2});

