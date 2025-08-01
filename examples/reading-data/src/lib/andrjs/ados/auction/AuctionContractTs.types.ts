/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type AndrAddr = string;
export interface InstantiateMsg {
  authorized_cw20_addresses?: AndrAddr[] | null;
  authorized_token_addresses?: AndrAddr[] | null;
  kernel_address: string;
  owner?: string | null;
}
export type ExecuteMsg =
  | {
      receive_nft: Cw721ReceiveMsg;
    }
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      place_bid: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      buy_now: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      claim: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      update_auction: {
        buy_now_price?: Uint128 | null;
        coin_denom: Asset;
        min_bid?: Uint128 | null;
        min_raise?: Uint128 | null;
        recipient?: Recipient | null;
        schedule?: Schedule | null;
        token_address: string;
        token_id: string;
        whitelist?: Addr[] | null;
      };
    }
  | {
      cancel_auction: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      authorize_contract: {
        action: PermissionAction;
        addr: AndrAddr;
        expiration?: Expiry | null;
      };
    }
  | {
      deauthorize_contract: {
        action: PermissionAction;
        addr: AndrAddr;
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
export type Uint128 = string;
export type Asset =
  | {
      cw20_token: AndrAddr;
    }
  | {
      native_token: string;
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
export type PermissionAction = "send_cw20" | "send_nft";
export type ReplyOn = "always" | "error" | "success" | "never";
export type OwnershipMessage =
  | ("revoke_ownership_offer" | "accept_ownership" | "disown")
  | {
      update_owner: {
        expiration?: Expiry | null;
        new_owner: Addr;
      };
    };
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
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface Recipient {
  address: AndrAddr;
  ibc_recovery_address?: AndrAddr | null;
  msg?: Binary | null;
}
export interface Schedule {
  end?: Expiry | null;
  start?: Expiry | null;
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
export interface Coin {
  amount: Uint128;
  denom: string;
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
export interface PercentRate {
  percent: Decimal;
}
export type QueryMsg =
  | {
      latest_auction_state: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      auction_state: {
        auction_id: Uint128;
      };
    }
  | {
      auction_ids: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      auction_infos_for_address: {
        limit?: number | null;
        start_after?: string | null;
        token_address: string;
      };
    }
  | {
      authorized_addresses: {
        action: PermissionAction;
        limit?: number | null;
        order_by?: OrderBy | null;
        start_after?: string | null;
      };
    }
  | {
      bids: {
        auction_id: Uint128;
        limit?: number | null;
        order_by?: OrderBy | null;
        start_after?: number | null;
      };
    }
  | {
      is_cancelled: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      is_closed: {
        token_address: string;
        token_id: string;
      };
    }
  | {
      is_claimed: {
        token_address: string;
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
export type OrderBy = "asc" | "desc";
export interface ADOBaseVersionResponse {
  version: string;
}
export interface AllRatesResponse {
  all_rates: [string, Rate][];
}
export interface AppContractResponse {
  app_contract: Addr;
}
export interface AuctionIdsResponse {
  auction_ids: Uint128[];
}
export interface AuctionInfo {
  auction_ids: Uint128[];
  token_address: string;
  token_id: string;
}
export interface AuctionStateResponse {
  auction_id: Uint128;
  coin_denom: string;
  end_time: Milliseconds;
  high_bidder_addr: string;
  high_bidder_amount: Uint128;
  is_cancelled: boolean;
  min_bid?: Uint128 | null;
  min_raise?: Uint128 | null;
  owner: string;
  recipient?: Recipient | null;
  start_time: Milliseconds;
  uses_cw20: boolean;
  whitelist?: Addr[] | null;
}
export interface AuthorizedAddressesResponse {
  addresses: string[];
}
export interface BidsResponse {
  bids: Bid[];
}
export interface Bid {
  amount: Uint128;
  bidder: string;
  timestamp: Milliseconds;
}
export interface BlockHeightResponse {
  block_height: number;
}
export interface IsCancelledResponse {
  is_cancelled: boolean;
}
export interface IsClaimedResponse {
  is_claimed: boolean;
}
export interface IsClosedResponse {
  is_closed: boolean;
}
export interface KernelAddressResponse {
  kernel_address: Addr;
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
export interface TypeResponse {
  ado_type: string;
}
export interface VersionResponse {
  version: string;
}
export type AuctionContractTsExecuteMsg = ExecuteMsg;
