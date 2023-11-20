import React from "react"
export default function Row({ children, gap, justifyContent, alignItems, breakpoint, width, height, style }) {
    if (breakpoint == undefined) breakpoint = 700;
    if (width == undefined) width = "auto";
    if (height == undefined) height = "auto";

    const [windowstate, setWindow] = React.useState(null);
    React.useEffect(() => {
        setWindow(window.innerWidth);
        console.log(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindow(window.innerWidth)
        });
    }, [])
    return windowstate != null ? (
        <div style={{
            width: width, height: height, display: "flex", flexDirection: (windowstate > breakpoint ? "row" : "column"),
            gap: gap, justifyContent: windowstate > breakpoint ? justifyContent : alignItems,
            alignItems: windowstate > breakpoint ? alignItems : justifyContent,
            ...style
        }} >
            {children}
        </div>
    ) : <></>;
}