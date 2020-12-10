import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { toAbsoluteUrl } from "../_metronic/_helpers";
import "../_metronic/_assets/sass/pages/login/classic/login-1.scss";

let DynamicComponentWithNoSSR = dynamic(
  () => import('../components/auth/Login'),
  { ssr: false }
)

export default function Auth() {
  const router = useRouter();
  // const [ComponentRender, setComponentRender] = useState(Login);
  console.log(router, 'router>>>>');
  switch(router.asPath) {
    case '/auth/forgot-password':
      DynamicComponentWithNoSSR = dynamic(
        () => import('../components/auth/ForgotPassword'),
        { ssr: false }
      );
      break;
    case '/auth/register':
      DynamicComponentWithNoSSR = dynamic(
        () => import('../components/auth/Register'),
        { ssr: false }
      );
      break;
    default:
      DynamicComponentWithNoSSR = dynamic(
        () => import('../components/auth/Login'),
        { ssr: false }
      );
  }

  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
              height: '100vh'
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              {/* start:: Aside header */}
              <Link href="/">
                <div className="flex-column-auto mt-5 cursor-pointer">
                  <img
                    alt="Logo"
                    className="max-h-70px"
                    src={toAbsoluteUrl("/media/logos/logo-letter-1.png")}
                    // style={{
                    //   objectFit: 'scale-down'
                    // }}
                  />
                </div>
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              {/* <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 text-white welcome-text">
                  Welcome to VNA!
                </h3>
                <p className="font-weight-lighter text-white opacity-80">
                  The ultimate Bootstrap & React 16 admin theme framework for
                  next generation web apps.
                </p>
              </div> */}
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2020 VNA
                </div>
                <div className="d-flex">
                  <Link href="/terms">
                    <span className="text-white cursor-pointer">Điều khoản</span>
                  </Link>
                  <Link href="/terms">
                    <span className="text-white ml-10 cursor-pointer">Liên hệ</span>
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}    
          
          {/*begin::Content*/}
          <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
            {/*begin::Content header*/}
            <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                Không có tài khoản?
              </span>
              <Link
                href="/auth/register"
                id="kt_login_signup"
              >
                <span className="font-weight-bold ml-2 cursor-pointer">Đăng Ký!</span>
              </Link>
            </div>
            {/*end::Content header*/}
            {/* begin::Content body */}
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <DynamicComponentWithNoSSR />
            </div>
            {/* begin::Mobile footer */}
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 VNA
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link href="/terms">
                  <span className="text-dark-75 text-hover-primary cursor-pointer">Điều khoản</span>
                </Link>
                {/* <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link> */}
                <Link
                  href="/terms"
                >
                  <span className="text-dark-75 text-hover-primary ml-4 cursor-pointer">Liên hệ</span>
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>   
        </div>
      </div>
    </>
  )
}