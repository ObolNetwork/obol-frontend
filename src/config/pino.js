import pino from "pino"

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  prettyPrint:
    process.env.NODE_ENV !== "production" ||
    process.env.LOG_PRETTY_PRINT === "true",
})
