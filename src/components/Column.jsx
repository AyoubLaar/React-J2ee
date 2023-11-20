export default function Column({ children, gap, justifyContent, alignItems, padding, width, height, style }) {
    return (
        <div style={{
            padding: padding, width: width, height: height, display: "flex", flexDirection: "column", gap: gap, justifyContent: justifyContent, alignItems: alignItems
            , ...style
        }}>
            {children}
        </div>
    )
}