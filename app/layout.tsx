import '../styles/globals.css'
import { SessionProvider } from './SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from './Login'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html>
      <head />
      <body>

        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (


            <div className='bg-[#454545] min-h-screen'>
              {children}
            </div>
          )}
        </SessionProvider>

     
      </body>
    </html>
  )
}
