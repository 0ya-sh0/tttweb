import constants from './constants'
import Game from './Game'
import copy from '../util/copy'

const WIN_SCORE = 10;
const LOSE_SCORE = -10;
const TIE_SCORE = 0;

const getEmptyCells = (state) => {
    const cells = [];
    for(let i=0; i<state.rows;i++) {
        for(let j=0; j<state.cols;j++) {
            if(state.board[i][j] === 0)
                cells.push([i,j])
        }
    }
    return cells;
}

const evaluate = (state, player) => {
    let score = 0;
    switch(state.gameComplete) {
        case constants.P1_WON:
            if(player === 1) {
                score = WIN_SCORE
            } else {
                score = LOSE_SCORE
            }
            break;
        case constants.P2_WON:
            if(player === 2) {
                score = WIN_SCORE
            } else {
                score = LOSE_SCORE
            }
            break;
        case constants.TIE:
            score = TIE_SCORE;
            break;
        default:
            score = TIE_SCORE;
    }
    return score;
}

const minimax = (game, depth, player, maxDepth) => {

    if(depth === maxDepth) {
        return 0;
    }
    //console.log("player = "+player)
	let score = evaluate(game._state, player);
    if(score === WIN_SCORE || score === LOSE_SCORE || game._state.gameComplete === constants.TIE) {
        //console.log(depth)
        return score;
    }
    const cells = getEmptyCells(game._state);
    const toMaximize = game._state.currentPlayer == player;

    if(toMaximize) {
        score = -1000;
    } else {
        score = 1000;
    }

    for (const cell of cells) {
		const x = cell[0];
        const y = cell[1];
        const newGame = new Game(copy(game._state));
        newGame.doMove(cell[0], cell[1], newGame._state.currentPlayer);
		const currentScore = minimax(newGame, depth+1, player, maxDepth);

		if (toMaximize) {
			if (currentScore > score)
				score = currentScore;
		}
		else {
			if (currentScore < score)
                score = currentScore;
		}
	}
	return score;
}

const findBestMove = (state, maxDepth = 100) => {
    const cells = getEmptyCells(state);
    let bestScore = -1000, bestMove = [-1, -1];
    const player = state.currentPlayer
    for (const cell of cells) {
        const x = cell[0];
        const y = cell[1];
        const newGame = new Game(copy(state));
        newGame.doMove(x, y, newGame._state.currentPlayer);
        const score = minimax(newGame,0, player, maxDepth)   
        if(score > bestScore) {
            bestScore = score;
            bestMove = cell;
        } 
    }
    return bestMove;
}

export default findBestMove;
