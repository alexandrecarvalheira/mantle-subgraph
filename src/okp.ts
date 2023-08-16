import {
  Mint as MintEvent,
  CreateBasicMonster as CreateBasicMonsterEvent,
} from "../generated/OKP/OKP";
import { Player, Monster } from "../generated/schema";

export function handleMint(event: MintEvent): void {
  let player_id = event.params.id.toString();
  let entity = new Player(player_id);
  let class_id = event.params._class.toString();
  if (class_id == "0") {
    entity.maxHealth = 12;
    entity.currentHealth = 12;
    entity.maxMana = 10;
    entity.currentMana = 10;
    entity.strength = 11;
    entity.magic = 10;
    entity.agility = 10;
    entity.defense = 10;
  }
  if (class_id == "1") {
    entity.maxHealth = 11;
    entity.currentHealth = 11;
    entity.maxMana = 10;
    entity.currentMana = 10;
    entity.strength = 11;
    entity.magic = 10;
    entity.agility = 12;
    entity.defense = 10;
  }
  if (class_id == "2") {
    entity.maxHealth = 11;
    entity.currentHealth = 11;
    entity.maxMana = 12;
    entity.currentMana = 12;
    entity.strength = 10;
    entity.magic = 12;
    entity.agility = 10;
    entity.defense = 10;
  }
  entity.Player_id = event.params.id;
  entity.owner = event.params.owner;
  entity.name = event.params.name;
  entity.level = 1;

  entity.save();
}

export function handleCreateBasicMonster(event: CreateBasicMonsterEvent): void {
  let entity = new Monster(event.params._monsterId.toString());
  entity.cooldown = event.params._basicMonster.cooldown.toI32();
  entity.xpReward = event.params._basicMonster.xpReward.toI32();
  entity.damage = event.params._basicMonster.damage.toI32();
  entity.hp = event.params._basicMonster.hp.toI32();
  entity.name = event.params._basicMonster.name;
  entity.uri = event.params._basicMonster.uri;
  entity.save();
}
