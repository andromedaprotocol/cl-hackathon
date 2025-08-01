/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type AndrAddr = string;
export interface InstantiateMsg {
  kernel_address: string;
  minter: AndrAddr;
  name: string;
  owner?: string | null;
  symbol: string;
}
export type ExecuteMsg =
  | {
      mint: MintMsg;
    }
  | {
      transfer_nft: {
        recipient: AndrAddr;
        token_id: string;
      };
    }
  | {
      send_nft: {
        contract: AndrAddr;
        msg: Binary;
        token_id: string;
      };
    }
  | {
      approve: {
        expires?: Expiration | null;
        spender: string;
        token_id: string;
      };
    }
  | {
      revoke: {
        spender: string;
        token_id: string;
      };
    }
  | {
      approve_all: {
        expires?: Expiration | null;
        operator: string;
      };
    }
  | {
      revoke_all: {
        operator: string;
      };
    }
  | {
      burn: {
        token_id: string;
      };
    }
  | {
      archive: {
        token_id: string;
      };
    }
  | {
      transfer_agreement: {
        agreement?: TransferAgreement | null;
        token_id: string;
      };
    }
  | {
      batch_mint: {
        tokens: MintMsg[];
      };
    }
  | {
      batch_send: {
        batch: BatchSendMsg[];
      };
    }
  | {
      amp_receive: AMPPkt;
    }
  | {
      ownership: OwnershipMessage;
    }
  | {
      update_kernel_address: {
        address: Addr;
      };
    }
  | {
      update_app_contract: {
        address: string;
      };
    }
  | {
      permissioning: PermissioningMessage;
    }
  | {
      rates: RatesMessage;
    };
export type Binary = string;
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {};
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export type ReplyOn = "always" | "error" | "success" | "never";
export type OwnershipMessage =
  | ("revoke_ownership_offer" | "accept_ownership" | "disown")
  | {
      update_owner: {
        expiration?: Expiry | null;
        new_owner: Addr;
      };
    };
export type Expiry =
  | {
      from_now: Milliseconds;
    }
  | {
      at_time: Milliseconds;
    };
export type Milliseconds = number;
export type Addr = string;
export type PermissioningMessage =
  | {
      set_permission: {
        action: string;
        actors: AndrAddr[];
        permission: Permission;
      };
    }
  | {
      remove_permission: {
        action: string;
        actors: AndrAddr[];
      };
    }
  | {
      permission_action: {
        action: string;
      };
    }
  | {
      disable_action_permissioning: {
        action: string;
      };
    };
export type Permission =
  | {
      local: LocalPermission;
    }
  | {
      contract: AndrAddr;
    };
export type LocalPermission =
  | {
      blacklisted: {
        expiration?: Expiry | null;
        start?: Expiry | null;
      };
    }
  | {
      limited: {
        expiration?: Expiry | null;
        start?: Expiry | null;
        uses: number;
      };
    }
  | {
      whitelisted: {
        expiration?: Expiry | null;
        start?: Expiry | null;
      };
    };
export type RatesMessage =
  | {
      set_rate: {
        action: string;
        rate: Rate;
      };
    }
  | {
      remove_rate: {
        action: string;
      };
    };
export type Rate =
  | {
      local: LocalRate;
    }
  | {
      contract: AndrAddr;
    };
export type LocalRateType = "additive" | "deductive";
export type LocalRateValue =
  | {
      percent: PercentRate;
    }
  | {
      flat: Coin;
    };
export type Decimal = string;
export interface MintMsg {
  owner: AndrAddr;
  token_id: string;
  token_uri?: string | null;
}
export interface TransferAgreement {
  amount: Coin;
  purchaser: string;
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface BatchSendMsg {
  contract_addr: AndrAddr;
  msg: Binary;
  token_id: string;
}
export interface AMPPkt {
  ctx: AMPCtx;
  messages: AMPMsg[];
}
export interface AMPCtx {
  id?: string | null;
  origin: string;
  origin_username?: AndrAddr | null;
  previous_hops?: CrossChainHop[];
  previous_sender: string;
}
export interface CrossChainHop {
  address: string;
  channel: string;
  from_chain: string;
  funds: Coin[];
  to_chain: string;
  username?: AndrAddr | null;
}
export interface AMPMsg {
  config: AMPMsgConfig;
  funds: Coin[];
  message: Binary;
  recipient: AndrAddr;
}
export interface AMPMsgConfig {
  direct: boolean;
  exit_at_error: boolean;
  gas_limit?: number | null;
  ibc_config?: IBCConfig | null;
  reply_on: ReplyOn;
}
export interface IBCConfig {
  recovery_addr?: AndrAddr | null;
}
export interface LocalRate {
  description?: string | null;
  rate_type: LocalRateType;
  recipient: Recipient;
  value: LocalRateValue;
}
export interface Recipient {
  address: AndrAddr;
  ibc_recovery_address?: AndrAddr | null;
  msg?: Binary | null;
}
export interface PercentRate {
  percent: Decimal;
}
export type QueryMsg =
  | {
      owner_of: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      all_operators: {
        include_expired?: boolean | null;
        limit?: number | null;
        owner: string;
        start_after?: string | null;
      };
    }
  | {
      num_tokens: {};
    }
  | {
      nft_info: {
        token_id: string;
      };
    }
  | {
      all_nft_info: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      tokens: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
      };
    }
  | {
      all_tokens: {
        limit?: number | null;
        start_after?: string | null;
      };
    }
  | {
      is_archived: {
        token_id: string;
      };
    }
  | {
      transfer_agreement: {
        token_id: string;
      };
    }
  | {
      contract_info: {};
    }
  | {
      minter: {};
    }
  | {
      approval: {
        include_expired?: boolean | null;
        spender: string;
        token_id: string;
      };
    }
  | {
      approvals: {
        include_expired?: boolean | null;
        token_id: string;
      };
    }
  | {
      owner: {};
    }
  | {
      ownership_request: {};
    }
  | {
      type: {};
    }
  | {
      kernel_address: {};
    }
  | {
      app_contract: {};
    }
  | {
      original_publisher: {};
    }
  | {
      block_height_upon_creation: {};
    }
  | {
      version: {};
    }
  | {
      a_d_o_base_version: {};
    }
  | {
      permissions: {
        actor: string;
        limit?: number | null;
        start_after?: string | null;
      };
    }
  | {
      permissioned_actions: {};
    }
  | {
      rates: {
        action: string;
      };
    }
  | {
      all_rates: {};
    };
export interface ADOBaseVersionResponse {
  version: string;
}
export interface AllNftInfoResponse {
  access: OwnerOfResponse;
  info: NftInfoResponse;
}
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
}
export interface Approval {
  expires: Expiration;
  spender: Addr;
}
export interface NftInfoResponse {
  token_uri?: string | null;
}
export interface OperatorsResponse {
  operators: Approval[];
}
export interface AllRatesResponse {
  all_rates: [string, Rate][];
}
export interface TokensResponse {
  tokens: string[];
}
export interface AppContractResponse {
  app_contract: Addr;
}
export interface ApprovalResponse {
  approval: Approval;
}
export interface ApprovalsResponse {
  approvals: Approval[];
}
export interface BlockHeightResponse {
  block_height: number;
}
export interface CollectionInfo {
  name: string;
  symbol: string;
  updated_at: Timestamp;
}
export interface IsArchivedResponse {
  is_archived: boolean;
}
export interface KernelAddressResponse {
  kernel_address: Addr;
}
export interface MinterResponse {
  minter?: string | null;
}
export interface NumTokensResponse {
  count: number;
}
export interface PublisherResponse {
  original_publisher: string;
}
export interface ContractOwnerResponse {
  owner: string;
}
export interface ContractPotentialOwnerResponse {
  expiration?: Milliseconds | null;
  potential_owner?: Addr | null;
}
export interface PermissionedActionsResponse {
  actions: string[];
}
export interface PermissionInfo {
  action: string;
  actor: string;
  permission: Permission;
}
export type NullableRate = Rate | null;
export type NullableTransferAgreement = TransferAgreement | null;
export interface TypeResponse {
  ado_type: string;
}
export interface VersionResponse {
  version: string;
}
export type Cw721ContractTsExecuteMsg = ExecuteMsg;
