import React, { useEffect, useState } from "react";

export default function DualSlider(props) {
    const [reset, setReset] = [props.reset, props.setReset];

    const [slider1Value, setSlider1Value] = useState(props.min);
    const [slider2Value, setSlider2Value] = useState(props.max);

    const [slider1Z, setSlider1Z] = useState("z-[7]");
    const [slider2Z, setSlider2Z] = useState("z-[6]");

    const [rangeLeft, setRangeLeft] = useState("0%");
    const [rangeRight, setRangeRight] = useState("0%");

    useEffect(() => {
        setSlider1Value(props.min);
        setSlider2Value(props.max);

        setRangeLeft("0%");
        setRangeRight("0%");
    }, [reset, props.min, props.max]);

    const handleSlider1ValueChange = (newValue) => {
        const value = Math.min(parseInt(newValue), parseInt(slider2Value));
        const percent = value / props.max * 100;

        setSlider1Value(value);
        setRangeLeft(percent + "%");

        if (percent > 50) {
            setSlider1Z("z-[7]");
            setSlider2Z("z-[6]");
        }
    }

    const handleSlider2ValueChange = (newValue) => {
        const value = Math.max(newValue, parseInt(slider1Value));
        const percent = value / props.max * 100;

        setSlider2Value(value);
        setRangeRight((100 - percent) + "%");

        if (percent < 50) {
            setSlider2Z("z-[7]");
            setSlider1Z("z-[6]");
        }
    }
    
    return (
        <div className="w-full relative inline-flex flex-col items-center gap-2">
            <div className="left-0 w-full h-4 inline-flex flex-row items-center dual-slider">
                <div id="track1" className="absolute z-[3] left-[1%] bg-green h-1 w-[51%]"></div>
                <div id="track2" className="absolute z-[3] right-[1%] bg-green h-1 w-[51%]"></div>
                <div id="trackRange" className="absolute z-[3] bg-light-green h-1" style={{left: rangeLeft, right: rangeRight}}></div>
                <input id="slider1" type="range"  min={props.min} max={props.max} step="1" defaultValue={slider1Value} value={slider1Value} onInput={(e) => handleSlider1ValueChange(e.target.value)}
                    className={"absolute w-full h-4 " + slider1Z} ref={props.value1Ref}
                />
                <input id="slider2" type="range" min={props.min} max={props.max} step="1" defaultValue={slider2Value} value={slider2Value} onInput={(e) => handleSlider2ValueChange(e.target.value)}
                    className={"absolute w-full h-4 " + slider2Z} ref={props.value2Ref}
                />
            </div>    
            <div className="inline-flex flex-row w-full justify-between">
                <div id="value1" className="left-0 bottom-0 font-roboto">{(props.prefix ? props.prefix : '') + slider1Value}</div>
                <div id="value1" className="right-0 bottom-0 font-roboto">{(props.prefix ? props.prefix : '') + slider2Value}</div>
            </div>
        </div>
    )
}