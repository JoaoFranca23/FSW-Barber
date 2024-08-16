"use server"

import { db } from "../_lib/prisma"

interface createBookingParams {
  serviceId: string
  userId: string
  date: Date
}

const createBooking = async (params: createBookingParams) => {
  await db.booking.create({
    data: params,
  })
}

export default createBooking
