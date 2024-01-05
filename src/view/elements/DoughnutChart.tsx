/* eslint-disable no-nested-ternary */
// Core
import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Fonts
import { MyFonts } from '@/assets/fonts';

//Styles
import { defaultTheme } from '@/assets';
import styled from 'styled-components';

// Types
type PropTypes = {
    /* type props here */
    data: number
}


const Container = styled.div`
    /* styles here */
    width: 126px;
    height: 126px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart: FC<PropTypes> = ({ data }) => {
    const status = data <= 33 ? 'low' : data <= 66 && data > 33 ? 'moderate' : 'high';
    const color = status === 'low' ? '#067647' : status === 'moderate' ? '#DF9300' : '#B42318';
    const backgroundColor = status === 'low' ? '#ECFDF3' : status === 'moderate' ? '#FFFBF1' : '#FEF3F2';

    return (
        <Container>
            <Doughnut
                data = {{ datasets: [
                    {
                        data:            [ data, 100 - data ],
                        backgroundColor: [ color, 'transparent' ],
                        borderWidth:     1,
                        borderColor:     backgroundColor,
                        borderRadius:    10,
                    },
                ]}}
                options = {
                    {
                        cutout:  '88%',
                        plugins: {
                            tooltip: {
                                enabled: false,
                            },
                        },
                        events: [],
                    }
                }
                plugins = { [
                    {
                        id:         'FillWithColor',
                        beforeDraw: (chart) => {
                            let ctx = chart.ctx;
                            let chartArea = chart.chartArea;
                            let cutoutRadius = 58;

                            // Draw a circle to fill the hole background
                            ctx.save();
                            ctx.beginPath();
                            ctx.arc(
                                (chartArea.left + chartArea.right) / 2,
                                (chartArea.top - 5) + (chartArea.bottom / 2),
                                cutoutRadius, 0, 2 * Math.PI,
                            );
                            ctx.fillStyle = backgroundColor;
                            ctx.fill();
                            ctx.restore();
                        },
                    },
                    {
                        id: 'textCenter',
                        beforeDatasetDraw(chart) {
                            const { ctx } = chart;
                            ctx.save();
                            ctx.font = `normal 20px ${MyFonts.THICCCBOI.regular}, sans-seif`;
                            ctx.fillStyle = defaultTheme.text.gray.main;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(`${data}%`, chart.getDatasetMeta(0).data[ 0 ].x, chart.getDatasetMeta(0).data[ 0 ].y);
                        },
                    },
                ] }
            />
        </Container>
    );
};
