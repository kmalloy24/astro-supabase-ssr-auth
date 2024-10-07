import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  //   console.log(context);
  return next();
});
