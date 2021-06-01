import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen , setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen , setIsSubmenuOpen] = useState(false);
    const [location , setLocation] = useState({});
    const [page,setPage] = useState({page:'' , links:[]})
    

    const openSidebar = ()=>{
        console.log("hello")
        setIsSidebarOpen(true);
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false);
    }

    const openSubmenu = (pageText , coordinates)=>{
        const page = sublinks.find((link)=>link.page === pageText);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
    }}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {useGlobalContext , AppContext , AppProvider}