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

  return result;
}
