import React, { useState, useEffect } from 'react';
import '../css/component.css';

export default function ContractComponent({ order = {}, onClick }) {
    
    const [timeLeft, setTimeLeft] = useState('');
    const [progressPercentage, setProgressPercentage] = useState(100);

    const {orderType, orderId, status, orderQuantity, time, expiry} = order;

    const statusText = {
        matching: 'Matching',
        awaiting: 'Awaiting Payment',
        paid: 'Awaiting Confirmation',
        cancelled: 'Cancelled',
        completed: 'Completed',
        timeout: 'Order timeout',
        expired: 'Order has expired'
    };

    const orderStatusTextMessage = {
        matching: 'Potential buyer will match your order within 30 min.',
        awaiting: 'The order has been matched successfully, please wait patiently for payment.',
        paid: 'Buyer has paid the amount, please check the payment and confirm the order to get additional reward worth of 10.',
        cancelled: 'The order has been cancelled successfully.',
        completed: 'The order has beed complted successfully.',
        timeout: 'The order timeout.',
        expired: 'Order has expired'
    }

    const textColor = {
        matching: 'matchingStatusText',
        awaiting: 'awaitingStatusText',
        paid: 'completeStatusText',
        cancelled: 'expiredStatusText',
        completed: 'completeStatusText',
        timeout: 'timeoutStatusText',
        expired: 'expiredStatusText'
    };

    const shouldShowProgressBar = ['matching', 'awaiting', 'paid'].includes(status);
    const progressBarBgColor = {
        matching: 'orderProgressBarBgMatching',
        awaiting: 'orderProgressBarBgAwaiting',
        paid: 'orderProgressBarBgConfirming',
    }

    const progressBarColor = {
        matching: 'orderProgressBarColorMatching',
        awaiting: 'orderProgressBarColorAwaiting',
        paid: 'orderProgressBarColorConfirming',
    }

    const headerBg = {
        awaiting: "contractOrderHederBgAwaiting",
        paid: "contractOrderHederBgConfirming",
        cancelled: "contractOrderHederBgCancelled",
        expired: "contractOrderHederBgCancelled"
    }

    useEffect(() => {
        if (!order || !order.expiry || !order.time) return;

        const expiryTime = new Date(expiry).getTime();
        const createdTime = new Date(time).getTime();
        const totalDuration = expiryTime - createdTime;

        const updateCountdown = () => {
            const now = Date.now();
            const timeLeftMs = expiryTime - now;

            if (timeLeftMs <= 0) {
                setTimeLeft('00:00:000');
                setProgressPercentage(0);
                return;
            }

            const minutes = Math.floor(timeLeftMs / 60000);
            const seconds = Math.floor((timeLeftMs % 60000) / 1000);
            const milliseconds = timeLeftMs % 1000;

            setTimeLeft(
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`
            );

            const elapsed = now - createdTime;
            const progress = Math.max(0, 100 - ((elapsed / totalDuration) * 100));
            setProgressPercentage(progress);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 100); // update every 100ms

        return () => clearInterval(interval);
    }, [expiry, time]);


    const handleClick = () => {
        if (onClick) {
            onClick({orderType, orderId, status});
        }
    };

    return (
        <div className='contractComponentContainer' onClick={handleClick}>
            <div className={`contractComponentHeader`}>
                <div className={`contractComOrderTypeCard ${orderType === 'direct-sell' || orderType === 'sell-contract' ? 'sellCardView' : orderType === 'buy-contract' ? 'buyCardView' : '' }`}>
                    <div>
                        {
                            orderType === 'direct-sell' || orderType === 'sell-contract' ? 'SELL' :
                            orderType === 'buy-contract' ? 'BUY' :
                            ''
                        }
                    </div>
                </div>
                <div className='contractComponentOrderStatus'>
                    
                </div>
                <div className='contractComponentTimeout' style={{fontWeight: '400'}}>
                    <div className={textColor[status]}>
                        {statusText[status]} {/*Status Text*/}
                    </div>
                </div>
            </div>

            <div className='contractComponentOrderDetailContainer' style={{ marginTop: '15px' }}>
                <div className='orderDetailRowTag' style={{color: '#000000', fontWeight: '300', fontSize: '12px'}}>Amount</div>
                <div className='orderDetailRowData'>{orderQuantity} <span style={{color: '#2cc660'}}>ZEN</span></div>
            </div>

            <div className='contractComponentOrderDetailContainer'>
                <div className='orderDetailRowTag' style={{color: '#000000', fontWeight: '300', fontSize: '12px'}}>Order ID</div>
                <div className='orderDetailRowData' style={{fontWeight: '400'}}>{orderId}</div>
            </div>
            <div className='contractComponentOrderDetailContainer'>
                <div className='orderDetailRowTag' style={{color: '#000000', fontWeight: '300', fontSize: '12px'}}>Time</div>
                <div className='orderDetailRowData' style={{fontWeight: '400'}}>{time}</div>
            </div>
            {shouldShowProgressBar && (
                <div className='orderProgressBarContainer'>
                    <div className={`orderProgressBarBgContainer ${progressBarBgColor[status]}`}>
                        <div className='orderProgressBarExpiryTimer'>{timeLeft}</div>
                        <div className={`orderProgressBar ${progressBarColor[status]}`} style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>
            )}
            <div className='orderStatusMessageContainer' style={{fontSize: '12px'}}>
                {orderStatusTextMessage[status]}
            </div>
        </div>
    );
}
