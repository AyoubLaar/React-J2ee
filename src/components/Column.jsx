export default function Column({ children, gap, justifyContent, alignItems, padding, width, height }) {
    if (width == undefined) width = "auto";
    if (height == undefined) height = "auto";
    if (justifyContent == undefined) justifyContent = "start";
    if (alignItems == undefined) alignItems = "start";
    return (
        <div style={{

            padding: padding, width: width, height: height, display: "flex", flexDirection: "column", gap: gap, justifyContent: justifyContent, alignItems: alignItems
        }}>
            {children}
        </div>
    )
}