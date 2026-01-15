import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const DashboardLayout = ({children}) => {
  return (
     <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
