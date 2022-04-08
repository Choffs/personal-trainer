import { useEffect, useState, useRef, useMemo, useCallback } from "react"

const useIntersect = (elem, callback, options = {})=>{

    const observerRef = useRef(null);
   
    const destroyObserve = useCallback(()=>{
        if(observerRef.current){
            observerRef.current.unobserve(elem.current);
            observerRef.current = null;
        }
    },[observerRef, elem]);


    useEffect(() => {
        const currentRef = elem.current;
        console.log(currentRef);
        if(!observerRef.current && currentRef){
        observerRef.current = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    console.log('intersecting');
                    if(typeof callback == 'function'){
                        callback();
                        
                    }
                destroyObserve();
                }
            })
        },options)
        observerRef.current.observe(currentRef);
    }
    return ()=>{
        if(observerRef.current){
            observerRef.current.unobserve(currentRef);
            observerRef.current = null;
        }
    }
    },[observerRef, options, elem, callback, destroyObserve])

}
export default useIntersect;