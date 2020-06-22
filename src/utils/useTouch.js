import { useRef, useEffect } from "react";

const useTouch = (onTouchStart, onTouchMove, onTouchEnd) =>{
    const element = useRef();
    useEffect(()=>{
        const { current } = element; 
        if(current){
            if(onTouchStart && typeof onTouchStart === 'function'){
                current.addEventListener("touchstart", onTouchStart);
            }
            if(onTouchMove && typeof onTouchMove === 'function'){
                current.addEventListener("touchmove", onTouchMove);
            }
            if(onTouchEnd && typeof onTouchEnd === 'function'){
                current.addEventListener("touchend", onTouchEnd);
            }
        }
        return ()=>{
            if(current){
                if(onTouchStart && typeof onTouchStart === 'function'){
                    current.removeEventListener("touchstart", onTouchStart);
                }
                if(onTouchMove && typeof onTouchMove === 'function'){
                    current.removeEventListener("touchmove", onTouchMove);
                }
                if(onTouchEnd && typeof onTouchEnd === 'function'){
                    current.removeEventListener("touchend", onTouchEnd);
                }
            }
        }
    },[onTouchEnd, onTouchMove, onTouchStart]);
    
    return element;
}

export default useTouch;