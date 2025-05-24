import React from "react";
import "./Map.css";

interface MapProps {
    width?: string;
    height?: string;
}

const Map: React.FC<MapProps> = ({ width = "640", height = "480" }) => {
    return (
        <div className="cache_misere">
            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1Lqm1MBoy0AeiJmOwDdSmwYPwI0PSBRw&ehbc=2E312F"
                width={width}
                height={height}
            ></iframe>
        </div>
    );
};

export default Map;
