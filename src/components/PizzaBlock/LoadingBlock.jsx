import React, {Component} from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader className={'pizza-block'}
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="524" y="402" rx="0" ry="0" width="20" height="3"/>
            <rect x="426" y="365" rx="0" ry="0" width="29" height="45"/>
            <rect x="355" y="386" rx="0" ry="0" width="69" height="7"/>
            <circle cx="140" cy="140" r="140"/>
            <rect x="0" y="330" rx="6" ry="6" width="280" height="80"/>
            <rect x="2" y="416" rx="0" ry="0" width="72" height="18"/>
            <rect x="142" y="321" rx="0" ry="0" width="0" height="1"/>
            <rect x="0" y="290" rx="0" ry="0" width="280" height="30"/>
            <rect x="108" y="416" rx="0" ry="0" width="178" height="18"/>
        </ContentLoader>
    )
}

export default LoadingBlock;