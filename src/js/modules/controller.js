export default class Controller
{
	constructor ( store, model, view ) {
		this.store = store;
		this.model = model;
		this.view = view;
		this.store.cache = false;
		this.pause = false;
		this.preventNum = null;
		this.animation = false;

		this.initControl();
	}

	initControl () {
		this.store.bottles.forEach( bottle => {
			bottle.addEventListener( 'click' , event => this.handleBottle( bottle ) );
		});

		this.store.buttons.forEach( button => {
			button.addEventListener( 'click', event => this.handleButton( button ) );
		});

		this.store.blockWin.addEventListener( 'click', event => this.handleBlockWin() );
	}

	handleBottle ( event ) {
		let cells = [];
		let bottle = null;
		let animation = null;
		const num = event.dataset.num;

		if ( !this.model.hasFullBottle( num ) ) {
			if ( !this.pause ) {
				if ( this.store.cache ) {
					this.sendToBottle( num );
				} else if ( !this.model.hasEmptyBottle( num ) ) {
					this.sendToCache( num );
				}
			}
		} else {
			this.view.animationErrorBottle( num );
		}
	}

	handleButton ( event ) {
		if ( event.textContent === 'Reset' ) {
			this.model.reset();
			setTimeout( () => this.view.reRender( [], true ), 1000);
		}

		if ( event.textContent === 'Undo' ) {
			if ( this.store.history.length > 0 ) {
				this.resetСache();
				this.model.moveBack();
				this.view.reRender([], true);
			}
		}

		if ( event.textContent === 'Restart' ) {
			this.resetСache();
			this.model.restart();
			this.view.reRender( [], true );
		}

		if ( event.textContent === 'Skin' ) {
			const nextSkin = ( this.store.skin + 1 < this.store.skins ) ? this.store.skin + 1 : 0;
			this.changeSkin ( nextSkin );
			this.view.reRender( [], true );
		}
	}

	resetСache () {
		if ( this.model.cache.length !== 0 ) {
			this.model.cache = [];
			this.store.cache = false;
			this.store.history.pop();
		}
	}

	handleBlockWin () {
		this.model.reset();
		this.view.reRender( [], true );
		this.view.hideScreenWin();
	}

	sendToCache ( num ) {
		this.pause = true;
		this.store.cache = true;
		this.previousNum = num;
		this.moveCells = this.model.moveToCache( num );

		this.view.animationToCash( num, this.moveCells );
		setTimeout( () => { this.pause = false; }, this.store.timeAnimation * ( this.moveCells.length + 1 ) );
	}

	sendToBottle ( num ) {
		this.pause = true;
		this.store.cache = false;
		const { bottle, cells, fullBottle, win } = this.model.moveToBottle( num, this.previousNum );

		if ( this.previousNum === bottle ) {
			this.view.returnToBottle( bottle, cells );
			this.view.animationErrorBottle( num );
		} else {
			this.view.animationToBottle( this.previousNum, bottle, this.moveCells, cells );
		}

		let animation = cells.length + 1;

		if ( fullBottle ) {
			setTimeout( () => {
				this.view.animationFullBottle( bottle );
			}, this.store.timeAnimation * animation );

			animation++;
		}

		setTimeout( () => {
			if ( win ) {
				this.pause = true;
				this.view.showScreenWin();
				setTimeout( () => this.pause = false, 200);
			} else {
				this.view.reRender( [ this.previousNum, bottle ] );
				this.previousNum = null;
				this.pause = false;
			}
		}, this.store.timeAnimation * animation * 2 );
	}

	changeSkin ( nextNum ) {
		const num = this.store.skin;

		this.view.applySkin( num, nextNum );
		this.store.skin = nextNum;
		localStorage.setItem( 'skin', nextNum );
	}
}