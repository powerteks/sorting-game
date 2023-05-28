
import Model from './model.min.js';
import Store from './store.min.js';
import View from './view.min.js';
import Controller from "./controller.min.js";

export default class Game
{
	constructor ( nameBlock ) {
		const store = new Store( nameBlock );
		const model = new Model( store );
		const view = new View( store );
		const controller = new Controller( store, model, view );
	}
}
