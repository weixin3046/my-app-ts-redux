/**
 * Be careful adding to this enum, always assign a unique value (typescript will not prevent duplicate values).
 * These values is persisted in state and if you change the value it will cause errors
 */
export enum TransactionType {
  APPROVAL = 0,
  DELEGATE, //代表
  WRAP, //包裹
  COLLECT_FEES, //收取费用
  QUEUE, //队列
  EXECUTE, //执行
}
export interface BaseTransactionInfo {
  type: TransactionType;
}

export interface SerializableTransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  blockHash: string;
  transactionHash: string;
  blockNumber: number;
  status?: number;
}

export interface ApproveTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.APPROVAL;
  tokenAddress: string;
  spender: string;
}

export type TransactionInfo = ApproveTransactionInfo;

export interface TransactionDetails {
  hash: string;
  receipt?: SerializableTransactionReceipt;
  lastCheckedBlockNumber?: number;
  addedTime: number;
  confirmedTime?: number;
  from: string;
  info: TransactionInfo;
}
