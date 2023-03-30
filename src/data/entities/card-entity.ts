import { CardModel, Rarity, Type } from "../models/card-model";

export class CardEntity {
  private _id: number;
  private _name: string;
  private _description: string;
  private _image: string;
  private _cost: number;
  private _attack: number;
  private _health: number;
  private _rarity: Rarity;
  private _type: Type;

  constructor(params: CardModel) {
    this._id = params.id;
    this._name = params.name;
    this._description = params.description;
    this._image = params.image;
    this._cost = params.cost;
    this._health = params.health;
    this._attack = params.attack;
    this._rarity = params.rarity;
    this._type = params.type;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get image(): string {
    return this._image;
  }

  get cost(): number {
    return this._cost;
  }

  get attack(): number {
    return this._attack;
  }

  get health(): number {
    return this._health;
  }

  get rarity(): Rarity {
    return this._rarity;
  }

  get type(): Type {
    return this._type;
  }

  get isCharacter(): boolean {
    return this._type === "character";
  }

  get isSkill(): boolean {
    return this._type === "skill";
  }

  get isWeapon(): boolean {
    return this._type === "weapon";
  }

  get isPlayable(): boolean {
    return this.isCharacter || this.isSkill || this.isWeapon;
  }

  get isUsable(): boolean {
    return this.isSkill || this.isWeapon;
  }

  get isTargetable(): boolean {
    return this.isCharacter || this.isSkill;
  }

  get isTargetableBySkill(): boolean {
    return this.isCharacter;
  }

  get isTargetableByWeapon(): boolean {
    return this.isCharacter;
  }

  get isTargetableByEffect(): boolean {
    return this.isCharacter || this.isSkill || this.isWeapon;
  }

  applyDamage(damage: number): void {
    if (this._health - damage < 0) {
      return;
    }
    this._health -= damage;
  }

  applyHeal(heal: number): void {
    this._health += heal;
  }

  applyAttack(attack: number): void {
    this._attack += attack;
  }
}
