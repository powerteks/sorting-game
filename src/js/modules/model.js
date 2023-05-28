export default class Model
{
	constructor ( store ) {
		this.store = store;
		store.setData( 'board', [] );
		store.setData( 'qtyFullBottle', 12 );
		store.setData( 'qtyEmptylBottle', 2 );
		store.setData( 'qtyParts', 4 );
		store.setData( 'history', [] );
		store.setData( 'countWin', this.getCountWin() );
		store.setData( 'skin', 0 );
		this.counterFullBottle = 0
		this.cache = [];

		this.getBoard();
	}

	getBoard ( reset = false ) {
		const board = JSON.parse( localStorage.getItem( 'board' ) );

		if ( !Array.isArray( board ) || reset ) {
			this.fillBottles();

			const boardNew = JSON.stringify( this.store.board );

			localStorage.setItem( 'board', boardNew );
			localStorage.setItem( 'startBoard', boardNew );
			localStorage.setItem( 'skin', this.store.skin );
		}

		this.store.board = JSON.parse( localStorage.getItem( 'board' ) );
		this.store.startBoard = JSON.parse( localStorage.getItem( 'startBoard' ) );
		this.store.skin = +localStorage.getItem( 'skin' );
	}

	fillBottles () {
		for ( let bottle = 0; bottle < this.store.qtyFullBottle; bottle++ ) {
			this.store.board.push([]);
		}
	
		for ( let bottle = 0; bottle < this.store.qtyFullBottle; bottle++ ) {
			for ( let part = 0; part < this.store.qtyParts; part++ ) {
				this.fillBottle( bottle );
			}
		}

		for ( let bottle = this.store.qtyFullBottle; bottle < ( this.store.qtyEmptylBottle + this.store.qtyFullBottle ); bottle++ ) {
			this.store.board.push([]);

			for ( let part = 0; part < this.store.qtyParts; part++ ) {
				this.store.board[ bottle ].push( 0 );
			}
		}

		this.checkFullness();
	}

	checkFullness () {
		let i = 0;

		for ( let index = 0; index < this.store.board.length; index++ ) {
			if ( this.hasFullBottle( index ) ) i++;
		}

		if ( i > 0 ) this.fillBottles();
	}

	fillBottle ( bottle ) {
		const random = Math.floor( Math.random() * this.store.qtyFullBottle );

		if ( this.store.board[ random ].length < this.store.qtyParts ) {
			this.store.board[ random ].push( bottle + 1 );
		} else {
			this.fillBottle ( bottle );
		}
	}

	moveToCache ( num ) {
		const bottle = this.store.board[ num ];
		const value = bottle[ this.getLastZeroIndex( bottle ) + 1 ];
		const cells = [];

		this.store.history.push( JSON.parse( JSON.stringify( this.store.board) ) );
		for ( let index = this.getLastZeroIndex( bottle ) + 1; index < this.store.qtyParts; index++ ) {
			if ( bottle[ index ] === value ) {
				this.cache.push( bottle[ index ] );
				this.store.board[ num ][ index ] = 0;
				cells.push( index );
			} else if ( this.store.board[ index ] !== 0 ) {
				break;
			}
		}

		return ( cells.length > 0 ) ? cells : false;
	}

	moveToBottle ( num, previousNum ) {
		const cells = [];
		let bottomEmptyCell = null;
		let bottle = null;

		const firstIndex = ( this.getLastZeroIndex( this.store.board[ num ] ) !== 3 ) ? this.getLastZeroIndex( this.store.board[ num ] ) + 1 : 3;
		const firstPart = this.store.board[ num ][ firstIndex ];
		if ( this.hasFreePlaces( num ) && ( firstPart === this.cache[0] || firstPart === 0 )) {
			bottle = num;
		} else {
			bottle = previousNum;
			this.store.history.pop();
		}

		bottomEmptyCell = this.getLastZeroIndex( this.store.board[ bottle ] );
		for ( let index = this.cache.length - 1; index > -1; index-- ) {
			this.store.board[ bottle ][ bottomEmptyCell ] = this.cache[ index ];
			cells.push( bottomEmptyCell );
			bottomEmptyCell--;
		}

		this.cache = [];
		const fullBottle = this.hasFullBottle( num );
		let win = false;
		if ( fullBottle ) {
			win = this.hasFullBottles();
		}

		if ( win ) {
			this.store.countWin++;
			localStorage.setItem( 'countWin', this.store.countWin );
		}

		localStorage.setItem( 'board', JSON.stringify( this.store.board ) );

		return {
			bottle: bottle,
			cells: cells,
			fullBottle: fullBottle,
			win: win,
		}
	}

	getLastZeroIndex ( array ) {
		for ( let index = 0; index < array.length; index++ ) {
			if ( array[ index ] !== 0 ) {
				return index - 1;
			}
		}

		return 3;
	}

	hasFullBottle ( num ) {
		if ( this.store.board[ num ][ 0 ] !== 0 ) {
			return this.store.board[ num ].every( element => element === this.store.board[ num ][ 0 ] );
		} else {
			return false;
		}
	}

	hasEmptyBottle ( num ) {
		return this.store.board[ num ].every( element => element === 0 );
	}

	hasFullBottles () {
		let counterFullBottle = 0;
		
		for ( let bottle = 0; bottle < this.store.board.length; bottle++ ) {
			if ( this.hasFullBottle ( bottle ) ) counterFullBottle++;
		}

		return ( counterFullBottle === this.store.qtyFullBottle ) ? true : false;
	}

	hasFreePlaces ( num ) {
		for ( let index = 0; index < this.store.qtyParts; index++ ) {
			if ( this.store.board[ num ][ index ] === 0 && index + 1 === this.cache.length ) {
				return true;
			}
		}

		return false;
	}

	moveBack () {
		this.store.board = this.store.history.pop();
	}

	getCountWin () {
		if ( localStorage.getItem( 'countWin' ) === null || localStorage.getItem( 'countWin' ) === 'undefined' ) {
			localStorage.setItem( 'countWin', 0 );
		}

		return localStorage.getItem( 'countWin' );
	}

	restart () {
		this.store.board = JSON.parse( localStorage.getItem( 'startBoard' ) );
		this.store.history = [];
	}

	reset () {
		this.store.board = [];
		this.store.history = [];
		this.getBoard( true );
	}
}