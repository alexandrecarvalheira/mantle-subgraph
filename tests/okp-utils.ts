import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  BasicEquipmentSchemaCreated,
  PurchaseBasicEquipment,
  Approval,
  ApprovalForAll,
  Transfer,
  Approval1,
  ApprovalForAll1,
  Transfer1,
  ItemEquiped,
  ItemUnequiped,
  Approval2,
  ApprovalForAll2,
  CreateEquipmentListing,
  CreatePlayerListing,
  DelistPlayer,
  PurchaseEquipmentLisitng,
  PurchasePlayerListing,
  Transfer2,
  CreateBasicMonster,
  CreateMagicMonster,
  DragonQuest,
  EditBasicMonster,
  FightBasicMonster,
  FightMagicMonster,
  OwnershipTransferred1,
  ClaimPlayer,
  Mint,
  NameChange,
  Approval3,
  ApprovalForAll3,
  Mint1,
  NameChange1,
  SentTransferRemote,
  Transfer3,
  BeginQuesting,
  EndQuesting,
  OwnershipTransferred2,
  TrustedSignerChanged,
  ConsumeBasicPotion,
  CreateBasicPotion,
  PurchaseBasicPotion,
  BeginTrainingBasicHealth,
  BeginTrainingMana,
  EndTrainingBasicHealth,
  EndTrainingMana,
  ClaimTreasure,
  TreasureSchemaCreation,
  ApprovalForAll4,
  TransferBatch,
  TransferSingle,
  URI,
  ApprovalForAll5,
  TransferBatch1,
  TransferSingle1,
  URI1,
  OwnershipTransferred3,
  Approval4,
  ApprovalForAll6,
  Transfer4,
  Approval5,
  ApprovalForAll7,
  Transfer5,
  OwnershipTransferred4,
  OwnershipTransferred5,
  TrustedSignerChanged1
} from "../generated/OKP/OKP"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createBasicEquipmentSchemaCreatedEvent(
  _basicEquipmentSchemaId: BigInt,
  _value: BigInt,
  _uri: string
): BasicEquipmentSchemaCreated {
  let basicEquipmentSchemaCreatedEvent = changetype<
    BasicEquipmentSchemaCreated
  >(newMockEvent())

  basicEquipmentSchemaCreatedEvent.parameters = new Array()

  basicEquipmentSchemaCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_basicEquipmentSchemaId",
      ethereum.Value.fromUnsignedBigInt(_basicEquipmentSchemaId)
    )
  )
  basicEquipmentSchemaCreatedEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  basicEquipmentSchemaCreatedEvent.parameters.push(
    new ethereum.EventParam("_uri", ethereum.Value.fromString(_uri))
  )

  return basicEquipmentSchemaCreatedEvent
}

export function createPurchaseBasicEquipmentEvent(
  _playerId: BigInt,
  _equipmentSchemaId: BigInt
): PurchaseBasicEquipment {
  let purchaseBasicEquipmentEvent = changetype<PurchaseBasicEquipment>(
    newMockEvent()
  )

  purchaseBasicEquipmentEvent.parameters = new Array()

  purchaseBasicEquipmentEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  purchaseBasicEquipmentEvent.parameters.push(
    new ethereum.EventParam(
      "_equipmentSchemaId",
      ethereum.Value.fromUnsignedBigInt(_equipmentSchemaId)
    )
  )

  return purchaseBasicEquipmentEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createApproval1Event(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval1 {
  let approval1Event = changetype<Approval1>(newMockEvent())

  approval1Event.parameters = new Array()

  approval1Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approval1Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approval1Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approval1Event
}

export function createApprovalForAll1Event(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll1 {
  let approvalForAll1Event = changetype<ApprovalForAll1>(newMockEvent())

  approvalForAll1Event.parameters = new Array()

  approvalForAll1Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAll1Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll1Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll1Event
}

export function createTransfer1Event(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer1 {
  let transfer1Event = changetype<Transfer1>(newMockEvent())

  transfer1Event.parameters = new Array()

  transfer1Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer1Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer1Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transfer1Event
}

export function createItemEquipedEvent(
  _owner: Address,
  _playerId: BigInt,
  _equipmentId: BigInt
): ItemEquiped {
  let itemEquipedEvent = changetype<ItemEquiped>(newMockEvent())

  itemEquipedEvent.parameters = new Array()

  itemEquipedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  itemEquipedEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  itemEquipedEvent.parameters.push(
    new ethereum.EventParam(
      "_equipmentId",
      ethereum.Value.fromUnsignedBigInt(_equipmentId)
    )
  )

  return itemEquipedEvent
}

export function createItemUnequipedEvent(
  _owner: Address,
  _playerId: BigInt,
  _equipmentId: BigInt
): ItemUnequiped {
  let itemUnequipedEvent = changetype<ItemUnequiped>(newMockEvent())

  itemUnequipedEvent.parameters = new Array()

  itemUnequipedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  itemUnequipedEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  itemUnequipedEvent.parameters.push(
    new ethereum.EventParam(
      "_equipmentId",
      ethereum.Value.fromUnsignedBigInt(_equipmentId)
    )
  )

  return itemUnequipedEvent
}

export function createApproval2Event(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval2 {
  let approval2Event = changetype<Approval2>(newMockEvent())

  approval2Event.parameters = new Array()

  approval2Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approval2Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approval2Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approval2Event
}

export function createApprovalForAll2Event(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll2 {
  let approvalForAll2Event = changetype<ApprovalForAll2>(newMockEvent())

  approvalForAll2Event.parameters = new Array()

  approvalForAll2Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAll2Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll2Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll2Event
}

export function createCreateEquipmentListingEvent(
  _from: Address,
  _playerId: BigInt,
  _price: BigInt
): CreateEquipmentListing {
  let createEquipmentListingEvent = changetype<CreateEquipmentListing>(
    newMockEvent()
  )

  createEquipmentListingEvent.parameters = new Array()

  createEquipmentListingEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  createEquipmentListingEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  createEquipmentListingEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return createEquipmentListingEvent
}

export function createCreatePlayerListingEvent(
  _from: Address,
  _playerId: BigInt,
  _price: BigInt
): CreatePlayerListing {
  let createPlayerListingEvent = changetype<CreatePlayerListing>(newMockEvent())

  createPlayerListingEvent.parameters = new Array()

  createPlayerListingEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  createPlayerListingEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  createPlayerListingEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return createPlayerListingEvent
}

export function createDelistPlayerEvent(
  _from: Address,
  _playerId: BigInt
): DelistPlayer {
  let delistPlayerEvent = changetype<DelistPlayer>(newMockEvent())

  delistPlayerEvent.parameters = new Array()

  delistPlayerEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  delistPlayerEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )

  return delistPlayerEvent
}

export function createPurchaseEquipmentLisitngEvent(
  _to: Address,
  _id: BigInt
): PurchaseEquipmentLisitng {
  let purchaseEquipmentLisitngEvent = changetype<PurchaseEquipmentLisitng>(
    newMockEvent()
  )

  purchaseEquipmentLisitngEvent.parameters = new Array()

  purchaseEquipmentLisitngEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  purchaseEquipmentLisitngEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return purchaseEquipmentLisitngEvent
}

export function createPurchasePlayerListingEvent(
  _to: Address,
  _id: BigInt
): PurchasePlayerListing {
  let purchasePlayerListingEvent = changetype<PurchasePlayerListing>(
    newMockEvent()
  )

  purchasePlayerListingEvent.parameters = new Array()

  purchasePlayerListingEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  purchasePlayerListingEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return purchasePlayerListingEvent
}

export function createTransfer2Event(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer2 {
  let transfer2Event = changetype<Transfer2>(newMockEvent())

  transfer2Event.parameters = new Array()

  transfer2Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer2Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer2Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transfer2Event
}

export function createCreateBasicMonsterEvent(
  _monsterId: BigInt
): CreateBasicMonster {
  let createBasicMonsterEvent = changetype<CreateBasicMonster>(newMockEvent())

  createBasicMonsterEvent.parameters = new Array()

  createBasicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_monsterId",
      ethereum.Value.fromUnsignedBigInt(_monsterId)
    )
  )

  return createBasicMonsterEvent
}

export function createCreateMagicMonsterEvent(
  _monsterId: BigInt
): CreateMagicMonster {
  let createMagicMonsterEvent = changetype<CreateMagicMonster>(newMockEvent())

  createMagicMonsterEvent.parameters = new Array()

  createMagicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_monsterId",
      ethereum.Value.fromUnsignedBigInt(_monsterId)
    )
  )

  return createMagicMonsterEvent
}

export function createDragonQuestEvent(_playerId: BigInt): DragonQuest {
  let dragonQuestEvent = changetype<DragonQuest>(newMockEvent())

  dragonQuestEvent.parameters = new Array()

  dragonQuestEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )

  return dragonQuestEvent
}

export function createEditBasicMonsterEvent(
  _monsterId: BigInt
): EditBasicMonster {
  let editBasicMonsterEvent = changetype<EditBasicMonster>(newMockEvent())

  editBasicMonsterEvent.parameters = new Array()

  editBasicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_monsterId",
      ethereum.Value.fromUnsignedBigInt(_monsterId)
    )
  )

  return editBasicMonsterEvent
}

export function createFightBasicMonsterEvent(
  _monsterId: BigInt,
  _playerId: BigInt
): FightBasicMonster {
  let fightBasicMonsterEvent = changetype<FightBasicMonster>(newMockEvent())

  fightBasicMonsterEvent.parameters = new Array()

  fightBasicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_monsterId",
      ethereum.Value.fromUnsignedBigInt(_monsterId)
    )
  )
  fightBasicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )

  return fightBasicMonsterEvent
}

export function createFightMagicMonsterEvent(
  _monsterId: BigInt,
  _playerId: BigInt
): FightMagicMonster {
  let fightMagicMonsterEvent = changetype<FightMagicMonster>(newMockEvent())

  fightMagicMonsterEvent.parameters = new Array()

  fightMagicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_monsterId",
      ethereum.Value.fromUnsignedBigInt(_monsterId)
    )
  )
  fightMagicMonsterEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )

  return fightMagicMonsterEvent
}

export function createOwnershipTransferred1Event(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred1 {
  let ownershipTransferred1Event = changetype<OwnershipTransferred1>(
    newMockEvent()
  )

  ownershipTransferred1Event.parameters = new Array()

  ownershipTransferred1Event.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferred1Event.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferred1Event
}

export function createClaimPlayerEvent(
  _playerId: BigInt,
  _treasureDropId: BigInt
): ClaimPlayer {
  let claimPlayerEvent = changetype<ClaimPlayer>(newMockEvent())

  claimPlayerEvent.parameters = new Array()

  claimPlayerEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  claimPlayerEvent.parameters.push(
    new ethereum.EventParam(
      "_treasureDropId",
      ethereum.Value.fromUnsignedBigInt(_treasureDropId)
    )
  )

  return claimPlayerEvent
}

export function createMintEvent(
  id: BigInt,
  owner: Address,
  name: string,
  _class: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_class", ethereum.Value.fromUnsignedBigInt(_class))
  )

  return mintEvent
}

export function createNameChangeEvent(
  owner: Address,
  id: BigInt,
  newName: string
): NameChange {
  let nameChangeEvent = changetype<NameChange>(newMockEvent())

  nameChangeEvent.parameters = new Array()

  nameChangeEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameChangeEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nameChangeEvent.parameters.push(
    new ethereum.EventParam("newName", ethereum.Value.fromString(newName))
  )

  return nameChangeEvent
}

export function createApproval3Event(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval3 {
  let approval3Event = changetype<Approval3>(newMockEvent())

  approval3Event.parameters = new Array()

  approval3Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approval3Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approval3Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approval3Event
}

export function createApprovalForAll3Event(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll3 {
  let approvalForAll3Event = changetype<ApprovalForAll3>(newMockEvent())

  approvalForAll3Event.parameters = new Array()

  approvalForAll3Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAll3Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll3Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll3Event
}

export function createMint1Event(
  id: BigInt,
  owner: Address,
  name: string,
  _class: BigInt
): Mint1 {
  let mint1Event = changetype<Mint1>(newMockEvent())

  mint1Event.parameters = new Array()

  mint1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  mint1Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  mint1Event.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  mint1Event.parameters.push(
    new ethereum.EventParam("_class", ethereum.Value.fromUnsignedBigInt(_class))
  )

  return mint1Event
}

export function createNameChange1Event(
  owner: Address,
  id: BigInt,
  newName: string
): NameChange1 {
  let nameChange1Event = changetype<NameChange1>(newMockEvent())

  nameChange1Event.parameters = new Array()

  nameChange1Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameChange1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nameChange1Event.parameters.push(
    new ethereum.EventParam("newName", ethereum.Value.fromString(newName))
  )

  return nameChange1Event
}

export function createSentTransferRemoteEvent(
  destination: string,
  recipient: Address,
  playerId: BigInt
): SentTransferRemote {
  let sentTransferRemoteEvent = changetype<SentTransferRemote>(newMockEvent())

  sentTransferRemoteEvent.parameters = new Array()

  sentTransferRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "destination",
      ethereum.Value.fromString(destination)
    )
  )
  sentTransferRemoteEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sentTransferRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "playerId",
      ethereum.Value.fromUnsignedBigInt(playerId)
    )
  )

  return sentTransferRemoteEvent
}

export function createTransfer3Event(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer3 {
  let transfer3Event = changetype<Transfer3>(newMockEvent())

  transfer3Event.parameters = new Array()

  transfer3Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer3Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer3Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transfer3Event
}

export function createBeginQuestingEvent(
  _playerAddress: Address,
  _id: BigInt
): BeginQuesting {
  let beginQuestingEvent = changetype<BeginQuesting>(newMockEvent())

  beginQuestingEvent.parameters = new Array()

  beginQuestingEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  beginQuestingEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return beginQuestingEvent
}

export function createEndQuestingEvent(
  _playerAddress: Address,
  _id: BigInt
): EndQuesting {
  let endQuestingEvent = changetype<EndQuesting>(newMockEvent())

  endQuestingEvent.parameters = new Array()

  endQuestingEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  endQuestingEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return endQuestingEvent
}

export function createOwnershipTransferred2Event(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred2 {
  let ownershipTransferred2Event = changetype<OwnershipTransferred2>(
    newMockEvent()
  )

  ownershipTransferred2Event.parameters = new Array()

  ownershipTransferred2Event.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferred2Event.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferred2Event
}

export function createTrustedSignerChangedEvent(
  newSigner: Address
): TrustedSignerChanged {
  let trustedSignerChangedEvent = changetype<TrustedSignerChanged>(
    newMockEvent()
  )

  trustedSignerChangedEvent.parameters = new Array()

  trustedSignerChangedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return trustedSignerChangedEvent
}

export function createConsumeBasicPotionEvent(
  _playerId: BigInt,
  _basicPotionSchemaId: BigInt
): ConsumeBasicPotion {
  let consumeBasicPotionEvent = changetype<ConsumeBasicPotion>(newMockEvent())

  consumeBasicPotionEvent.parameters = new Array()

  consumeBasicPotionEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  consumeBasicPotionEvent.parameters.push(
    new ethereum.EventParam(
      "_basicPotionSchemaId",
      ethereum.Value.fromUnsignedBigInt(_basicPotionSchemaId)
    )
  )

  return consumeBasicPotionEvent
}

export function createCreateBasicPotionEvent(
  _basicPotionSchemaId: BigInt,
  _value: BigInt,
  _cost: BigInt
): CreateBasicPotion {
  let createBasicPotionEvent = changetype<CreateBasicPotion>(newMockEvent())

  createBasicPotionEvent.parameters = new Array()

  createBasicPotionEvent.parameters.push(
    new ethereum.EventParam(
      "_basicPotionSchemaId",
      ethereum.Value.fromUnsignedBigInt(_basicPotionSchemaId)
    )
  )
  createBasicPotionEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  createBasicPotionEvent.parameters.push(
    new ethereum.EventParam("_cost", ethereum.Value.fromUnsignedBigInt(_cost))
  )

  return createBasicPotionEvent
}

export function createPurchaseBasicPotionEvent(
  _playerId: BigInt,
  _basicPotionSchemaId: BigInt
): PurchaseBasicPotion {
  let purchaseBasicPotionEvent = changetype<PurchaseBasicPotion>(newMockEvent())

  purchaseBasicPotionEvent.parameters = new Array()

  purchaseBasicPotionEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  purchaseBasicPotionEvent.parameters.push(
    new ethereum.EventParam(
      "_basicPotionSchemaId",
      ethereum.Value.fromUnsignedBigInt(_basicPotionSchemaId)
    )
  )

  return purchaseBasicPotionEvent
}

export function createBeginTrainingBasicHealthEvent(
  _playerAddress: Address,
  _id: BigInt
): BeginTrainingBasicHealth {
  let beginTrainingBasicHealthEvent = changetype<BeginTrainingBasicHealth>(
    newMockEvent()
  )

  beginTrainingBasicHealthEvent.parameters = new Array()

  beginTrainingBasicHealthEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  beginTrainingBasicHealthEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return beginTrainingBasicHealthEvent
}

export function createBeginTrainingManaEvent(
  _playerAddress: Address,
  _id: BigInt
): BeginTrainingMana {
  let beginTrainingManaEvent = changetype<BeginTrainingMana>(newMockEvent())

  beginTrainingManaEvent.parameters = new Array()

  beginTrainingManaEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  beginTrainingManaEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return beginTrainingManaEvent
}

export function createEndTrainingBasicHealthEvent(
  _playerAddress: Address,
  _id: BigInt
): EndTrainingBasicHealth {
  let endTrainingBasicHealthEvent = changetype<EndTrainingBasicHealth>(
    newMockEvent()
  )

  endTrainingBasicHealthEvent.parameters = new Array()

  endTrainingBasicHealthEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  endTrainingBasicHealthEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return endTrainingBasicHealthEvent
}

export function createEndTrainingManaEvent(
  _playerAddress: Address,
  _id: BigInt
): EndTrainingMana {
  let endTrainingManaEvent = changetype<EndTrainingMana>(newMockEvent())

  endTrainingManaEvent.parameters = new Array()

  endTrainingManaEvent.parameters.push(
    new ethereum.EventParam(
      "_playerAddress",
      ethereum.Value.fromAddress(_playerAddress)
    )
  )
  endTrainingManaEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return endTrainingManaEvent
}

export function createClaimTreasureEvent(
  _playerId: BigInt,
  _treasureDropId: BigInt
): ClaimTreasure {
  let claimTreasureEvent = changetype<ClaimTreasure>(newMockEvent())

  claimTreasureEvent.parameters = new Array()

  claimTreasureEvent.parameters.push(
    new ethereum.EventParam(
      "_playerId",
      ethereum.Value.fromUnsignedBigInt(_playerId)
    )
  )
  claimTreasureEvent.parameters.push(
    new ethereum.EventParam(
      "_treasureDropId",
      ethereum.Value.fromUnsignedBigInt(_treasureDropId)
    )
  )

  return claimTreasureEvent
}

export function createTreasureSchemaCreationEvent(
  _treasureSchemaId: BigInt
): TreasureSchemaCreation {
  let treasureSchemaCreationEvent = changetype<TreasureSchemaCreation>(
    newMockEvent()
  )

  treasureSchemaCreationEvent.parameters = new Array()

  treasureSchemaCreationEvent.parameters.push(
    new ethereum.EventParam(
      "_treasureSchemaId",
      ethereum.Value.fromUnsignedBigInt(_treasureSchemaId)
    )
  )

  return treasureSchemaCreationEvent
}

export function createApprovalForAll4Event(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll4 {
  let approvalForAll4Event = changetype<ApprovalForAll4>(newMockEvent())

  approvalForAll4Event.parameters = new Array()

  approvalForAll4Event.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAll4Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll4Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll4Event
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createApprovalForAll5Event(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll5 {
  let approvalForAll5Event = changetype<ApprovalForAll5>(newMockEvent())

  approvalForAll5Event.parameters = new Array()

  approvalForAll5Event.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAll5Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll5Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll5Event
}

export function createTransferBatch1Event(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch1 {
  let transferBatch1Event = changetype<TransferBatch1>(newMockEvent())

  transferBatch1Event.parameters = new Array()

  transferBatch1Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatch1Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatch1Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatch1Event.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatch1Event.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatch1Event
}

export function createTransferSingle1Event(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle1 {
  let transferSingle1Event = changetype<TransferSingle1>(newMockEvent())

  transferSingle1Event.parameters = new Array()

  transferSingle1Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingle1Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingle1Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingle1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingle1Event.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingle1Event
}

export function createURI1Event(value: string, id: BigInt): URI1 {
  let uri1Event = changetype<URI1>(newMockEvent())

  uri1Event.parameters = new Array()

  uri1Event.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uri1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uri1Event
}

export function createOwnershipTransferred3Event(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred3 {
  let ownershipTransferred3Event = changetype<OwnershipTransferred3>(
    newMockEvent()
  )

  ownershipTransferred3Event.parameters = new Array()

  ownershipTransferred3Event.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferred3Event.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferred3Event
}

export function createApproval4Event(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval4 {
  let approval4Event = changetype<Approval4>(newMockEvent())

  approval4Event.parameters = new Array()

  approval4Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approval4Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approval4Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approval4Event
}

export function createApprovalForAll6Event(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll6 {
  let approvalForAll6Event = changetype<ApprovalForAll6>(newMockEvent())

  approvalForAll6Event.parameters = new Array()

  approvalForAll6Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAll6Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll6Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll6Event
}

export function createTransfer4Event(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer4 {
  let transfer4Event = changetype<Transfer4>(newMockEvent())

  transfer4Event.parameters = new Array()

  transfer4Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer4Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer4Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transfer4Event
}

export function createApproval5Event(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval5 {
  let approval5Event = changetype<Approval5>(newMockEvent())

  approval5Event.parameters = new Array()

  approval5Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approval5Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approval5Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approval5Event
}

export function createApprovalForAll7Event(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll7 {
  let approvalForAll7Event = changetype<ApprovalForAll7>(newMockEvent())

  approvalForAll7Event.parameters = new Array()

  approvalForAll7Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAll7Event.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAll7Event.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAll7Event
}

export function createTransfer5Event(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer5 {
  let transfer5Event = changetype<Transfer5>(newMockEvent())

  transfer5Event.parameters = new Array()

  transfer5Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer5Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer5Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transfer5Event
}

export function createOwnershipTransferred4Event(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred4 {
  let ownershipTransferred4Event = changetype<OwnershipTransferred4>(
    newMockEvent()
  )

  ownershipTransferred4Event.parameters = new Array()

  ownershipTransferred4Event.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferred4Event.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferred4Event
}

export function createOwnershipTransferred5Event(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred5 {
  let ownershipTransferred5Event = changetype<OwnershipTransferred5>(
    newMockEvent()
  )

  ownershipTransferred5Event.parameters = new Array()

  ownershipTransferred5Event.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferred5Event.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferred5Event
}

export function createTrustedSignerChanged1Event(
  newSigner: Address
): TrustedSignerChanged1 {
  let trustedSignerChanged1Event = changetype<TrustedSignerChanged1>(
    newMockEvent()
  )

  trustedSignerChanged1Event.parameters = new Array()

  trustedSignerChanged1Event.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return trustedSignerChanged1Event
}
