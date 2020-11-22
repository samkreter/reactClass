import React from 'react';


const Link = ({href, className, children}) => {
    const onClick = (e) => {
        // Allow clicking on ctrl or command to spawn the link in new tab
        if (e.ctrlKey || e.metaKey){
            return;
        }

        e.preventDefault();

        window.history.pushState({},'', href)

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }
    
    return <a 
                onClick={onClick}
                className={className} 
                href={href}
            >
                {children}
            </a>
};

export default Link;