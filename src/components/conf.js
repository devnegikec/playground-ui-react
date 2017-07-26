const conf = {
    container: document.getElementById('cy'),

    minZoom: 0.1,
    maxZoom: 100,
    wheelSensitivity: 0.1,

    layout: {
      name: 'circle'
    },

    style: [{
        selector: 'node',
        style: {
          'width': 200,
          'height': 200,
          'content': 'data(text)',
          //          'text-opacity': 0.5,
          'text-valign': 'center',
          'color': 'white',
          'background-color': '#000',
          'text-outline-width': 2,
          'text-outline-color': '#222'
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 10,
          'target-arrow-shape': 'triangle',
          'line-color': 'data(color)',
          'target-arrow-color': '#9dbaea'
        }
      },

      {
        selector: ':selected',
        style: {
          'background-color': 'yellow',
          'line-color': 'yellow',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
        }
      },

      {
        selector: 'edge:selected',
        style: {
          'width': 20
        }
      }
    ],

    elements: {
      //selectable: false, 
      grabbable: false,
      nodes: [{
        data: {
          id: '0',
          text: 'abc'
        }
      }, {
        data: {
          id: '1',
          text: 'def'
        }
      }, {
        data: {
          id: '2',
          text: 'ghi'
        }
      }, {
        data: {
          id: '3',
          text: 'jkl'
        }
      }], // nodes
      edges: [{
          data: {
            color: '#f00',
            source: '0',
            target: '1'
          }
        }, {
          data: {
            color: '#f00',
            source: '1',
            target: '2'
          }
        }, {
          data: {
            color: '#f00',
            source: '2',
            target: '3'
          }
        }, {
          data: {
            color: '#f00',
            source: '0',
            target: '2'
          }
        }, {
          data: {
            color: '#000',
            source: '0',
            target: '3'
          }
        }, {
          data: {
            color: '#f00',
            source: '0',
            target: '3'
          }
        }] // edges
    } // elements
  };

  export default  conf;