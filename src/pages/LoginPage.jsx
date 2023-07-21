// import React from 'react'
import AuthPhoto from '../assets/02.png'

export default function LoginPage() {
  return (
    <div className='h-screen flex'>
      <div className="flex-1 flex max-lg:hidden  justify-center items-center">
        <div>
          <img src={AuthPhoto} alt="banner" className='h-screen w-screen object-cover'/>
        </div>
      </div>
      {/* right */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="m-24 flex flex-col gap-8 w-[80%]">
          <h1 className="text-8xl font-bold mb-8">Login</h1>
          <form action="" className="flex flex-col gap-4">
            <input type="email" placeholder="example@mail.com" className="border-2 p-4 text-xl outline-none rounded-lg" />
            <input type="password" className="border-2 p-4 text-xl outline-none rounded-lg" />
            <button type="submit" className="mt-4 p-4 text-4xl bg-[#db4c3f] text-white rounded-lg hover:bg-red-600">Login</button>
          </form>
          <div className="flex gap-4">
            <p className="text-xl text-gray-500 hover:text-[#db4c3f] cursor-pointer font-bold">forgot password</p>
            <p className="text-xl text-gray-500 " >Don't have an account ?
              <span className="hover:text-[#db4c3f] cursor-pointer font-bold">go to sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}