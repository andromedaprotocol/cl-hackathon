/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import {
  AndrAddr,
  InstantiateMsg,
  ExecuteMsg,
  Asset,
  Binary,
  Decimal256,
  Expiry,
  Milliseconds,
  Uint128,
  ReplyOn,
  OwnershipMessage,
  Addr,
  PermissioningMessage,
  Permission,
  LocalPermission,
  Recipient,
  Schedule,
  Cw20ReceiveMsg,
  AMPPkt,
  AMPCtx,
  CrossChainHop,
  Coin,
  AMPMsg,
  AMPMsgConfig,
  IBCConfig,
  QueryMsg,
  ADOBaseVersionResponse,
  AppContractResponse,
  BlockHeightResponse,
  KernelAddressResponse,
  PublisherResponse,
  ContractOwnerResponse,
  ContractPotentialOwnerResponse,
  PermissionedActionsResponse,
  PermissionInfo,
  RedeemResponse,
  Redeem,
  SaleResponse,
  Sale,
  SaleAssetsResponse,
  TokenAddressResponse,
  TypeResponse,
  VersionResponse,
} from "./ExchangeContractTs.types";
import { CamelCasedProperties } from "type-fest";
export abstract class ExchangeContractTsExecuteMsgBuilder {
  static cancelSale = ({
    asset,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        cancel_sale: unknown;
      }
    >["cancel_sale"]
  >): ExecuteMsg => {
    return {
      cancel_sale: {
        asset,
      } as const,
    };
  };
  static cancelRedeem = ({
    asset,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        cancel_redeem: unknown;
      }
    >["cancel_redeem"]
  >): ExecuteMsg => {
    return {
      cancel_redeem: {
        asset,
      } as const,
    };
  };
  static purchase = ({
    recipient,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        purchase: unknown;
      }
    >["purchase"]
  >): ExecuteMsg => {
    return {
      purchase: {
        recipient,
      } as const,
    };
  };
  static startRedeem = ({
    exchangeRate,
    recipient,
    redeemAsset,
    schedule,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        start_redeem: unknown;
      }
    >["start_redeem"]
  >): ExecuteMsg => {
    return {
      start_redeem: {
        exchange_rate: exchangeRate,
        recipient,
        redeem_asset: redeemAsset,
        schedule,
      } as const,
    };
  };
  static replenishRedeem = ({
    redeemAsset,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        replenish_redeem: unknown;
      }
    >["replenish_redeem"]
  >): ExecuteMsg => {
    return {
      replenish_redeem: {
        redeem_asset: redeemAsset,
      } as const,
    };
  };
  static redeem = ({
    recipient,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        redeem: unknown;
      }
    >["redeem"]
  >): ExecuteMsg => {
    return {
      redeem: {
        recipient,
      } as const,
    };
  };
  static receive = ({
    amount,
    msg,
    sender,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        receive: unknown;
      }
    >["receive"]
  >): ExecuteMsg => {
    return {
      receive: {
        amount,
        msg,
        sender,
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
}
export abstract class ExchangeContractTsQueryMsgBuilder {
  static sale = ({
    asset,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        sale: unknown;
      }
    >["sale"]
  >): QueryMsg => {
    return {
      sale: {
        asset,
      } as const,
    };
  };
  static redeem = ({
    asset,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        redeem: unknown;
      }
    >["redeem"]
  >): QueryMsg => {
    return {
      redeem: {
        asset,
      } as const,
    };
  };
  static tokenAddress = (): QueryMsg => {
    return {
      token_address: {} as const,
    };
  };
  static saleAssets = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        sale_assets: unknown;
      }
    >["sale_assets"]
  >): QueryMsg => {
    return {
      sale_assets: {
        limit,
        start_after: startAfter,
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
}
