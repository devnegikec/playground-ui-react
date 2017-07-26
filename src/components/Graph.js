import React from 'react';
import cytoscape from 'cytoscape';
import conf from './conf';

let cyStyle = {
  height: '100%',
  display: 'block'
};

class Graph extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);

    this.cy.json({elements: this.props.elements});
  }

  componentWillReceiveProps(nextProps){
    this.cy.json(nextProps);
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillUnmount(){
    this.cy.destroy();
  }

  getCy(){
    return this.cy;
  }

  render(){
    return (<div style={cyStyle} ref="cyelement" />);
  }
}

Graph.propTypes = {
  elements: React.PropTypes.object.isRequired
};

export default Graph;