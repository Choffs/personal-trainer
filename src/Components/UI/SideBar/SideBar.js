import { useState, useEffect, useCallback, useRef } from "react";
import './Sidebar.scss';
import SVG from "../../svg/SVG";

const Sidebar =(props)=>{

    const header = props.header || 'Default Header';
    const content = props.children;
    const showSidebar = props.showSidebar || false;
    const closeSidebar = props.closeSidebar || (()=>{throw new Error("No Close Function set for Sidebar")});
    const [transitionClass, setTransitionClass] = useState('closed');
    const timeoutHandlerRef = useRef(null);

    const clearSideBarTimeout = ()=>{
        clearTimeout(timeoutHandlerRef.current);
        timeoutHandlerRef.current = null;
    }

    const TransitionSideBar = useCallback(()=>{
        if(timeoutHandlerRef.current){
            clearSideBarTimeout();
        }
        if(showSidebar){
            if(transitionClass === 'open') return;
            setTransitionClass('opening'); 
            timeoutHandlerRef.current = setTimeout(()=>{
                setTransitionClass('open');
                clearSideBarTimeout();
            }, 200);
            return;
        }
        else if(transitionClass === 'closed') return;
            setTransitionClass('closing');
            timeoutHandlerRef.current = setTimeout(()=>{
                setTransitionClass('closed');
                clearSideBarTimeout();
            }, 200);
        },[showSidebar, transitionClass]);

    useEffect(()=>{
        TransitionSideBar();
    },[showSidebar, TransitionSideBar]);

    return <aside className={`side-menu ${transitionClass}`}>
        <span className='d-flex text-light side-menu-head'><h2>{header}</h2> <span onClick={closeSidebar}><SVG>cancel</SVG></span></span>
        {content}
    </aside>
}
export default Sidebar;