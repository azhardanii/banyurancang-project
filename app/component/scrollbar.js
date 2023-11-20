'use client';
import { useRef, useEffect } from 'react';

export default function ScrollBar() {
    const bar = useRef(null);
    const icon = useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            let scrollBar = bar.current;
            let raftIcon = icon.current;
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            scrollBar.style.width = scrolled + '%';
            raftIcon.style.left = scrolled - 2.85 + '%';
        };
    });

    return (
        <>
            <img
                src="/raft-icon.png"
                ref={icon}
                id="icon"
                className="w-10 fixed bottom-0 z-50 -left-10"
            />
            <div className="w-full h-2 bg-slate-400 fixed bottom-0 z-40">
                <div
                    className="w-0 h-2 bg-[#00A0C8]"
                    ref={bar}
                    id="bar"></div>
            </div>
        </>
    );
}
