import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.style = {
            backgroundColor: '#9F0013',
            color: 'white',
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '0 auto'
        };

        this.state = {
            error: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <section style={this.style}>
                        <h2>
                            Something went wrong!
                        </h2>
                        <h2>
                            This component was broken!
                        </h2>
                    </section>
                </>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
};
