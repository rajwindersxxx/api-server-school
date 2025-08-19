import { prisma } from "../src/utils/prismaClient";
import { faker } from "@faker-js/faker";
type SchoolData = {
  name: string;
  latitude: number;
  longitude: number;
  address: string;
};

// * run main script
export class seedData {
  static async seedFakeData() {
    await prisma.school.createMany({
      data: this.getData(),
    });
  }
  static async clearData() {
    await prisma.school.deleteMany();
  }
  static getData(): SchoolData[] {
    const data: SchoolData[] = [];
    for (let i = 1; i <= 50; i++) {
      data.push({
        name: faker.company.name() + " School",
        latitude: faker.location.latitude(), 
        longitude: faker.location.longitude(),
        address: faker.location.streetAddress(),
      });
    }
    return data;
  }
}
async function main() {
  await seedData.clearData();
  return seedData.seedFakeData();
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
