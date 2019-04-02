import * as React from 'react';
import InfiniteAutocomplete from 'infinite-autocomplete';

/**
 * InfinityAutoComplete React Component
 * @extends React.Component
 * @author Islam Attrash
 */
export default class InfinityAutoComplete extends React.PureComponent<any, {}> {

    /**
     * Base element for the infinite-autocomplete
     */
    private baseElement:HTMLElement;
    /**
     * The plugin instance
     */
    private plugin:InfiniteAutocomplete;


    /**
     * InfinityAutoComplete Component constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
    }

    /**
     * componentDidMount lifecycle hook
     */
    componentDidMount() {
      this.init();
    }

    componentDidUpdate() {
        this.init();
    }

    /**
     * componentDidMount lifecycle hook
     */
    init() {
        if (this.plugin) { this.plugin.destroy() };
        this.plugin = InfiniteAutocomplete(this.props, this.baseElement);
    }

    /**
     * componentWillUnmount lifecycle hook
     */
    componentWillUnmount() {
        this.plugin.destroy();
    }


    /**
     * Render method
     * @returns string
     */
    render() {
        return <div ref={(base) => this.baseElement = base }></div>;
    }
}
