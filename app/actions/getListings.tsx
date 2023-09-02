import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
      const listings = await prisma.listing.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });

      // const safeListings = listings.map((listing) => ({
      //   ...listings,
      //   createdAt: listing.createdAt.toISOString(),
      // }));

      // return safeListings;
      return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}