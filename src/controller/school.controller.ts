import { School } from "../../generated/prisma";
import { catchAsync } from "../utils/catchAsync";
import { prisma } from "../utils/prismaClient";
import response from "../utils/response";

export class schoolController {
  static createSchool = catchAsync(async (req, res, _next) => {
    const data = await prisma.school.create({
      data: req.body,
    });
    response(res, data, 201);
  });
  static listSchool = catchAsync(async (req, res, _next) => {
    const {
      limit = 10,
      offset = 0,
      userLat,
      userLng,
      orderBy = "distance",
      sortOrder = "asc",
    } = req.query;

    const query = `
  SELECT id, name,address,  latitude, longitude,
  (6371 * acos(
      cos(radians(${userLat})) *
      cos(radians(latitude)) *
      cos(radians(longitude) - radians(${userLng})) +
      sin(radians(${userLat})) *
      sin(radians(latitude))
  )) AS distance
  FROM "School"
  ORDER BY ${orderBy} ${sortOrder}
  LIMIT ${limit} OFFSET ${offset}
`;
    const data: School = await prisma.$queryRawUnsafe(query);
    const total = await prisma.school.count();
    response(res, data, 200, {
      otherFields: { limit: Number(limit), offset: Number(offset), total },
    });
  });
}
