// src/types/react-slick.d.ts
declare module 'react-slick' {
    import * as React from 'react';

    export interface Settings {
        dots?: boolean;
        arrows?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        responsive?: Array<{
            breakpoint: number;
            settings: Partial<Settings>;
        }>;
        [key: string]: any;
    }

    export default class Slider extends React.Component<Settings> {}
}
