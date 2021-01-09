// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ibETHTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ibETHTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ibETHTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ibETHTransfer", id.toString(), this);
  }

  static load(id: string): ibETHTransfer | null {
    return store.get("ibETHTransfer", id) as ibETHTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Balance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Balance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Balance", id.toString(), this);
  }

  static load(id: string): Balance | null {
    return store.get("Balance", id) as Balance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class BankSummary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BankSummary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BankSummary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BankSummary", id.toString(), this);
  }

  static load(id: string): BankSummary | null {
    return store.get("BankSummary", id) as BankSummary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ibETHSupply(): BigInt {
    let value = this.get("ibETHSupply");
    return value.toBigInt();
  }

  set ibETHSupply(value: BigInt) {
    this.set("ibETHSupply", Value.fromBigInt(value));
  }

  get totalETH(): BigInt {
    let value = this.get("totalETH");
    return value.toBigInt();
  }

  set totalETH(value: BigInt) {
    this.set("totalETH", Value.fromBigInt(value));
  }

  get totalDebtShare(): BigInt {
    let value = this.get("totalDebtShare");
    return value.toBigInt();
  }

  set totalDebtShare(value: BigInt) {
    this.set("totalDebtShare", Value.fromBigInt(value));
  }

  get totalDebtValue(): BigInt {
    let value = this.get("totalDebtValue");
    return value.toBigInt();
  }

  set totalDebtValue(value: BigInt) {
    this.set("totalDebtValue", Value.fromBigInt(value));
  }

  get totalPosition(): BigInt {
    let value = this.get("totalPosition");
    return value.toBigInt();
  }

  set totalPosition(value: BigInt) {
    this.set("totalPosition", Value.fromBigInt(value));
  }

  get reservePool(): BigInt {
    let value = this.get("reservePool");
    return value.toBigInt();
  }

  set reservePool(value: BigInt) {
    this.set("reservePool", Value.fromBigInt(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Position entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Position entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Position", id.toString(), this);
  }

  static load(id: string): Position | null {
    return store.get("Position", id) as Position | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get goblin(): Bytes {
    let value = this.get("goblin");
    return value.toBytes();
  }

  set goblin(value: Bytes) {
    this.set("goblin", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get debtShare(): BigInt {
    let value = this.get("debtShare");
    return value.toBigInt();
  }

  set debtShare(value: BigInt) {
    this.set("debtShare", Value.fromBigInt(value));
  }
}

export class Reinvest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Reinvest entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Reinvest entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Reinvest", id.toString(), this);
  }

  static load(id: string): Reinvest | null {
    return store.get("Reinvest", id) as Reinvest | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caller(): Bytes {
    let value = this.get("caller");
    return value.toBytes();
  }

  set caller(value: Bytes) {
    this.set("caller", Value.fromBytes(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }

  get bounty(): BigInt {
    let value = this.get("bounty");
    return value.toBigInt();
  }

  set bounty(value: BigInt) {
    this.set("bounty", Value.fromBigInt(value));
  }

  get blockTime(): BigInt {
    let value = this.get("blockTime");
    return value.toBigInt();
  }

  set blockTime(value: BigInt) {
    this.set("blockTime", Value.fromBigInt(value));
  }

  get goblin(): Bytes {
    let value = this.get("goblin");
    return value.toBytes();
  }

  set goblin(value: Bytes) {
    this.set("goblin", Value.fromBytes(value));
  }
}

export class GoblinPosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GoblinPosition entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GoblinPosition entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GoblinPosition", id.toString(), this);
  }

  static load(id: string): GoblinPosition | null {
    return store.get("GoblinPosition", id) as GoblinPosition | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get goblin(): Bytes {
    let value = this.get("goblin");
    return value.toBytes();
  }

  set goblin(value: Bytes) {
    this.set("goblin", Value.fromBytes(value));
  }

  get position(): BigInt {
    let value = this.get("position");
    return value.toBigInt();
  }

  set position(value: BigInt) {
    this.set("position", Value.fromBigInt(value));
  }

  get lpShare(): BigInt {
    let value = this.get("lpShare");
    return value.toBigInt();
  }

  set lpShare(value: BigInt) {
    this.set("lpShare", Value.fromBigInt(value));
  }
}

export class GoblinSummary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GoblinSummary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GoblinSummary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GoblinSummary", id.toString(), this);
  }

  static load(id: string): GoblinSummary | null {
    return store.get("GoblinSummary", id) as GoblinSummary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalShare(): BigInt {
    let value = this.get("totalShare");
    return value.toBigInt();
  }

  set totalShare(value: BigInt) {
    this.set("totalShare", Value.fromBigInt(value));
  }

  get totalLPToken(): BigInt {
    let value = this.get("totalLPToken");
    return value.toBigInt();
  }

  set totalLPToken(value: BigInt) {
    this.set("totalLPToken", Value.fromBigInt(value));
  }
}

export class AlphaGlobal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AlphaGlobal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AlphaGlobal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AlphaGlobal", id.toString(), this);
  }

  static load(id: string): AlphaGlobal | null {
    return store.get("AlphaGlobal", id) as AlphaGlobal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalAccAlpha(): BigInt {
    let value = this.get("totalAccAlpha");
    return value.toBigInt();
  }

  set totalAccAlpha(value: BigInt) {
    this.set("totalAccAlpha", Value.fromBigInt(value));
  }

  get totalShare(): BigInt {
    let value = this.get("totalShare");
    return value.toBigInt();
  }

  set totalShare(value: BigInt) {
    this.set("totalShare", Value.fromBigInt(value));
  }

  get multiplier(): BigInt {
    let value = this.get("multiplier");
    return value.toBigInt();
  }

  set multiplier(value: BigInt) {
    this.set("multiplier", Value.fromBigInt(value));
  }

  get latestBlockTime(): BigInt {
    let value = this.get("latestBlockTime");
    return value.toBigInt();
  }

  set latestBlockTime(value: BigInt) {
    this.set("latestBlockTime", Value.fromBigInt(value));
  }
}

export class UserBorrower extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserBorrower entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserBorrower entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserBorrower", id.toString(), this);
  }

  static load(id: string): UserBorrower | null {
    return store.get("UserBorrower", id) as UserBorrower | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accAlpha(): BigInt {
    let value = this.get("accAlpha");
    return value.toBigInt();
  }

  set accAlpha(value: BigInt) {
    this.set("accAlpha", Value.fromBigInt(value));
  }

  get latestAlphaMultiplier(): BigInt {
    let value = this.get("latestAlphaMultiplier");
    return value.toBigInt();
  }

  set latestAlphaMultiplier(value: BigInt) {
    this.set("latestAlphaMultiplier", Value.fromBigInt(value));
  }

  get debtShare(): BigInt {
    let value = this.get("debtShare");
    return value.toBigInt();
  }

  set debtShare(value: BigInt) {
    this.set("debtShare", Value.fromBigInt(value));
  }

  get blockTime(): BigInt {
    let value = this.get("blockTime");
    return value.toBigInt();
  }

  set blockTime(value: BigInt) {
    this.set("blockTime", Value.fromBigInt(value));
  }
}

export class UserLender extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserLender entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserLender entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserLender", id.toString(), this);
  }

  static load(id: string): UserLender | null {
    return store.get("UserLender", id) as UserLender | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accAlpha(): BigInt {
    let value = this.get("accAlpha");
    return value.toBigInt();
  }

  set accAlpha(value: BigInt) {
    this.set("accAlpha", Value.fromBigInt(value));
  }

  get latestAlphaMultiplier(): BigInt {
    let value = this.get("latestAlphaMultiplier");
    return value.toBigInt();
  }

  set latestAlphaMultiplier(value: BigInt) {
    this.set("latestAlphaMultiplier", Value.fromBigInt(value));
  }

  get ibETH(): BigInt {
    let value = this.get("ibETH");
    return value.toBigInt();
  }

  set ibETH(value: BigInt) {
    this.set("ibETH", Value.fromBigInt(value));
  }

  get blockTime(): BigInt {
    let value = this.get("blockTime");
    return value.toBigInt();
  }

  set blockTime(value: BigInt) {
    this.set("blockTime", Value.fromBigInt(value));
  }
}

export class MintIbETHAlphaLP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintIbETHAlphaLP entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintIbETHAlphaLP entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintIbETHAlphaLP", id.toString(), this);
  }

  static load(id: string): MintIbETHAlphaLP | null {
    return store.get("MintIbETHAlphaLP", id) as MintIbETHAlphaLP | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }
}

export class BurnIbETHAlphaLP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BurnIbETHAlphaLP entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BurnIbETHAlphaLP entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BurnIbETHAlphaLP", id.toString(), this);
  }

  static load(id: string): BurnIbETHAlphaLP | null {
    return store.get("BurnIbETHAlphaLP", id) as BurnIbETHAlphaLP | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class UserIbETHAlphaLiquidity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save UserIbETHAlphaLiquidity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserIbETHAlphaLiquidity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserIbETHAlphaLiquidity", id.toString(), this);
  }

  static load(id: string): UserIbETHAlphaLiquidity | null {
    return store.get(
      "UserIbETHAlphaLiquidity",
      id
    ) as UserIbETHAlphaLiquidity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ibETHStarting(): BigInt {
    let value = this.get("ibETHStarting");
    return value.toBigInt();
  }

  set ibETHStarting(value: BigInt) {
    this.set("ibETHStarting", Value.fromBigInt(value));
  }

  get alphaStarting(): BigInt {
    let value = this.get("alphaStarting");
    return value.toBigInt();
  }

  set alphaStarting(value: BigInt) {
    this.set("alphaStarting", Value.fromBigInt(value));
  }

  get ibETHAccGain(): BigInt {
    let value = this.get("ibETHAccGain");
    return value.toBigInt();
  }

  set ibETHAccGain(value: BigInt) {
    this.set("ibETHAccGain", Value.fromBigInt(value));
  }

  get alphaAccGain(): BigInt {
    let value = this.get("alphaAccGain");
    return value.toBigInt();
  }

  set alphaAccGain(value: BigInt) {
    this.set("alphaAccGain", Value.fromBigInt(value));
  }
}

export class UserRewardState extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserRewardState entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserRewardState entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserRewardState", id.toString(), this);
  }

  static load(id: string): UserRewardState | null {
    return store.get("UserRewardState", id) as UserRewardState | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get accAlpha(): BigInt {
    let value = this.get("accAlpha");
    return value.toBigInt();
  }

  set accAlpha(value: BigInt) {
    this.set("accAlpha", Value.fromBigInt(value));
  }

  get latestAlphaMultiplier(): BigInt {
    let value = this.get("latestAlphaMultiplier");
    return value.toBigInt();
  }

  set latestAlphaMultiplier(value: BigInt) {
    this.set("latestAlphaMultiplier", Value.fromBigInt(value));
  }

  get debtShare(): BigInt {
    let value = this.get("debtShare");
    return value.toBigInt();
  }

  set debtShare(value: BigInt) {
    this.set("debtShare", Value.fromBigInt(value));
  }

  get blockTime(): BigInt {
    let value = this.get("blockTime");
    return value.toBigInt();
  }

  set blockTime(value: BigInt) {
    this.set("blockTime", Value.fromBigInt(value));
  }

  get alphaGlobalTotalAccAlpha(): BigInt {
    let value = this.get("alphaGlobalTotalAccAlpha");
    return value.toBigInt();
  }

  set alphaGlobalTotalAccAlpha(value: BigInt) {
    this.set("alphaGlobalTotalAccAlpha", Value.fromBigInt(value));
  }

  get alphaGlobalTotalShare(): BigInt {
    let value = this.get("alphaGlobalTotalShare");
    return value.toBigInt();
  }

  set alphaGlobalTotalShare(value: BigInt) {
    this.set("alphaGlobalTotalShare", Value.fromBigInt(value));
  }

  get alphaGlobalMultiplier(): BigInt {
    let value = this.get("alphaGlobalMultiplier");
    return value.toBigInt();
  }

  set alphaGlobalMultiplier(value: BigInt) {
    this.set("alphaGlobalMultiplier", Value.fromBigInt(value));
  }

  get alphaGlobalLatestBlockTime(): BigInt {
    let value = this.get("alphaGlobalLatestBlockTime");
    return value.toBigInt();
  }

  set alphaGlobalLatestBlockTime(value: BigInt) {
    this.set("alphaGlobalLatestBlockTime", Value.fromBigInt(value));
  }
}
