import React, { FC } from 'react';

interface IProp {
    height?: number
    width?: number
}

export const WarningIcon: FC<IProp> = ({ height, width }) => (
    <svg
        fill = 'none'
        height = { height ? `${height}` : '32' }
        viewBox = '0 0 32 32'
        width = { width ? `${width}` : '32' }
        xmlns = 'http://www.w3.org/2000/svg'>
        <mask
            height = '32'
            id = 'mask0_194_7753'
            maskUnits = 'userSpaceOnUse'
            // style = 'mask-type:alpha'
            width = '32'
            x = '0'
            y = '0'>
            <rect
                fill = '#D9D9D9'
                height = '32'
                width = '32'
            />
        </mask>
        <g mask = 'url(#mask0_194_7753)'>
            <path
                d = 'M16 20.82C16.3051 20.82 16.5609 20.7168 16.7673 20.5104C16.9737 20.304 17.0769 20.0483 17.0769 19.7431C17.0769 19.438 16.9737 19.1823 16.7673 18.9758C16.5609 18.7694 16.3051 18.6662 16 18.6662C15.6948 18.6662 15.4391 18.7694 15.2327 18.9758C15.0263 19.1823 14.9231 19.438 14.9231 19.7431C14.9231 20.0483 15.0263 20.304 15.2327 20.5104C15.4391 20.7168 15.6948 20.82 16 20.82ZM16.0004 16.2816C16.2839 16.2816 16.5213 16.1858 16.7128 15.9941C16.9042 15.8025 16.9999 15.565 16.9999 15.2817V10.8457C16.9999 10.5624 16.9041 10.3249 16.7123 10.1332C16.5206 9.94158 16.283 9.84576 15.9995 9.84576C15.7161 9.84576 15.4786 9.94158 15.2872 10.1332C15.0957 10.3249 15 10.5624 15 10.8457V15.2817C15 15.565 15.0959 15.8025 15.2876 15.9941C15.4794 16.1858 15.717 16.2816 16.0004 16.2816ZM16 28.4944C15.8615 28.4944 15.7256 28.4833 15.5923 28.4611C15.4589 28.4388 15.3298 28.4055 15.2048 28.3611C12.3931 27.3611 10.156 25.588 8.4936 23.0418C6.8312 20.4957 6 17.7483 6 14.7996V8.79446C6 8.28799 6.14562 7.83217 6.43687 7.42699C6.72811 7.02182 7.10471 6.72807 7.56667 6.54576L15.1564 3.71243C15.4419 3.60987 15.7231 3.55859 16 3.55859C16.2769 3.55859 16.5581 3.60987 16.8435 3.71243L24.4333 6.54576C24.8952 6.72807 25.2718 7.02182 25.5631 7.42699C25.8543 7.83217 25.9999 8.28799 25.9999 8.79446V14.7996C25.9999 17.7483 25.1687 20.4957 23.5063 23.0418C21.844 25.588 19.6069 27.3611 16.7951 28.3611C16.6701 28.4055 16.541 28.4388 16.4077 28.4611C16.2743 28.4833 16.1384 28.4944 16 28.4944ZM16 26.5329C18.3111 25.7996 20.2222 24.3329 21.7333 22.1329C23.2444 19.9329 24 17.4885 24 14.7996V8.78163C24 8.69616 23.9765 8.61924 23.9294 8.55086C23.8824 8.48246 23.8162 8.43117 23.7307 8.39699L16.141 5.56366C16.0983 5.54657 16.0513 5.53803 16 5.53803C15.9487 5.53803 15.9017 5.54657 15.8589 5.56366L8.26923 8.39699C8.18374 8.43117 8.1175 8.48246 8.0705 8.55086C8.02348 8.61924 7.99997 8.69616 7.99997 8.78163V14.7996C7.99997 17.4885 8.75552 19.9329 10.2666 22.1329C11.7777 24.3329 13.6889 25.7996 16 26.5329Z'
                fill = 'url(#paint0_linear_194_7753)'
            />
        </g>
        <defs>
            <linearGradient
                gradientUnits = 'userSpaceOnUse'
                id = 'paint0_linear_194_7753'
                x1 = '16'
                x2 = '16'
                y1 = '3.55859'
                y2 = '28.4944'>
                <stop stopColor = '#D939DE'/>
                <stop
                    offset = '1'
                    stopColor = '#6321E8'
                />
            </linearGradient>
        </defs>
    </svg>
);
