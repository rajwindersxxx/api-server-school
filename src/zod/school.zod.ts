import z from "zod";

export const createSchool = {
  bodySchema: z
    .object({
      name: z.string().max(100),
      address: z.string().max(500),
      latitude: z.coerce
        .number()
        .min(-90)
        .max(90, "Latitude must be between -90 and 90"),
      longitude: z.coerce
        .number()
        .min(-180)
        .max(180, "Longitude must be between -180 and 180"),
    })
    .strict(),
};
const allowedColumns = [
  "id",
  "name",
  "latitude",
  "longitude",
  "distance",
] as const;
const allowedSortOrders = ["asc", "desc"] as const;
export const getSchoolData = {
  querySchema: z.object({
    limit: z.coerce.number().int().min(1).max(100).optional(),
    offset: z.coerce.number().int().min(0).optional(),
    userLat: z.coerce
      .number({ required_error: "userLat is required" })
      .min(-90)
      .max(90, "Latitude must be between -90 and 90"),
    userLng: z.coerce
      .number({ required_error: "userLng is required" })
      .min(-180)
      .max(180, "Longitude must be between -180 and 180"),
    orderBy: z.enum(allowedColumns).default("distance"),
    sortOrder: z.enum(allowedSortOrders).default("asc"),
  }),
};
// Allowed values
