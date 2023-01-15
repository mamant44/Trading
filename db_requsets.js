const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        // process.exit(1)
    })

async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user?.findMany()
    const allOrders = await prisma.order?.findMany()
    const allPlatforms = await prisma.platform?.findMany()
    console.log({allUsers, allOrders, allPlatforms})
}

const getUserById = async ({ id } ) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    } catch(e) {
        console.log(e)
    }
}

const createPlatform = async (data) => {
    const { name } = data
    try {
        const platform = await prisma.platform.create({
            data: { name }
        })
        return platform
    } catch(e) {
        console.log(e)
    }
}

const USER_DATA = {
    apiKey: "b0oAIiuWAvLDfEAB1eAEWZ8AyBNnwagYBZK2GpirX8Ao0NNzZg9Z599pDiMlJKEd",
    email: "a.halashevskyi@gmail.com",
    password: "Solemio1969",
    name: "andrew",
    profileName: "andrew_spot",
    secretKey: "UNWbaI6H9OonPbGcrU6EAUOD02zBTxpJllo4E2iKjm9PjLGqqvzRsMUck387IoMy",
    platformId: "3243f2bf-44de-4584-be64-a58ab924ef03"
}

const createUserWithProfile = async (data) => {
    const { apiKey, email, password, name, profileName, secretKey, platformId } = data
    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password,
                profiles: {
                    create: {
                        apiKey,
                        profileName,
                        secretKey,
                        platformId
                    }
                }
            }
        })
        return user
    } catch(e) {
        console.log(e)
    }
}

// createPlatform({ name: "binance" })
// createUserWithProfile(USER_DATA)