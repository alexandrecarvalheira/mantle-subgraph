import {
  OwnershipTransferred as OwnershipTransferredEvent,
  BasicEquipmentSchemaCreated as BasicEquipmentSchemaCreatedEvent,
  PurchaseBasicEquipment as PurchaseBasicEquipmentEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Transfer as TransferEvent,
  Approval1 as Approval1Event,
  ApprovalForAll1 as ApprovalForAll1Event,
  Transfer1 as Transfer1Event,
  ItemEquiped as ItemEquipedEvent,
  ItemUnequiped as ItemUnequipedEvent,
  Approval2 as Approval2Event,
  ApprovalForAll2 as ApprovalForAll2Event,
  CreateEquipmentListing as CreateEquipmentListingEvent,
  CreatePlayerListing as CreatePlayerListingEvent,
  DelistPlayer as DelistPlayerEvent,
  PurchaseEquipmentLisitng as PurchaseEquipmentLisitngEvent,
  PurchasePlayerListing as PurchasePlayerListingEvent,
  Transfer2 as Transfer2Event,
  CreateBasicMonster as CreateBasicMonsterEvent,
  CreateMagicMonster as CreateMagicMonsterEvent,
  DragonQuest as DragonQuestEvent,
  EditBasicMonster as EditBasicMonsterEvent,
  FightBasicMonster as FightBasicMonsterEvent,
  FightMagicMonster as FightMagicMonsterEvent,
  OwnershipTransferred1 as OwnershipTransferred1Event,
  ClaimPlayer as ClaimPlayerEvent,
  Mint as MintEvent,
  NameChange as NameChangeEvent,
  Approval3 as Approval3Event,
  ApprovalForAll3 as ApprovalForAll3Event,
  Mint1 as Mint1Event,
  NameChange1 as NameChange1Event,
  SentTransferRemote as SentTransferRemoteEvent,
  Transfer3 as Transfer3Event,
  BeginQuesting as BeginQuestingEvent,
  EndQuesting as EndQuestingEvent,
  OwnershipTransferred2 as OwnershipTransferred2Event,
  TrustedSignerChanged as TrustedSignerChangedEvent,
  ConsumeBasicPotion as ConsumeBasicPotionEvent,
  CreateBasicPotion as CreateBasicPotionEvent,
  PurchaseBasicPotion as PurchaseBasicPotionEvent,
  BeginTrainingBasicHealth as BeginTrainingBasicHealthEvent,
  BeginTrainingMana as BeginTrainingManaEvent,
  EndTrainingBasicHealth as EndTrainingBasicHealthEvent,
  EndTrainingMana as EndTrainingManaEvent,
  ClaimTreasure as ClaimTreasureEvent,
  TreasureSchemaCreation as TreasureSchemaCreationEvent,
  ApprovalForAll4 as ApprovalForAll4Event,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  ApprovalForAll5 as ApprovalForAll5Event,
  TransferBatch1 as TransferBatch1Event,
  TransferSingle1 as TransferSingle1Event,
  URI1 as URI1Event,
  OwnershipTransferred3 as OwnershipTransferred3Event,
  Approval4 as Approval4Event,
  ApprovalForAll6 as ApprovalForAll6Event,
  Transfer4 as Transfer4Event,
  Approval5 as Approval5Event,
  ApprovalForAll7 as ApprovalForAll7Event,
  Transfer5 as Transfer5Event,
  OwnershipTransferred4 as OwnershipTransferred4Event,
  OwnershipTransferred5 as OwnershipTransferred5Event,
  TrustedSignerChanged1 as TrustedSignerChanged1Event
} from "../generated/OKP/OKP"
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
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBasicEquipmentSchemaCreated(
  event: BasicEquipmentSchemaCreatedEvent
): void {
  let entity = new BasicEquipmentSchemaCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._basicEquipmentSchemaId = event.params._basicEquipmentSchemaId
  entity._value = event.params._value
  entity._uri = event.params._uri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchaseBasicEquipment(
  event: PurchaseBasicEquipmentEvent
): void {
  let entity = new PurchaseBasicEquipment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId
  entity._equipmentSchemaId = event.params._equipmentSchemaId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval1(event: Approval1Event): void {
  let entity = new Approval1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll1(event: ApprovalForAll1Event): void {
  let entity = new ApprovalForAll1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer1(event: Transfer1Event): void {
  let entity = new Transfer1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemEquiped(event: ItemEquipedEvent): void {
  let entity = new ItemEquiped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._playerId = event.params._playerId
  entity._equipmentId = event.params._equipmentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemUnequiped(event: ItemUnequipedEvent): void {
  let entity = new ItemUnequiped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._playerId = event.params._playerId
  entity._equipmentId = event.params._equipmentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval2(event: Approval2Event): void {
  let entity = new Approval2(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll2(event: ApprovalForAll2Event): void {
  let entity = new ApprovalForAll2(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateEquipmentListing(
  event: CreateEquipmentListingEvent
): void {
  let entity = new CreateEquipmentListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._playerId = event.params._playerId
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatePlayerListing(
  event: CreatePlayerListingEvent
): void {
  let entity = new CreatePlayerListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._playerId = event.params._playerId
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelistPlayer(event: DelistPlayerEvent): void {
  let entity = new DelistPlayer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._playerId = event.params._playerId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchaseEquipmentLisitng(
  event: PurchaseEquipmentLisitngEvent
): void {
  let entity = new PurchaseEquipmentLisitng(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchasePlayerListing(
  event: PurchasePlayerListingEvent
): void {
  let entity = new PurchasePlayerListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer2(event: Transfer2Event): void {
  let entity = new Transfer2(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateBasicMonster(event: CreateBasicMonsterEvent): void {
  let entity = new CreateBasicMonster(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._monsterId = event.params._monsterId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateMagicMonster(event: CreateMagicMonsterEvent): void {
  let entity = new CreateMagicMonster(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._monsterId = event.params._monsterId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDragonQuest(event: DragonQuestEvent): void {
  let entity = new DragonQuest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEditBasicMonster(event: EditBasicMonsterEvent): void {
  let entity = new EditBasicMonster(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._monsterId = event.params._monsterId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFightBasicMonster(event: FightBasicMonsterEvent): void {
  let entity = new FightBasicMonster(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._monsterId = event.params._monsterId
  entity._playerId = event.params._playerId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFightMagicMonster(event: FightMagicMonsterEvent): void {
  let entity = new FightMagicMonster(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._monsterId = event.params._monsterId
  entity._playerId = event.params._playerId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred1(
  event: OwnershipTransferred1Event
): void {
  let entity = new OwnershipTransferred1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimPlayer(event: ClaimPlayerEvent): void {
  let entity = new ClaimPlayer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId
  entity._treasureDropId = event.params._treasureDropId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.OKP_id = event.params.id
  entity.owner = event.params.owner
  entity.name = event.params.name
  entity._class = event.params._class

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameChange(event: NameChangeEvent): void {
  let entity = new NameChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.OKP_id = event.params.id
  entity.newName = event.params.newName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval3(event: Approval3Event): void {
  let entity = new Approval3(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll3(event: ApprovalForAll3Event): void {
  let entity = new ApprovalForAll3(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint1(event: Mint1Event): void {
  let entity = new Mint1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.OKP_id = event.params.id
  entity.owner = event.params.owner
  entity.name = event.params.name
  entity._class = event.params._class

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameChange1(event: NameChange1Event): void {
  let entity = new NameChange1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.OKP_id = event.params.id
  entity.newName = event.params.newName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSentTransferRemote(event: SentTransferRemoteEvent): void {
  let entity = new SentTransferRemote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.destination = event.params.destination
  entity.recipient = event.params.recipient
  entity.playerId = event.params.playerId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer3(event: Transfer3Event): void {
  let entity = new Transfer3(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeginQuesting(event: BeginQuestingEvent): void {
  let entity = new BeginQuesting(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndQuesting(event: EndQuestingEvent): void {
  let entity = new EndQuesting(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred2(
  event: OwnershipTransferred2Event
): void {
  let entity = new OwnershipTransferred2(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrustedSignerChanged(
  event: TrustedSignerChangedEvent
): void {
  let entity = new TrustedSignerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSigner = event.params.newSigner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsumeBasicPotion(event: ConsumeBasicPotionEvent): void {
  let entity = new ConsumeBasicPotion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId
  entity._basicPotionSchemaId = event.params._basicPotionSchemaId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateBasicPotion(event: CreateBasicPotionEvent): void {
  let entity = new CreateBasicPotion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._basicPotionSchemaId = event.params._basicPotionSchemaId
  entity._value = event.params._value
  entity._cost = event.params._cost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchaseBasicPotion(
  event: PurchaseBasicPotionEvent
): void {
  let entity = new PurchaseBasicPotion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId
  entity._basicPotionSchemaId = event.params._basicPotionSchemaId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeginTrainingBasicHealth(
  event: BeginTrainingBasicHealthEvent
): void {
  let entity = new BeginTrainingBasicHealth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeginTrainingMana(event: BeginTrainingManaEvent): void {
  let entity = new BeginTrainingMana(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndTrainingBasicHealth(
  event: EndTrainingBasicHealthEvent
): void {
  let entity = new EndTrainingBasicHealth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndTrainingMana(event: EndTrainingManaEvent): void {
  let entity = new EndTrainingMana(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerAddress = event.params._playerAddress
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimTreasure(event: ClaimTreasureEvent): void {
  let entity = new ClaimTreasure(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._playerId = event.params._playerId
  entity._treasureDropId = event.params._treasureDropId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasureSchemaCreation(
  event: TreasureSchemaCreationEvent
): void {
  let entity = new TreasureSchemaCreation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._treasureSchemaId = event.params._treasureSchemaId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll4(event: ApprovalForAll4Event): void {
  let entity = new ApprovalForAll4(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.OKP_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.OKP_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll5(event: ApprovalForAll5Event): void {
  let entity = new ApprovalForAll5(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch1(event: TransferBatch1Event): void {
  let entity = new TransferBatch1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle1(event: TransferSingle1Event): void {
  let entity = new TransferSingle1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.OKP_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI1(event: URI1Event): void {
  let entity = new URI1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.value = event.params.value
  entity.OKP_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred3(
  event: OwnershipTransferred3Event
): void {
  let entity = new OwnershipTransferred3(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval4(event: Approval4Event): void {
  let entity = new Approval4(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll6(event: ApprovalForAll6Event): void {
  let entity = new ApprovalForAll6(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer4(event: Transfer4Event): void {
  let entity = new Transfer4(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval5(event: Approval5Event): void {
  let entity = new Approval5(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll7(event: ApprovalForAll7Event): void {
  let entity = new ApprovalForAll7(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer5(event: Transfer5Event): void {
  let entity = new Transfer5(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred4(
  event: OwnershipTransferred4Event
): void {
  let entity = new OwnershipTransferred4(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred5(
  event: OwnershipTransferred5Event
): void {
  let entity = new OwnershipTransferred5(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrustedSignerChanged1(
  event: TrustedSignerChanged1Event
): void {
  let entity = new TrustedSignerChanged1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSigner = event.params.newSigner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
