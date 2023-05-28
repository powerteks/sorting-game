export default class
{
	#buttons = [
		['Reset', '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="M 10,0 C 4.4862716,0 0,4.4862716 0,10 0,15.513766 4.4862757,20 10,20 15.513762,20 20,15.513762 20,10 20,4.4862757 15.513766,0 10,0 Z m 0,1.5384615 c 4.682326,0 8.461538,3.7792524 8.461538,8.4615385 0,4.68233 -3.779208,8.461538 -8.461538,8.461538 C 5.3177139,18.461538 1.5384615,14.682326 1.5384615,10 1.5384615,5.3177182 5.3177182,1.5384615 10,1.5384615 Z M 4.8717949,5.1282051 c -0.4248345,0 -0.7692308,0.3443963 -0.7692308,0.7692308 V 8.359375 c 0,0.457458 0.3611879,0.769231 0.7692308,0.769231 h 2.5641025 c 0.4248346,0 0.7692306,-0.344396 0.7692306,-0.769231 0,-0.424834 -0.344396,-0.7692308 -0.7692306,-0.7692308 H 7.0773237 C 7.6760783,7.1531939 8.380585,6.7994846 9.192709,6.7027244 c 0.914462,-0.1089535 1.850405,0.038111 2.646234,0.410657 0.795922,0.3725901 1.405564,0.9440436 1.754807,1.6045676 0.1986,0.375612 0.664048,0.519107 1.039663,0.320513 C 15.009029,8.839867 15.152548,8.374399 14.953926,7.998798 14.432023,7.0118603 13.561689,6.2219064 12.491988,5.7211538 11.422367,5.2204392 10.198614,4.9751675 9.010416,5.1742789 7.6639578,5.3999106 6.5626941,5.9121331 5.6410256,6.660657 V 5.8974359 c 0,-0.4248345 -0.3443963,-0.7692308 -0.7692307,-0.7692308 z m 7.6923081,5.7431889 c -0.424835,0 -0.769231,0.344396 -0.769231,0.769231 0,0.424834 0.344396,0.76923 0.769231,0.76923 h 0.358573 c -0.59875,0.436955 -1.292858,0.786883 -2.115385,0.887421 C 9.984764,13.397809 8.956928,13.259206 8.161057,12.886618 7.3651466,12.514016 6.755475,11.942535 6.4062501,11.282051 6.2076488,10.906439 5.7422018,10.762944 5.3665866,10.961538 c -0.3756153,0.198595 -0.5191364,0.664064 -0.3205129,1.039664 0.521898,0.986917 1.3923118,1.776904 2.4619391,2.277644 1.0696232,0.50074 2.2933822,0.745985 3.4815712,0.546875 1.346456,-0.225632 2.447725,-0.737849 3.36939,-1.486378 v 0.763221 c 0,0.424835 0.344396,0.769231 0.769231,0.769231 0.424835,0 0.769231,-0.344396 0.769231,-0.769231 v -2.461939 c 0,-0.400414 -0.386777,-0.769231 -0.769231,-0.769231 z" /></svg>'],
		['Undo', '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="M 10,0 C 4.486272,0 0,4.486272 0,10 0,15.513765 4.4862761,20 10,20 15.513761,20 20,15.513761 20,10 20,4.4862761 15.513765,0 10,0 Z m 0,1.5390625 c 4.682326,0 8.460938,3.778651 8.460937,8.4609375 0,4.68233 -3.778607,8.460937 -8.460937,8.460937 C 5.3177135,18.460937 1.5390625,14.682326 1.5390625,10 1.5390625,5.3177176 5.3177176,1.5390625 10,1.5390625 Z M 4.8710937,7.1796875 C 4.4467874,7.1805987 4.1033485,7.5249114 4.1035156,7.9492187 v 3.0761723 c 0,0.383637 0.2928329,0.769531 0.7675806,0.769531 h 3.078125 C 8.3742895,11.795087 8.7189164,11.450459 8.71875,11.025391 8.7189169,10.600321 8.3742883,10.255692 7.9492187,10.255859 H 6.7714844 C 7.6639671,9.5235158 8.5488176,8.9038618 9.5898438,8.7617188 10.580835,8.6264263 11.591818,8.807067 12.464844,9.2753906 c 0.873071,0.4683489 1.560901,1.1969834 1.964844,2.0722654 0.177706,0.386467 0.635332,0.555342 1.021484,0.376953 0.385718,-0.178439 0.553643,-0.635861 0.375,-1.021484 C 15.279757,9.5191272 14.353409,8.5432643 13.191406,7.9199219 12.029356,7.2965544 10.694589,7.0591944 9.3828125,7.2382812 7.8242673,7.451087 6.6901095,8.2940614 5.640625,9.1894531 V 7.9492187 C 5.6407915,7.5241494 5.296163,7.179521 4.8710937,7.1796875 Z"/></svg>'],
		['Restart', '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="M 10,0 C 4.4862771,0 0,4.4862771 0,10 0,15.513761 4.4862812,20 10,20 15.513757,20 20,15.513757 20,10 20,4.4862812 15.513761,0 10,0 Z m 0,1.5384615 c 4.682321,0 8.461538,3.7792572 8.461538,8.4615385 0,4.682325 -3.779213,8.461538 -8.461538,8.461538 C 5.3177187,18.461538 1.5384615,14.682321 1.5384615,10 1.5384615,5.3177229 5.3177229,1.5384615 10,1.5384615 Z M 5.8974359,4.1025641 c -0.4248341,0 -0.7692308,0.3443967 -0.7692308,0.7692308 V 7.948718 c 0,0.419975 0.3321114,0.769231 0.7692308,0.769231 H 8.974359 c 0.424835,0 0.769231,-0.344396 0.769231,-0.769231 0,-0.4248341 -0.344396,-0.7692308 -0.769231,-0.7692308 H 8.435496 c 0.360925,-0.201957 0.716927,-0.4269112 1.09976,-0.4807693 0.71578,-0.1007075 1.444578,0.034893 2.077325,0.3846154 0.632605,0.3497003 1.134816,0.8948167 1.430288,1.5544877 0.295378,0.659684 0.368691,1.396586 0.208333,2.101362 -0.160453,0.704826 -0.545907,1.33797 -1.097757,1.804888 -0.551869,0.466933 -1.239567,0.741748 -1.961137,0.783253 C 9.470558,13.368834 8.754795,13.174928 8.153045,12.774439 7.5513448,12.373985 7.0951594,11.789449 6.854968,11.107772 6.7141496,10.70651 6.2744626,10.495639 5.8733974,10.637019 c -0.4004652,0.141645 -0.6103175,0.581078 -0.46875,0.981571 0.3509663,0.996062 1.0157708,1.852717 1.8950321,2.4379 0.8792105,0.585151 1.9263175,0.867937 2.9807695,0.807293 1.054425,-0.06065 2.060305,-0.46164 2.866586,-1.143831 0.806303,-0.682208 1.368148,-1.608488 1.602564,-2.638221 C 14.983908,10.051946 14.87871,8.972716 14.447116,8.008814 14.015409,7.0449804 13.282086,6.2481338 12.357772,5.7371795 11.433394,5.2262685 10.36677,5.0291337 9.320914,5.1762821 8.226335,5.3302705 7.4088573,5.8561716 6.6666667,6.4122596 V 4.8717949 c 0,-0.4248341 -0.3443968,-0.7692308 -0.7692308,-0.7692308 z"/></svg>'],
		['Skin', '<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="M 10 0 C 4.4862771 0 0 4.4862771 0 10 C 0 15.51376 4.4862812 20 10 20 C 15.513756 20 20 15.513756 20 10 C 20 4.4862812 15.51376 0 10 0 z M 10 1.5390625 C 14.682321 1.5390625 18.460938 5.3177186 18.460938 10 C 18.460938 14.682325 14.682325 18.460938 10 18.460938 C 5.3177186 18.460938 1.5390625 14.682321 1.5390625 10 C 1.5390625 5.3177229 5.3177229 1.5390625 10 1.5390625 z M 6.8789062 4.0566406 C 5.3296438 4.0566406 4.0566406 5.3283427 4.0566406 6.8769531 C 4.0566406 8.4255626 5.3296438 9.6992188 6.8789062 9.6992188 C 8.4281677 9.6992188 9.6992188 8.4255626 9.6992188 6.8769531 C 9.6992188 5.3283427 8.4281677 4.0566406 6.8789062 4.0566406 z M 13.121094 4.0566406 C 11.571831 4.0566406 10.300781 5.3283427 10.300781 6.8769531 C 10.300781 8.4255626 11.571831 9.6992188 13.121094 9.6992188 C 14.670355 9.6992188 15.943359 8.4255626 15.943359 6.8769531 C 15.943359 5.3283427 14.670355 4.0566406 13.121094 4.0566406 z M 6.8789062 5.5957031 C 7.5963745 5.5957031 8.1601562 6.1597858 8.1601562 6.8769531 C 8.1601562 7.5941204 7.5963745 8.1601562 6.8789062 8.1601562 C 6.161436 8.1601562 5.5957031 7.5941204 5.5957031 6.8769531 C 5.5957031 6.1597858 6.161436 5.5957031 6.8789062 5.5957031 z M 13.121094 5.5957031 C 13.838562 5.5957031 14.402344 6.1597858 14.402344 6.8769531 C 14.402344 7.5941204 13.838562 8.1601562 13.121094 8.1601562 C 12.403623 8.1601562 11.837891 7.5941204 11.837891 6.8769531 C 11.837891 6.1597858 12.403623 5.5957031 13.121094 5.5957031 z M 6.8789062 10.300781 C 5.3296438 10.300781 4.0566406 11.572483 4.0566406 13.121094 C 4.0566406 14.669703 5.3296438 15.943359 6.8789062 15.943359 C 8.4281677 15.943359 9.6992188 14.669703 9.6992188 13.121094 C 9.6992188 11.572483 8.4281677 10.300781 6.8789062 10.300781 z M 13.121094 10.300781 C 11.571831 10.300781 10.300781 11.572483 10.300781 13.121094 C 10.300781 14.669703 11.571831 15.943359 13.121094 15.943359 C 14.670355 15.943359 15.943359 14.669703 15.943359 13.121094 C 15.943359 11.572483 14.670355 10.300781 13.121094 10.300781 z M 6.8789062 11.839844 C 7.5963745 11.839844 8.1601562 12.403926 8.1601562 13.121094 C 8.1601562 13.838261 7.5963745 14.404297 6.8789062 14.404297 C 6.161436 14.404297 5.5957031 13.838261 5.5957031 13.121094 C 5.5957031 12.403926 6.161436 11.839844 6.8789062 11.839844 z M 13.121094 11.839844 C 13.838562 11.839844 14.402344 12.403926 14.402344 13.121094 C 14.402344 13.838261 13.838562 14.404297 13.121094 14.404297 C 12.403623 14.404297 11.837891 13.838261 11.837891 13.121094 C 11.837891 12.403926 12.403623 11.839844 13.121094 11.839844 z " /></svg>'],
	];
	#skins = 2

	constructor ( store ) {
		this.store = store
		this.store.setData( 'timeAnimation', 100 );
		this.store.setData( 'skins', this.#skins );
		this.heightPart = null;
		this.beginSecondRow = this.store.board.length / 2;

		this.renderControl();
		this.renderBoard();

		this.renderBottles();
		this.renderCell();

		this.applySkin( this.store.skin, -1 );
	}

	render () {
		this.renderBottles();
		this.renderCell();
	}

	renderBoard () {
		const element = document.querySelector( this.store.nameBlock );

		this.boardBlock = document.createElement( 'div' );
		this.boardBlock.classList.add( 'board' );

		element.appendChild( this.boardBlock );
	}

	renderBottles () {
		this.store.setData( 'bottles', [] );

		for ( let bottle = 0; bottle < this.store.board.length; bottle++ ) {
			this.store.bottles[ bottle ] = document.createElement( 'div' );
			this.store.bottles[ bottle ].classList.add( 'bottle', 'bottle-' + bottle );
			this.store.bottles[ bottle ].dataset.num = bottle;
			const inner = document.createElement( 'div' );
			inner.classList.add( 'bottle__inner' );

			this.store.bottles[ bottle ].appendChild( inner );

			this.renderCap( this.store.bottles[ bottle ], bottle );

			this.boardBlock.appendChild( this.store.bottles[ bottle ] );
		}

		this.store.setData( 'bottles', this.store.bottles );

		this.store.setData( 'blockWin', document.createElement( 'div' ) );
		this.store.blockWin.classList.add( 'block-win' );

		const blockWinText = document.createElement( 'p' );
		blockWinText.classList.add( 'block-win__title' );
		blockWinText.textContent = 'Win!';

		const blockWinsText = document.createElement( 'p' );
		blockWinsText.classList.add( 'block-win__text' );
		this.blockWinCount = document.createElement( 'span' );
		this.blockWinCount.classList.add( 'block-win__count' );

		const description = document.createElement( 'span' );
		description.classList.add( 'block-win__description' );
		description.textContent = ' wins';
		blockWinsText.appendChild( this.blockWinCount );
		blockWinsText.appendChild( description );

		this.store.blockWin.appendChild( blockWinText );
		this.store.blockWin.appendChild( blockWinsText );
		this.boardBlock.appendChild( this.store.blockWin );
	}

	renderCap ( bottle, num ) {
		
		function hasFullBottle( bottle ) {
			if ( bottle[ 0 ] !== 0 ) {
				return bottle.every( element => element === bottle[ 0 ] );
			} else {
				return false;
			}
		}

		if ( hasFullBottle ( this.store.board[ num ] ) ) {
			bottle.childNodes[ 0 ].classList.add( 'bottle__inner_full' );
		} else {
			if ( bottle.classList.contains( 'bottle__full' ) ) bottle.classList.remove( 'bottle__full' );
			if ( bottle.childNodes[ 0 ].classList.contains( 'bottle__inner_full' ) ) bottle.childNodes[ 0 ].classList.remove( 'bottle__inner_full' );
		}
	}

	renderCell () {
		for ( let bottle = 0; bottle < this.store.board.length; bottle++ ) {
			for ( let part = 0; part < this.store.qtyParts; part++ ) {
				const partData = this.store.board[ bottle ][ part ];

				const cell = document.createElement( 'div' );
				cell.classList.add( 'cell' );
				const ball = document.createElement( 'div' );
				ball.classList.add( 'part', 'part__' + ( part + 1 ), 'part-' + partData );
				ball.appendChild( document.createElement( 'span' ) );
				cell.appendChild( ball );

				this.store.bottles[ bottle ].childNodes[ 0 ].appendChild( cell );
			}
		}
	}

	renderControl () {
		const element = document.querySelector( this.store.nameBlock );
		const buttons = this.#buttons;
		this.store.setData( 'buttons', [] );

		const control = document.createElement( 'div' );
		control.classList.add( 'control' );

		buttons.forEach( button => {
			this[ 'button' + button[ 0 ] ] = document.createElement( 'button' );
			this[ 'button' + button[ 0 ] ].classList.add( 'button', 'button__' + button[ 0 ].toLowerCase() );
			const span = document.createElement( 'span' );
			span.textContent = button[ 0 ];
			span.classList.add( 'button__text' );
			this[ 'button' + button[ 0 ] ].innerHTML = button[ 1 ];
			this[ 'button' + button[ 0 ] ].appendChild( span );
			control.appendChild( this[ 'button' + button[ 0 ] ] );

			this.store.buttons.push( this[ 'button' + button[ 0 ] ] );
		});

		let counter = document.createElement( 'p' );
		counter.classList.add( 'counter' );
		let description = document.createElement( 'span' );
		description.classList.add( 'counter__description' );
		description.textContent = 'Wins: ';
		this.counterWin = document.createElement( 'span' );
		this.counterWin.classList.add( 'counter__wins' );
		this.counterWin.textContent = this.store.countWin;
		counter.appendChild( description );
		counter.appendChild( this.counterWin );
		control.appendChild( counter );

		element.appendChild( control );
	}

	reRender ( bottles, full = false ) {
		if ( full ) {
			for ( let index = 0; index < this.store.board.length; index++ ) {
				bottles.push( index );
			}
		}

		bottles.forEach( bottle => {
			if ( full ) this.renderCap( this.store.bottles[ +bottle ], bottle );

			for ( let part = 0; part < this.store.qtyParts; part++ ) {
				const partData = this.store.board[ +bottle ][ part ];
				this.store.bottles[ +bottle ].childNodes[ 0 ].childNodes[ part ].childNodes[ 0 ].className = 'part part__' + ( part + 1 ) + ' part-' + partData;
			}
		});
	}

	animationToCash ( bottle, cells ) {
		const bottleBlock = this.store.bottles[ bottle ].childNodes[ 0 ];
		const start = cells[ 0 ]
		let i = cells.length;
		let animation = 0;
		
		for ( let index = start; index < ( start + cells.length); index++ ) {
			bottleBlock.childNodes[ index ].childNodes[ 0 ].classList.add( 'part__up' );
			setTimeout( () => {
				bottleBlock.childNodes[ index ].childNodes[ 0 ].classList.add( 'part__up-' + i );
				i--;
			}, this.store.timeAnimation * animation );
			animation++;
		}
	}

	animationToBottle ( bottle, toBottle, moveCells, cells ) {
		const bottleBlock = this.store.bottles[ bottle ].childNodes[0];
		let i = 0;
		const { row, parkingPart } = this.moveRow( bottle, toBottle );
		const column = this.moveBottle( bottle, toBottle );

		for ( let index = 0; index < moveCells.length; index++ ) {
			bottleBlock.childNodes[ moveCells[ index ] ].childNodes[ 0 ].classList.add( row, column );
		}

		moveCells.reverse();
		for ( let index = 0; index < moveCells.length; index++ ) {
			setTimeout( () => {
				bottleBlock.childNodes[ moveCells[ index ] ].childNodes[ 0 ].classList.add( parkingPart + ( cells[ index ] + 1 ) );
			}, this.store.timeAnimation * ( i + 1 ) );
			i++;
		}
	}

	returnToBottle( bottle, cells ) {
		const bottleBlock = this.store.bottles[ bottle ].childNodes[ 0 ];
		const start = cells[ 0 ]
		let i = cells.length;
		let animation = 0;

		for ( let index = start; index > ( start - cells.length ); index-- ) {
			setTimeout( () => {
				bottleBlock.childNodes[ index ].childNodes[ 0 ].classList.remove( 'part__up', 'part__up-' + i);
				i--;
			}, this.store.timeAnimation * animation );
			animation++;
		}
	}

	animationErrorBottle ( bottle ) {
		this.store.bottles[ bottle ].classList.add( 'bottle__error' );

		setTimeout( () => {
			this.store.bottles[ bottle ].classList.remove( 'bottle__error' );
		}, this.store.timeAnimation * 3 );
		
	}

	animationFullBottle ( bottle ) {
		this.store.bottles[ bottle ].classList.add( 'bottle__full' );
	}

	showScreenWin () {
		this.counterWin.innerHTML = this.store.countWin;
		this.blockWinCount.innerHTML = this.store.countWin;
		this.store.blockWin.classList.add( '_show' );
	}

	hideScreenWin () {
		this.store.blockWin.classList.remove( '_show' );
	}

	moveRow ( bottle, toBottle ) {
		let moveRow = '';
		let parkingPart = '';

		if ( bottle < this.beginSecondRow && !( toBottle < this.beginSecondRow ) ) {
			moveRow = 'part__bottom';
			parkingPart = 'part__bottom-parking-';
		} else if ( !( bottle < this.beginSecondRow ) && toBottle < this.beginSecondRow ) {
			moveRow = 'part__top';
			parkingPart = 'part__top-parking-';
		} else {
			moveRow = 'on-row';
			parkingPart = 'part__parking-';
		}

		return {
			row: moveRow,
			parkingPart: parkingPart
		}
	}

	moveBottle ( bottle, toBottle ) {
		let moveColumn = 'not-move';
		bottle = ( bottle < this.beginSecondRow ) ? bottle : bottle - 7;
		toBottle = ( toBottle < this.beginSecondRow ) ? toBottle : toBottle - 7;

		if ( bottle < toBottle ) {
			moveColumn = 'part__right-' + ( toBottle - bottle );
		} else {
			moveColumn = 'part__left-' + ( bottle - toBottle );
		}

		return moveColumn;
	}

	applySkin ( num, nextNum ) {
		if ( nextNum > -1 ) {
			this.boardBlock.classList.remove( 'board_skin-' + num );
			this.boardBlock.classList.add( 'board_skin-' + nextNum );
		} else {
			this.boardBlock.classList.add( 'board_skin-' + num );
		}
	}
}

