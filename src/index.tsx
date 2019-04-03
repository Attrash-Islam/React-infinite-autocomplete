import * as React from 'react';
import InfiniteAutocomplete from 'infinite-autocomplete';

/**
 * InfinityAutoComplete React Component
 * @extends React.Component
 * @author Islam Attrash
 */
export default class InfinityAutoComplete extends React.Component<any, {}> {

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

        this.update = this.update.bind(this);
    }

    /**
     * componentDidMount lifecycle hook
     */
    componentDidMount() {
      this.update({});
    }

    componentDidUpdate(prevProps) {
        this.update(prevProps);
    }

    /**
     * componentDidMount lifecycle hook
     */
    update(prevProps) {
        if (!this.plugin) {
            this.plugin = InfiniteAutocomplete(this.props, this.baseElement);
            return;
        }

        const {
            value,
            fetchSize,
            onSelect,
            data
        } = this.props;

        let stateSlice = {};
        if (value !== prevProps.value) {
            stateSlice = { ...stateSlice, value };
        };

        if (fetchSize !== prevProps.fetchSize) {
            stateSlice = { ...stateSlice, fetchSize };
        };

        if (onSelect !== prevProps.onSelect) {
            stateSlice = { ...stateSlice, onSelect };
        };

        if (data !== prevProps.data) {
            stateSlice = { ...stateSlice, data };
        };

        this.plugin.setState(stateSlice);
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
