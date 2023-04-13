import { AnimatePresence } from "framer-motion"
import Dashboard from "Pages/Dashboard/Dashboard"
import { Route, Routes, useLocation } from "react-router-dom"


function AnimetedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimetedRoutes