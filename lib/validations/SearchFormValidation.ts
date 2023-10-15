import * as z from 'zod'

export const SearchFormValidation = z.object({
    city: z.string(),
    propertyType: z.string(),
    rooms: z.number()
})