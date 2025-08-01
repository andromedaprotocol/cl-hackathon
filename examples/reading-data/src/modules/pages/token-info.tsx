"use client";

import React from "react";
import GridBackground from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { CONTRACT_CONFIG } from "@/config/contracts";
import useGetCW20 from "@/lib/andrjs/hooks/ado/cw20/useGetCw20";
import useGetCw20MarketingInfo from "@/lib/andrjs/hooks/ado/cw20/useGetCw20MarketingInfo";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const TokenInfoPage: React.FC<Props> = () => {
  // Fetch token info
  const { data: tokenInfo, loading: tokenLoading, error: tokenError } = 
    useGetCW20(CONTRACT_CONFIG.token);
  
  // Fetch marketing info
  const { data: marketingInfo, loading: marketingLoading, error: marketingError } = 
    useGetCw20MarketingInfo(CONTRACT_CONFIG.token);

  const isLoading = tokenLoading || marketingLoading;
  const hasError = tokenError || marketingError;

  // Format supply with proper decimals
  const formatSupply = (amount: string, decimals: number) => {
    const divisor = Math.pow(10, decimals);
    const value = Number(amount) / divisor;
    return value.toLocaleString(undefined, { maximumFractionDigits: decimals });
  };

  return (
    <GridBackground>
      <div className="flex flex-col min-h-screen p-8">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              ← Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Token Information</h1>
          
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-lg">Loading token data...</p>
            </div>
          ) : hasError ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <p className="text-red-400">
                Error loading token data. Please check the contract address in the config file.
              </p>
              <p className="text-sm mt-2 text-gray-400">
                Contract: {CONTRACT_CONFIG.token}
              </p>
            </div>
          ) : (
            <>
              {/* Token Basic Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Token Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Name</p>
                      <p className="text-xl font-medium">{tokenInfo?.name || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Symbol</p>
                      <p className="text-xl font-medium">{tokenInfo?.symbol || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Decimals</p>
                      <p className="text-xl font-medium">{tokenInfo?.decimals || 0}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Total Supply</p>
                      <p className="text-xl font-medium">
                        {tokenInfo ? formatSupply(tokenInfo.total_supply, tokenInfo.decimals) : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Contract Address</p>
                      <p className="text-sm font-mono bg-black/20 p-2 rounded break-all">
                        {CONTRACT_CONFIG.token}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Info */}
              {marketingInfo && (
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Marketing Information</h2>
                  <div className="space-y-4">
                    {marketingInfo.project && (
                      <div>
                        <p className="text-gray-400 text-sm">Project</p>
                        <p className="text-lg">{marketingInfo.project}</p>
                      </div>
                    )}
                    {marketingInfo.description && (
                      <div>
                        <p className="text-gray-400 text-sm">Description</p>
                        <p className="text-base">{marketingInfo.description}</p>
                      </div>
                    )}
                    {marketingInfo.marketing && (
                      <div>
                        <p className="text-gray-400 text-sm">Marketing Address</p>
                        <p className="text-sm font-mono bg-black/20 p-2 rounded break-all">
                          {marketingInfo.marketing}
                        </p>
                      </div>
                    )}
                    {marketingInfo.logo && (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Logo</p>
                        {typeof marketingInfo.logo === 'object' && 'url' in marketingInfo.logo && (
                          <div className="relative w-32 h-32">
                            <Image 
                              src={marketingInfo.logo.url} 
                              alt={`${tokenInfo?.name} logo`}
                              fill
                              className="object-contain rounded"
                            />
                          </div>
                        )}
                        {marketingInfo.logo === 'embedded' && (
                          <p className="text-sm text-gray-400">Logo is embedded in contract</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Additional Token Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Token Standard</p>
                      <p className="font-medium">CW20</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Blockchain</p>
                      <p className="font-medium">Andromeda Protocol</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-black/20 rounded">
                    <p className="text-sm text-gray-400 mb-2">Raw Token Info</p>
                    <pre className="text-xs overflow-x-auto">
                      {JSON.stringify(tokenInfo, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </GridBackground>
  );
};

export default TokenInfoPage;