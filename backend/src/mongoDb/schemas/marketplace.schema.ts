import mongoose from "mongoose";

const nftSchema = new mongoose.Schema({
  tokenId: { type: String, required: true },
  seller: { type: String, lowercase: true },
  username: String,
  owner: { type: String,lowercase: true },
  name: String,
  description: String,
  image: String,
  price: String,
  supply: String,
  remainingSupply: Number,
  isListed: Boolean,
  saleType: Number,
  auctionStartTime: Number,
  auctionEndTime: Number,
  highestBidder: String,
  highestBid: String,
  claimed: Boolean,
  tokenURI: String,
  updatedAt: { type: Date, default: Date.now },
});
nftSchema.index({ tokenId: 1, seller: 1 }, { unique: true });
nftSchema.index({ owner: 1 });
nftSchema.index({ seller: 1, isListed: 1 });

export const NFT = mongoose.model("Nfts", nftSchema);

