import {z} from "zod";
const validSubmit  = z.object({
    name: z.string(),
    phone: z.number(),
    email: z.string().email(),
    department: z.string(),
    year: z.string(),
    events: z.array(z.string())
})
export {validSubmit};