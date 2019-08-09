import './style.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/*The PieChart component is used for graphic in a pie chart a group of data for view some kind of result represent in percentages*/

function PieChart({ objectKey, data, title }) {
    const dataElements = [];
    const randomNumbersUsed = [];
    let lastRandomNumber = 0;

    const ColorsChart = {
        RED: 'red',
        YELLOW: 'yellow',
        MAGENTA: 'magenta',
        LIGHTSEAGREEN: 'lightseagreen',
        LIME: 'lime',
        LAVANDERBLUSH: 'lavanderblush',
        SKYBLUE: 'skyblue',
        LIGHTGRAY: 'lightgray',
        LIGHTPINK: 'lightpink',
        LIGHTCYAN: 'lightcyan'
    };

    function randomNumber() {
        const rand = Math.floor(Math.random() * Object.keys(ColorsChart).length);
        if (!randomNumbersUsed.find(element => element === rand)) {
            randomNumbersUsed.push(rand);
            lastRandomNumber = rand;
        } else {
            randomNumber();
        }
        return lastRandomNumber;
    };

    function filterElements(key, arrayElements) {
        arrayElements.forEach((element) => {
            if (!dataElements.length || !dataElements.find(dataElement => dataElement.tag === element[key])) {
                const elementObject = {
                    tag: element[key],
                    cont: 0,
                    percent: 0,
                    color: ''
                }
                dataElements.push(elementObject)
            }
        });
        countNumberOfElements(key, arrayElements);
    }

    function countNumberOfElements(key, arrayElements) {
        arrayElements.forEach(element1 =>
            dataElements.forEach(element2 => {
                if (element1[key] === element2.tag) {
                    element2.cont++
                }
            })
        )
    }

    function calculatePercent(objectKey, arrayElements) {
        filterElements(objectKey, arrayElements);
        dataElements.forEach(element => {
            element.percent = Math.round(element.cont / arrayElements.length * 100).toFixed(2)
            element.color = ColorsChart[Object.keys(ColorsChart)[randomNumber()]]
        })
        dataElements.sort((a, b) => b.percent - a.percent);
    }

    function updateChart() {
        const char = document.querySelector("div.pieChart");
        let cont = 1;
        let percent = 0;
        let gradient = '';
        dataElements.forEach(element => {
            percent = Math.round(percent * 1 + element.percent * 1);
            if (cont === 1) {
                gradient += `conic-gradient(${element.color} ${Math.round(element.percent)}%,`;
            }
            if (cont === dataElements.length) {
                gradient += ` ${element.color} 0)`;
            }
            if (cont > 1 && cont !== dataElements.length) {
                gradient += ` ${element.color} 0 ${percent}%,`;
            }
            cont++;
        })
        char.style.background = gradient;
    }

    calculatePercent(objectKey, data);
    useEffect(function componentDidMount() {
        updateChart();
        return function componentWillUnMount() {
        }
    });
    return (
        <section className="pieChartComponent">
            <div className="pieChart">
                <div className="title">{title}</div>
                <div className="dataElements">
                    {dataElements.map(element =>
                        <div className="elements">
                            <div className={`${element.color}`}></div>
                            <p className="identifier">{element.tag}</p>
                            <p className="percent">{element.percent}%</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

PieChart.defaultProps = {
    objectKey: '',
    data: [],
    title: ''
};

PieChart.propTypes = {
    /* A identifier that serves to perform the filtering of the data to be calculated and displayed */
    objectKey: PropTypes.string,
    /*The array of objects that will content the data for the calculates and renderize*/
    data: PropTypes.arrayOf(Object),
    /*The principal title for the chart*/
    text: PropTypes.string
};

export default PieChart;