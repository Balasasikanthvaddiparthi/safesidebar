import React, { useContext } from 'react'
import { FiTool } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import "./SideBarred.css"
import { MyContext } from '../../Mycontext'

function SideBar() {

  const {role}=useContext(MyContext)

  return (
    <div className="drawer drawer-start">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" defaultChecked />
    <div className="drawer-content">
      {/* Page content here */}
      <label 
        htmlFor="my-drawer-4" 
        className="drawer-button btn btn-primary toggle-btn"
      >
        Toggle Menu
      </label>
    </div>
    <div className="drawer-side">
      <label 
        htmlFor="my-drawer-4" 
        aria-label="close sidebar" 
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg font-semibold">
        {/* Sidebar content here */}
        <li style={{ color: '#61DAFB' }}>
          <Link to="/Home"><FiTool /> Home</Link>
        </li>
        {role==="Superadmin" && (
          <li>
          <Link to="/Documentation"><FiTool /> Documentation</Link>
        </li>
        )}
        
        <hr className='mb-4'/>
        <li style={{ color: '#61DAFB' }}>Sidebar Item 1</li>
        <li>Sidebar Item 2</li>
        <hr className='mb-4'/>
        <li style={{ color: '#61DAFB' }}>Sidebar Item 1</li>
        <li>Sidebar Item 2</li>
        <li style={{ color: '#61DAFB' }}>Sidebar Item 1</li>
        <li>Sidebar Item 2</li>
        <hr className='mb-4'/>
      </ul>
    </div>
  </div>
  )
}

export default SideBar