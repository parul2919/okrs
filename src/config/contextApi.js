// @flow
import * as React from 'react';
// Set Up The Initial Context
const AppContext: Object = React.createContext();
// Create an exportable consumer that can be injected into components
export const ContextApiConsumer = AppContext.Consumer;
// Create the provider using a traditional React.Component class

type State = {
  okrsData: Array<any>,
  okrsDisplayData: Array<any>,
  filterSelectionObj: Array<any>,
};

type Props = {
  children: React.Node,
};
class ContextApi extends React.Component<Props, State> {
  state = {
    okrsData: [],
    updateContextData: updatedState => this.updateContextData(updatedState),
    okrsDisplayData: [],
    filterSelectionObj:[],
  };

  updateContextData = (updatedState: Object) => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedState,
    }));
  };

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>;
  }
}
export default ContextApi;

export { ContextApi as ContextApiVanilla };
