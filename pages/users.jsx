import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Profile from '@/components/profile'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className='flex w-full justify-center bg-white'>
      {!session ? (
        <div className='w-96 mt-24 bg-white px-4 md:px-0'>
          <h1 className='font-bold text-xl'>Sign In</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='light'
            providers={null}
          />
        </div>
      ) : (
        <div className='w-full mt-12  bg-white'>
          <Profile />
        </div>
      )}
    </div>
  )
}

export default Home
