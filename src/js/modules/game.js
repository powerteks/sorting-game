
import Model from './model.js';
import Store from './store.js';
import View from './view.js';
import Controller from "./controller.js";

export default class Game
{
	constructor ( nameBlock ) {
		const store = new Store( nameBlock );
		const model = new Model( store );
		const view = new View( store );
		const controller = new Controller( store, model, view );
	}
}
