import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export function AlertProvider({ children }) {

    const [alerts, setAlerts] = useState([]);

    const showAlert = (message, type) => {
        //tao id
        const id = Date.now();

        const newAlert = {
            id: id,
            message: message,
            type: type
        };

        setAlerts([...alerts, newAlert]);

        setTimeout(() => {
            removeAlert(id);
        }, 4000);
    };

    // Hàm xóa alert theo ID
    const removeAlert = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    };

    // Giá trị mà các component con có thể dùng
    const value = {
        showAlert,
        removeAlert,
        alerts
    };

    return (
        <AlertContext.Provider value={value}>
            {children}

            <div style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 9999
            }}>
                {alerts.map(alert => (
                    <div
                        key={alert.id}
                        style={{
                            padding: '16px',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            background: alert.type === 'success' ? '#10b981' : '#ef4444',
                            color: 'white',
                            minWidth: '300px'
                        }}
                    >
                        {alert.message}
                        <button
                            onClick={() => removeAlert(alert.id)}
                            style={{
                                marginLeft: '10px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '18px'
                            }}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </AlertContext.Provider>
    );
}

// tao ra custom hook để dùng context
export function useAlert() {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error('useAlert phải được dùng trong AlertProvider!');
    }

    return context;
}