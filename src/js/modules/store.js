export default class Store
{
	constructor ( nameBlock ) {
		this.nameBlock = nameBlock ? nameBlock : 'body';
	}

	setData ( key, value ) {
		this[key] = value;
	}
}