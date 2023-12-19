import React from 'react';

export const CircleRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        fill = 'none'
        height = { 24 }
        viewBox = '0 0 24 24'
        width = { 24 }
        xmlns = 'http://www.w3.org/2000/svg'
        { ...props }>
        <mask
            height = { 24 }
            id = 'a'
            maskUnits = 'userSpaceOnUse'
            style = {{
                maskType: 'alpha',
            }}
            width = { 24 }
            x = { 0 }
            y = { 0 }>
            <path
                d = 'M0 0h24v24H0z'
                fill = '#6023FA'
            />
        </mask>
        <g mask = 'url(#a)'>
            <path
                d = 'm13.03 12-2.557 2.558a.692.692 0 0 0-.208.513c0 .205.07.382.208.53a.699.699 0 0 0 .535.229.747.747 0 0 0 .534-.228l2.97-2.97a.867.867 0 0 0 .27-.632.867.867 0 0 0-.27-.633l-2.985-2.984a.71.71 0 0 0-.527-.22.716.716 0 0 0-.527.235.758.758 0 0 0-.21.527.71.71 0 0 0 .22.527L13.03 12Zm-1.028 9.5a9.255 9.255 0 0 1-3.705-.748 9.598 9.598 0 0 1-3.018-2.03 9.591 9.591 0 0 1-2.03-3.016 9.245 9.245 0 0 1-.749-3.704c0-1.314.25-2.55.748-3.705a9.597 9.597 0 0 1 2.03-3.018 9.592 9.592 0 0 1 3.016-2.03 9.245 9.245 0 0 1 3.704-.749c1.314 0 2.55.25 3.705.748a9.597 9.597 0 0 1 3.018 2.03 9.592 9.592 0 0 1 2.03 3.016 9.245 9.245 0 0 1 .749 3.704c0 1.314-.25 2.55-.748 3.705a9.598 9.598 0 0 1-2.03 3.018 9.592 9.592 0 0 1-3.016 2.03 9.245 9.245 0 0 1-3.704.749ZM12 20c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z'
                fill = '#6023FA'
            />
        </g>
    </svg>
);
