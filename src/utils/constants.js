export const IS_PRODUCTION = process.env.GATSBY_ACTIVE_ENV === "production"

export const ORIENTATION = {
  ROW: "row",
  COLUMN: "column",
}

export const ORDER_OPTIONS = {
  NEWEST: { title: "Newest", value: "newest" },
  OLDEST: { title: "Oldest", value: "oldest" },
  // HIGHEST_PRICE: { title: "Highest Price", value: "highest-price" },
  // LOWEST_PRICE: { title: "Lowest Price", value: "lowest-price" },
}
