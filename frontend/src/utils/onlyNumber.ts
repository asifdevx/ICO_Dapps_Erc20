export const OnlyNumber = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: (state: string) => void,
  limit?: number // We can keep limit for future use, but the logic below is hardcoded to 5/5
) => {
  let input = e.target.value;

  // Allow only digits and dots
  input = input.replace(/[^0-9.]/g, "");

  // Prevent more than one dot
  const dotCount = (input.match(/\./g) || []).length;
  if (dotCount > 1) return; // stops typing a second dot

  // Prevent starting with a dot
  if (input.startsWith(".")) return;

  // Split parts
  const [beforeDot, afterDot = ""] = input.split(".");

  // Limit digits
  const limitedBefore = beforeDot.slice(0, limit);
  const limitedAfter = afterDot.slice(0, limit);

  // Rebuild clean string
  const newValue =
    input.includes(".") ? `${limitedBefore}.${limitedAfter}` : limitedBefore;

    setState(newValue)
}