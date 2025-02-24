import LoginForm from "@/components/LoginForm";
import LogoComponent from "@/components/Logo";
import SignUp from "@/components/SignUpForm";


export default function Home() {
  return (
    <div className='h-screen overflow-hidden p-6 grid md:grid-cols-3'>
      <div className="hidden md:block bg-primary  rounded-r-2xl">
        <LogoComponent />
      </div>
      <div className="col-span-2 ">
        <LogoComponent />
        <div className='flex h-full items-center justify-center w-full'>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
