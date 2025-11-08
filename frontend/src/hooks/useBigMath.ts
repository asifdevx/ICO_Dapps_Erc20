import { useMemo } from "react";
import { parseEther, formatEther } from "ethers";

/**
 * useBigMath — simple ethers-based math for big token values
 *
 * Works with bigint-safe ether math for sum, multiply, divide, subtract.
 * Returns human-readable string formatted in ETH units.
 */
 export const useBigMath = (
  num1: string | undefined,
  num2: string | undefined,
  operation: "sum" | "subtract" | "multiply" | "divide" = "sum"
) => {
  const result = useMemo(() => {
    try {
      const a = parseEther(num1 || "0");
      const b = parseEther(num2 || "0");

      let total: bigint;

      switch (operation) {
        case "sum":
          total = a + b;
          break;
        case "subtract":
          total = a - b;
          break;
        case "multiply":
          total = (a * b) / parseEther("1");
          break;
        case "divide":
          total = (a * parseEther("1")) / (b === 0n ? 1n : b);
          break;
        default:
          total = 0n;
      }

      return formatEther(total);
    } catch (err) {
      console.error("useBigMath error:", err);
      return "0";
    }
  }, [num1, num2, operation]);

  return Number(result);
};

