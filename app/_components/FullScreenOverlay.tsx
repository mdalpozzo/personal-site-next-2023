import React from 'react'

const FullScreenOverlay = ({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking the child component
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
                {children}
            </div>
        </div>
    )
}

export default FullScreenOverlay
