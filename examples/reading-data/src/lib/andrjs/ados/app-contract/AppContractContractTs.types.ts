/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type ComponentType =
  | {
      new: Binary;
    }
  | {
      symlink: AndrAddr;
    };
export type Binary = string;
export type AndrAddr = string;
export interface InstantiateMsg {
  app_components: AppComponent[];
  chain_info?: ChainInfo[] | null;
  kernel_address: string;
  name: string;
  owner?: string | null;
}
export interface AppComponent {
  ado_type: string;
  component_type: ComponentType;
  name: string;
}
export interface ChainInfo {
  chain_name: string;
  owner: string;
}
export type ExecuteMsg =
  | {
      add_app_component: {
        component: AppComponent;
      };
    }
  | {
      claim_ownership: {
        name?: string | null;
        new_owner?: AndrAddr | null;
      };
    }
  | {
      proxy_message: {
        msg: Binary;
        name: string;
      };
    }
  | {
      update_address: {
        addr: string;
        name: string;
      };
    }
  | {
      assign_app_to_components: {};
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
    };
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
export type QueryMsg =
  | {
      get_address: {
        name: string;
      };
    }
  | {
      get_components: {};
    }
  | {
      component_exists: {
        name: string;
      };
    }
  | {
      get_addresses_with_names: {};
    }
  | {
      config: {};
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
    };
export interface ADOBaseVersionResponse {
  version: string;
}
export interface AppContractResponse {
  app_contract: Addr;
}
export interface BlockHeightResponse {
  block_height: number;
}
export interface ComponentExistsResponse {
  component_exists: boolean;
}
export interface ConfigResponse {
  name: string;
  owner: string;
}
export type String = string;
export interface GetAddressesWithNamesResponse {
  addresses: ComponentAddress[];
}
export interface ComponentAddress {
  address: string;
  name: string;
}
export interface GetComponentsResponse {
  components: AppComponent[];
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
export interface TypeResponse {
  ado_type: string;
}
export interface VersionResponse {
  version: string;
}
export type AppContractContractTsExecuteMsg = ExecuteMsg;
