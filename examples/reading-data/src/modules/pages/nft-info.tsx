"use client";

import React, { useState } from "react";
import GridBackground from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { CONTRACT_CONFIG } from "@/config/contracts";
import useGetCw721 from "@/lib/andrjs/hooks/ado/cw721/useGetCw721";
import useGetTokens from "@/lib/andrjs/hooks/ado/cw721/useGetTokens";
import useGetToken from "@/lib/andrjs/hooks/ado/cw721/useGetToken";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const NFTInfoPage: React.FC<Props> = () => {
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null);
  
  // Fetch NFT collection info
  const { data: collectionInfo, loading: collectionLoading, error: collectionError } = 
    useGetCw721(CONTRACT_CONFIG.nft);
  
  // Fetch all token IDs
  const { data: tokenIds, loading: tokensLoading, error: tokensError } = 
    useGetTokens(CONTRACT_CONFIG.nft);
  
  // Fetch individual token info when selected
  const { data: tokenInfo, loading: tokenLoading, error: tokenError } = 
    useGetToken(
      CONTRACT_CONFIG.nft, 
      selectedTokenId || ""
    );

  const isLoading = collectionLoading || tokensLoading;
  const hasError = collectionError || tokensError;

  return (
    <GridBackground>
      <div className="flex flex-col min-h-screen p-8">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              ← Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">NFT Collection Info</h1>
          
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-lg">Loading NFT collection data...</p>
            </div>
          ) : hasError ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <p className="text-red-400">
                Error loading NFT data. Please check the contract address in the config file.
              </p>
              <p className="text-sm mt-2 text-gray-400">
                Contract: {CONTRACT_CONFIG.nft}
              </p>
            </div>
          ) : (
            <>
              {/* Collection Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Collection Details</h2>
                <div className="space-y-2">
                  <p><span className="text-gray-400">Name:</span> {collectionInfo?.name || "N/A"}</p>
                  <p><span className="text-gray-400">Symbol:</span> {collectionInfo?.symbol || "N/A"}</p>
                  <p><span className="text-gray-400">Contract:</span> <code className="text-sm">{CONTRACT_CONFIG.nft}</code></p>
                </div>
              </div>

              {/* Token List */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Tokens in Collection</h2>
                {tokenIds && tokenIds.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {tokenIds.slice(0, 20).map((tokenId: string) => (
                      <Button
                        key={tokenId}
                        variant={selectedTokenId === tokenId ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTokenId(tokenId)}
                        className="w-full"
                      >
                        Token #{tokenId}
                      </Button>
                    ))}
                    {tokenIds.length > 20 && (
                      <p className="col-span-full text-sm text-gray-400 mt-2">
                        ...and {tokenIds.length - 20} more tokens
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-400">No tokens found in this collection</p>
                )}
              </div>

              {/* Selected Token Info */}
              {selectedTokenId && (
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Token Details</h2>
                  {tokenLoading ? (
                    <p>Loading token info...</p>
                  ) : tokenError ? (
                    <p className="text-red-400">Error loading token details</p>
                  ) : tokenInfo ? (
                    <div className="space-y-4">
                      <div>
                        <p><span className="text-gray-400">Token ID:</span> {selectedTokenId}</p>
                        {tokenInfo.token_uri && (
                          <p><span className="text-gray-400">Token URI:</span> <code className="text-xs break-all">{tokenInfo.token_uri}</code></p>
                        )}
                      </div>
                      
                      {tokenInfo.metadata && (
                        <div>
                          <h3 className="font-semibold mb-2">Metadata</h3>
                          <div className="bg-black/20 rounded p-4">
                            {tokenInfo.metadata.image && (
                              <div className="relative w-full max-w-xs h-64 mb-4">
                                <Image 
                                  src={tokenInfo.metadata.image} 
                                  alt={tokenInfo.metadata.name || `Token ${selectedTokenId}`}
                                  fill
                                  className="object-contain rounded"
                                />
                              </div>
                            )}
                            {tokenInfo.metadata.name && (
                              <p><span className="text-gray-400">Name:</span> {tokenInfo.metadata.name}</p>
                            )}
                            {tokenInfo.metadata.description && (
                              <p className="mt-2"><span className="text-gray-400">Description:</span> {tokenInfo.metadata.description}</p>
                            )}
                            {tokenInfo.metadata.attributes && (
                              <div className="mt-4">
                                <p className="text-gray-400 mb-2">Attributes:</p>
                                <div className="grid grid-cols-2 gap-2">
                                  {tokenInfo.metadata.attributes.map((attr: any, idx: number) => (
                                    <div key={idx} className="bg-white/5 rounded p-2">
                                      <p className="text-xs text-gray-400">{attr.trait_type}</p>
                                      <p className="font-semibold">{attr.value}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </GridBackground>
  );
};

export default NFTInfoPage;