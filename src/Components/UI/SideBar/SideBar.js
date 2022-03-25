import { useState, useEffect, useCallback } from "react";
import './Sidebar.scss';
import SVG from "../../svg/SVG";

let sideBarTransitionHandle = null;

const Sidebar =(props)=>{
    const header = props.header || 'Default Header';
    const content = props.children;
    const showSidebar = props.showSidebar || false;
    const closeSidebar = props.closeSidebar || (()=>{throw new Error("No Close Function set for Sidebar")});
    const [transitionClass, setTransitionClass] = useState('closed');

    const TransitionSideBar = useCallback(()=>{
        if(sideBarTransitionHandle){
            clearTimeout(sideBarTransitionHandle);
            sideBarTransitionHandle=null;
        }
        if(showSidebar){
            if(transitionClass === 'open') return;
            setTransitionClass('opening');
            sideBarTransitionHandle = setTimeout(()=>{
                setTransitionClass('open');
                clearTimeout(sideBarTransitionHandle);
                sideBarTransitionHandle = null;
            }, 200);
        }
        else{
            if(transitionClass === 'closed') return;
            setTransitionClass('closing');
            sideBarTransitionHandle = setTimeout(()=>{
                setTransitionClass('closed');
                clearTimeout(sideBarTransitionHandle);
                sideBarTransitionHandle = null;
            }, 200);
        }
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