import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID || '637439012730-nmu0ltj9eqgpevokagpqiisksmq1c1g9.apps.googleusercontent.com' as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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' as string,
        })
    ],
    secret: process.env.JWT_SECRET as string,
    
}

export default nextAuth(authOptions);