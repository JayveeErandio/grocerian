export function sentence_case(text) {
  return text
    ?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function date_format(timestamp) {
  const main = new Date(timestamp);

  let result = "";

  result += main.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  result += " | ";

  result += main.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  result = result.slice(0, -2) + result.slice(-2).toLowerCase();

  return result;
}

export function money_format(value) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value).slice(1);
}

export function including(basis, target) {
  return target.toLowerCase().includes(basis.toLowerCase().trim());
}
