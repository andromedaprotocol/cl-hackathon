/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import {
  PrimitiveRestriction,
  InstantiateMsg,
  ExecuteMsg,
  Primitive,
  Uint128,
  Decimal,
  Addr,
  Binary,
  AndrAddr,
  ReplyOn,
  OwnershipMessage,
  Expiry,
  Milliseconds,
  PermissioningMessage,
  Permission,
  LocalPermission,
  RatesMessage,
  Rate,
  LocalRateType,
  LocalRateValue,
  Coin,
  AMPPkt,
  AMPCtx,
  CrossChainHop,
  AMPMsg,
  AMPMsgConfig,
  IBCConfig,
  LocalRate,
  Recipient,
  PercentRate,
  QueryMsg,
  ADOBaseVersionResponse,
  ArrayOfString,
  AllRatesResponse,
  AppContractResponse,
  BlockHeightResponse,
  GetTypeResponse,
  GetValueResponse,
  KernelAddressResponse,
  PublisherResponse,
  ContractOwnerResponse,
  ContractPotentialOwnerResponse,
  PermissionedActionsResponse,
  PermissionInfo,
  NullableRate,
  TypeResponse,
  VersionResponse,
} from "./PrimitiveContractTs.types";
import { CamelCasedProperties } from "type-fest";
export abstract class PrimitiveContractTsExecuteMsgBuilder {
  static setValue = ({
    key,
    value,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        set_value: unknown;
      }
    >["set_value"]
  >): ExecuteMsg => {
    return {
      set_value: {
        key,
        value,
      } as const,
    };
  };
  static deleteValue = ({
    key,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        delete_value: unknown;
      }
    >["delete_value"]
  >): ExecuteMsg => {
    return {
      delete_value: {
        key,
      } as const,
    };
  };
  static updateRestriction = ({
    restriction,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_restriction: unknown;
      }
    >["update_restriction"]
  >): ExecuteMsg => {
    return {
      update_restriction: {
        restriction,
      } as const,
    };
  };
  static ampReceive = ({
    ctx,
    messages,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        amp_receive: unknown;
      }
    >["amp_receive"]
  >): ExecuteMsg => {
    return {
      amp_receive: {
        ctx,
        messages,
      } as const,
    };
  };
  static ownership = (ownershipMessage: OwnershipMessage): ExecuteMsg => {
    return {
      ownership: ownershipMessage,
    };
  };
  static updateKernelAddress = ({
    address,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_kernel_address: unknown;
      }
    >["update_kernel_address"]
  >): ExecuteMsg => {
    return {
      update_kernel_address: {
        address,
      } as const,
    };
  };
  static updateAppContract = ({
    address,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_app_contract: unknown;
      }
    >["update_app_contract"]
  >): ExecuteMsg => {
    return {
      update_app_contract: {
        address,
      } as const,
    };
  };
  static permissioning = (
    permissioningMessage: PermissioningMessage,
  ): ExecuteMsg => {
    return {
      permissioning: permissioningMessage,
    };
  };
  static rates = (ratesMessage: RatesMessage): ExecuteMsg => {
    return {
      rates: ratesMessage,
    };
  };
}
export abstract class PrimitiveContractTsQueryMsgBuilder {
  static getValue = ({
    key,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        get_value: unknown;
      }
    >["get_value"]
  >): QueryMsg => {
    return {
      get_value: {
        key,
      } as const,
    };
  };
  static getType = ({
    key,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        get_type: unknown;
      }
    >["get_type"]
  >): QueryMsg => {
    return {
      get_type: {
        key,
      } as const,
    };
  };
  static allKeys = (): QueryMsg => {
    return {
      all_keys: {} as const,
    };
  };
  static ownerKeys = ({
    owner,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        owner_keys: unknown;
      }
    >["owner_keys"]
  >): QueryMsg => {
    return {
      owner_keys: {
        owner,
      } as const,
    };
  };
  static owner = (): QueryMsg => {
    return {
      owner: {} as const,
    };
  };
  static ownershipRequest = (): QueryMsg => {
    return {
      ownership_request: {} as const,
    };
  };
  static type = (): QueryMsg => {
    return {
      type: {} as const,
    };
  };
  static kernelAddress = (): QueryMsg => {
    return {
      kernel_address: {} as const,
    };
  };
  static appContract = (): QueryMsg => {
    return {
      app_contract: {} as const,
    };
  };
  static originalPublisher = (): QueryMsg => {
    return {
      original_publisher: {} as const,
    };
  };
  static blockHeightUponCreation = (): QueryMsg => {
    return {
      block_height_upon_creation: {} as const,
    };
  };
  static version = (): QueryMsg => {
    return {
      version: {} as const,
    };
  };
  static aDOBaseVersion = (): QueryMsg => {
    return {
      a_d_o_base_version: {} as const,
    };
  };
  static permissions = ({
    actor,
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        permissions: unknown;
      }
    >["permissions"]
  >): QueryMsg => {
    return {
      permissions: {
        actor,
        limit,
        start_after: startAfter,
      } as const,
    };
  };
  static permissionedActions = (): QueryMsg => {
    return {
      permissioned_actions: {} as const,
    };
  };
  static rates = ({
    action,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        rates: unknown;
      }
    >["rates"]
  >): QueryMsg => {
    return {
      rates: {
        action,
      } as const,
    };
  };
  static allRates = (): QueryMsg => {
    return {
      all_rates: {} as const,
    };
  };
}
