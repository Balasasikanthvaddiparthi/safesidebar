import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './RenderComponents/Home'
import Documentation from './RenderComponents/Documentation'
import { MyContext } from '../Mycontext'
import LoginForm from './LoginForm'

function GlobalRoutes({ isAuthenticated }) {

  const { role } = useContext(MyContext)

  return (
    <div>
      <main className=" w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 ">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {isAuthenticated && (
            <>
              <Route path="/Home" element={<Home />} />
              
              {role==="Superadmin" &&(
                            <Route path="/Documentation" element={<Documentation />} />
                        )}
            </>
          )}

        </Routes>
      </main>
    </div>
  )
}

export default GlobalRoutes