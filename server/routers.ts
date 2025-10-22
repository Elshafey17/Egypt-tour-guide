import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getAllGovernorate, getGovernorateById, getTouristPlacesByGovernorate, getAllTouristPlaces, getTouristPlaceById } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  governorates: router({
    list: publicProcedure.query(async () => {
      return await getAllGovernorate();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await getGovernorateById(input.id);
      }),
  }),

  touristPlaces: router({
    listAll: publicProcedure.query(async () => {
      return await getAllTouristPlaces();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await getTouristPlaceById(input.id);
      }),
    getByGovernorate: publicProcedure
      .input(z.object({ governorateId: z.number() }))
      .query(async ({ input }) => {
        return await getTouristPlacesByGovernorate(input.governorateId);
      }),
  }),
});

export type AppRouter = typeof appRouter;

