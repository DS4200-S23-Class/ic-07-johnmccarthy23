// JS FILE ic-07

const data = [55000, 48000, 27000, 66000, 90000];
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const MARGINS = {left: 20, right: 20, top: 20, bottom: 20};


const FRAME1 = 
d3.select("#frame1")
    .append("svg")
        .attr("height", FRAME_HEIGHT)
        .attr("width", FRAME_WIDTH)
        .attr("class", "frame");


const MAX_Y = d3.max(data, (d) => {return d;});

const Y_SCALE = d3.scaleLinear()
                    .domain([0, MAX_Y + 10000])
                    .range([0, FRAME_HEIGHT - MARGINS.top]);

FRAME1.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", 100)
            .attr("cy", (d) => {
                return (Y_SCALE(d) + MARGINS.bottom);
            })
            .attr("r", 10)
            .attr("class", "point");

FRAME1.append("g")
        .attr("transform", 
            "translate(" + MARGINS.left + "," +(VIS_HEIGHT + MARGINS.top) + ")")
        .call(d2.axisBottom(X_SCALE).ticks(4))
            .attr("font-size", "20px");

    
