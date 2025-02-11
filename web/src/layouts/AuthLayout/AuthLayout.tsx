import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="min-w-screen min-h-screen bg-[center-top] bg-silverTree bg-auth bg-[length:1440px_auto] bg-no-repeat min-[1440px]:bg-[length:100%_auto] dark:bg-nileBlue">
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-24 w-[460px] pt-24"
        />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AuthLayout
