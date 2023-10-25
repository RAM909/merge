import React from 'react';

class HTMLPage extends React.Component {
    render() {
        return (
            <div>
                <iframe
                 title="Your HTML Page"
                    src="/page/index.html"
                    width="100%"
                    height="600px"
                />
            </div>
        );
    }
}

export default HTMLPage;
